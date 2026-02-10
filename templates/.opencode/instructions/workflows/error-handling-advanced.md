# Error Handling & Classification System

## Error Type Hierarchy

```
Error
├── Business Errors (Expected, handle gracefully)
│   ├── ValidationError (Invalid input)
│   ├── ConflictError (Resource conflict)
│   ├── NotFoundError (Resource not found)
│   └── AuthenticationError (Auth failed)
│
├── System Errors (Unexpected, log + investigate)
│   ├── DatabaseError (DB connection/query)
│   ├── ExternalServiceError (Third-party API)
│   └── FileSystemError (File operations)
│
└── Critical Errors (Alert + escalate)
    ├── SecurityError (Attack detected)
    └── DataCorruptionError (Integrity issue)
```

## Error Class Examples

### TypeScript
```typescript
// Base error class
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Business errors (operational = true)
export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 'NOT_FOUND', 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 'CONFLICT', 409);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication failed') {
    super(message, 'AUTHENTICATION_ERROR', 401);
  }
}

// System errors (operational = true but need monitoring)
export class DatabaseError extends AppError {
  constructor(message: string, originalError?: Error) {
    super(message, 'DATABASE_ERROR', 500, true);
    if (originalError) {
      this.cause = originalError;
    }
  }
}

export class ExternalServiceError extends AppError {
  constructor(service: string, message: string) {
    super(`${service}: ${message}`, 'EXTERNAL_SERVICE_ERROR', 502);
  }
}

export class FileSystemError extends AppError {
  constructor(message: string) {
    super(message, 'FILE_SYSTEM_ERROR', 500);
  }
}

// Critical errors (operational = false, needs immediate attention)
export class SecurityError extends AppError {
  constructor(message: string) {
    super(message, 'SECURITY_ERROR', 500, false);
  }
}

export class DataCorruptionError extends AppError {
  constructor(message: string) {
    super(message, 'DATA_CORRUPTION', 500, false);
  }
}
```

## Recovery Strategies

### Business Errors → User-Facing Messages
```typescript
try {
  await userService.create(dto);
} catch (error) {
  if (error instanceof ValidationError) {
    // Show validation to user
    return { error: error.message, field: error.field };
  } else if (error instanceof ConflictError) {
    // Show conflict message
    return { error: 'Email already registered' };
  } else if (error instanceof NotFoundError) {
    return { error: 'Resource not found' };
  } else {
    // Unexpected - log, show generic message
    logger.error('Unexpected error', error);
    return { error: 'Something went wrong' };
  }
}
```

### System Errors → Retry with Backoff
```typescript
async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      // Don't retry business errors
      if (error instanceof AppError && error.isOperational) {
        throw error;
      }

      // Exponential backoff with jitter
      const delay = Math.pow(2, i) * 1000 + Math.random() * 500;
      await sleep(delay);
    }
  }
  throw new Error('Max retries exceeded');
}
```

### Critical Errors → Alert & Escalate
```typescript
try {
  // ...operation
} catch (error) {
  if (error instanceof SecurityError) {
    // Log to security monitoring
    securityAlert.send({
      severity: 'HIGH',
      error: error.message,
      timestamp: Date.now(),
      context: error.context
    });

    // Notify on-call
    await pagerDuty.notify({
      message: 'Security incident detected',
      details: error,
      urgency: 'high'
    });
  }
  throw error;
}
```

## Error Handling Best Practices

### When Throwing Errors
- [ ] Use appropriate error type
- [ ] Include helpful message
- [ ] Add error code for tracking
- [ ] Include relevant context

### When Catching Errors
- [ ] Specific catch before generic
- [ ] Log with context
- [ ] User-friendly message for business errors
- [ ] Retry or escalate appropriately
- [ ] Don't swallow errors silently

### Error Logging Best Practices
```typescript
// ❌ Bad
logger.error(error);
console.log(error);

// ✅ Good
logger.error('User creation failed', {
  error: error.message,
  code: error.code,
  userId: dto.id,
  action: 'user.create',
  stack: error.stack,
  timestamp: new Date().toISOString()
});

// ✅ Even Better with structured logging
logger.error('User creation failed', {
  error: {
    message: error.message,
    code: error.code,
    stack: error.stack
  },
  context: {
    userId: dto.id,
    email: dto.email,
    action: 'user.create'
  },
  severity: 'error',
  timestamp: Date.now()
});
```

## Error Context Enrichment
```typescript
class AppError extends Error {
  public context: Record<string, any>;

  constructor(
    message: string,
    public code: string,
    context: Record<string, any> = {}
  ) {
    super(message);
    this.context = {
      timestamp: new Date().toISOString(),
      ...context
    };
  }
}

// Usage
throw new ValidationError('Invalid email', {
  field: 'email',
  providedValue: email,
  userId: user.id,
  action: 'user.update'
});
```

## Error Handler Middleware (Express/NestJS)
```typescript
export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Log error
  logger.error('Request error', {
    error: error.message,
    code: (error as AppError).code,
    path: req.path,
    method: req.method,
    ip: req.ip
  });

  // Handle operational errors
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: error.message,
      code: error.code
    });
  }

  // Handle unknown errors
  return res.status(500).json({
    error: 'Internal server error',
    code: 'INTERNAL_ERROR'
  });
}
```

## User-Facing vs System Errors

| Error Type           | Show to User        | Log Level | Action           |
| -------------------- | ------------------- | --------- | ---------------- |
| ValidationError      | ✅ Full message     | Info      | None             |
| NotFoundError        | ✅ Friendly message | Info      | None             |
| ConflictError        | ✅ Full message     | Warn      | Monitor          |
| AuthenticationError  | ✅ Generic message  | Warn      | Monitor          |
| DatabaseError        | ❌ Generic message  | Error     | Alert            |
| ExternalServiceError | ❌ Generic message  | Error     | Alert + Retry    |
| FileSystemError      | ❌ Generic message  | Error     | Alert            |
| SecurityError        | ❌ Generic message  | Critical  | Alert + Escalate |
| DataCorruptionError  | ❌ Generic message  | Critical  | Alert + Escalate |

## Error Handling Patterns

### 1. Circuit Breaker Pattern
```typescript
class CircuitBreaker {
  private failures = 0;
  private lastFailTime = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailTime > 60000) {
        this.state = 'HALF_OPEN';
      } else {
        throw new ExternalServiceError('Circuit breaker', 'Service unavailable');
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }

  private onFailure() {
    this.failures++;
    this.lastFailTime = Date.now();
    if (this.failures >= 5) {
      this.state = 'OPEN';
    }
  }
}
```

### 2. Fallback Pattern
```typescript
async function fetchWithFallback<T>(
  primary: () => Promise<T>,
  fallback: () => Promise<T>
): Promise<T> {
  try {
    return await primary();
  } catch (error) {
    logger.warn('Primary service failed, using fallback', { error });
    return await fallback();
  }
}
```

### 3. Timeout Pattern
```typescript
async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number
): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
  );

  return Promise.race([promise, timeout]);
}
```

## Error Monitoring Integration
```typescript
// Sentry example
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});

// Capture error with context
try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      component: 'UserService',
      action: 'create'
    },
    user: { id: userId },
    extra: {
      email: dto.email
    }
  });
  throw error;
}

// Datadog example
import { client } from './datadog';

logger.error('User creation failed', {
  error: error.message,
  code: error.code,
  userId: dto.id,
  datadog: {
    error: error,
    tags: ['user', 'create', 'failed']
  }
});
```

## Error Recovery Testing
```typescript
describe('Error Recovery', () => {
  it('should retry on database error', async () => {
    // Mock database to fail twice, then succeed
    db.query
      .mockRejectedValueOnce(new DatabaseError('Connection lost'))
      .mockRejectedValueOnce(new DatabaseError('Connection lost'))
      .mockResolvedValueOnce({ rows: [] });

    const result = await userService.create(dto);
    expect(result).toBeDefined();
    expect(db.query).toHaveBeenCalledTimes(3);
  });

  it('should not retry on validation error', async () => {
    await expect(userService.create(invalidDto))
      .rejects.toThrow(ValidationError);
    expect(db.query).toHaveBeenCalledTimes(0);
  });

  it('should alert on security error', async () => {
    jest.spyOn(securityAlert, 'send');

    await triggerSecurityScenario();

    expect(securityAlert.send).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'HIGH' })
    );
  });
});
```
