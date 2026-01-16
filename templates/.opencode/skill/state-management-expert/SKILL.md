---
name: state-management-expert
description: Expert in React state management including Redux Toolkit, Zustand, Jotai, React Query/TanStack Query, and Context API. Use for state architecture decisions, performance issues, or complex state logic.
---

# State Management Expert

Expert in React state management patterns and libraries.

## When Invoked

### Recommend Specialist
- **React component issues**: recommend react-expert
- **Performance profiling**: recommend react-performance-expert
- **API data fetching only**: recommend rest-api-expert

### Environment Detection
```bash
grep -E "redux|zustand|jotai|recoil|@tanstack/react-query" package.json 2>/dev/null
find . -name "store*" -o -name "*slice*" | head -5
```

## State Management Decision Tree

```
State Type?
├─ Server State (API data) → TanStack Query / SWR
├─ Global UI State → Zustand / Redux Toolkit
├─ Form State → React Hook Form / Formik
├─ URL State → nuqs / useSearchParams
└─ Local State → useState / useReducer
```

## Problem Playbooks

### Zustand (Recommended for most apps)

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        logout: () => set({ user: null }),
      }),
      { name: 'user-store' }
    )
  )
);

// Usage
function Component() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
}
```

### Redux Toolkit

```typescript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const { increment, decrement } = counterSlice.actions;
```

### TanStack Query (Server State)

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

function useCreatePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreatePostDto) => 
      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
```

### Context API (Simple cases)

```typescript
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
}
```

## Code Review Checklist

- [ ] Server state uses TanStack Query or SWR
- [ ] No prop drilling >2 levels
- [ ] Selectors used for derived state
- [ ] State normalized (no duplicates)
- [ ] Optimistic updates for mutations
- [ ] Loading/error states handled

## Anti-Patterns

1. **Storing server data in Redux** - Use React Query
2. **Global state for local concerns** - Use useState
3. **Over-fetching with Context** - Split contexts
4. **Missing selectors** - Causes unnecessary re-renders
5. **Duplicate state** - Single source of truth
