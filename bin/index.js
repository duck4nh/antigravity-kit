#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { downloadTemplate } from 'giget';
import path from 'path';
import fs from 'fs';
import readline from 'readline';

// ============================================================================
// CONSTANTS
// ============================================================================

const REPO = 'github:duck4nh/antigravity-kit';
const TEMPLATES_FOLDER = 'templates';
const AGENT_FOLDER = '.agent';
const OPENCODE_FOLDER = '.opencode';
const SHARED_FOLDER = 'shared';
const AGENTS_MD = 'AGENTS.md';
const TEMP_FOLDER = '.temp_ag_kit';

// IDE options
const IDE_OPTIONS = {
    antigravity: 'antigravity',
    opencode: 'opencode',
    both: 'both',
};

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Display ASCII banner
 */
const showBanner = () => {
    console.log(chalk.blueBright(`
    ╔══════════════════════════════════════╗
    ║      ANTIGRAVITY KIT CLI v2.0        ║
    ║   Supports: Antigravity + OpenCode   ║
    ╚══════════════════════════════════════╝
    `));
};

/**
 * Ask user for confirmation
 * @param {string} question - Question to ask
 * @returns {Promise<boolean>}
 */
const confirm = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(chalk.yellow(`${question} (y/N): `), (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
};

/**
 * Ask user to select IDE
 * @returns {Promise<string>}
 */
const selectIDE = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        console.log(chalk.cyan('\nSelect target IDE(s):'));
        console.log(chalk.gray('  1. antigravity - Antigravity IDE only (.agent folder)'));
        console.log(chalk.gray('  2. opencode    - OpenCode only (.opencode folder + AGENTS.md)'));
        console.log(chalk.gray('  3. both        - Both IDEs (recommended)'));
        
        rl.question(chalk.yellow('\nEnter choice (1/2/3) [default: 3]: '), (answer) => {
            rl.close();
            const choice = answer.trim() || '3';
            switch (choice) {
                case '1':
                case 'antigravity':
                    resolve(IDE_OPTIONS.antigravity);
                    break;
                case '2':
                case 'opencode':
                    resolve(IDE_OPTIONS.opencode);
                    break;
                default:
                    resolve(IDE_OPTIONS.both);
            }
        });
    });
};

/**
 * Clean up temporary directory
 * @param {string} tempDir - Temp directory path
 */
const cleanup = (tempDir) => {
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
    }
};

/**
 * Copy folder from temp to destination
 * @param {string} source - Source directory
 * @param {string} dest - Destination directory
 */
const copyFolder = (source, dest) => {
    if (!fs.existsSync(source)) {
        throw new Error(`Could not find source folder: ${source}`);
    }
    fs.cpSync(source, dest, { recursive: true });
};

/**
 * Copy file from source to destination
 * @param {string} source - Source file
 * @param {string} dest - Destination file
 */
const copyFile = (source, dest) => {
    if (!fs.existsSync(source)) {
        throw new Error(`Could not find source file: ${source}`);
    }
    fs.copyFileSync(source, dest);
};

/**
 * Install for Antigravity IDE
 * @param {string} tempDir - Temp directory
 * @param {string} targetDir - Target directory
 */
const installAntigravity = (tempDir, targetDir) => {
    const sourceAgent = path.join(tempDir, TEMPLATES_FOLDER, AGENT_FOLDER);
    const destAgent = path.join(targetDir, AGENT_FOLDER);
    
    copyFolder(sourceAgent, destAgent);
    
    return destAgent;
};

/**
 * Install for OpenCode IDE
 * @param {string} tempDir - Temp directory
 * @param {string} targetDir - Target directory
 */
const installOpenCode = (tempDir, targetDir) => {
    const sourceOpencode = path.join(tempDir, TEMPLATES_FOLDER, OPENCODE_FOLDER);
    const sourceAgentsMd = path.join(tempDir, TEMPLATES_FOLDER, AGENTS_MD);
    const sourceShared = path.join(tempDir, TEMPLATES_FOLDER, SHARED_FOLDER);
    
    const destOpencode = path.join(targetDir, OPENCODE_FOLDER);
    const destAgentsMd = path.join(targetDir, AGENTS_MD);
    const destShared = path.join(targetDir, SHARED_FOLDER);
    
    // Copy .opencode folder
    copyFolder(sourceOpencode, destOpencode);
    
    // Copy AGENTS.md to root
    copyFile(sourceAgentsMd, destAgentsMd);
    
    // Copy shared folder
    if (fs.existsSync(sourceShared)) {
        copyFolder(sourceShared, destShared);
    }
    
    return { destOpencode, destAgentsMd, destShared };
};

// ============================================================================
// COMMANDS
// ============================================================================

/**
 * Initialize agent folders in project
 */
const initCommand = async (options) => {
    showBanner();

    const targetDir = path.resolve(options.path || process.cwd());
    const tempDir = path.join(targetDir, TEMP_FOLDER);
    
    // Determine IDE target
    let ideTarget = options.ide;
    if (!ideTarget) {
        ideTarget = await selectIDE();
    }
    
    console.log(chalk.gray(`\nTarget IDE(s): ${chalk.cyan(ideTarget)}`));
    
    // Check existing folders
    const agentDir = path.join(targetDir, AGENT_FOLDER);
    const opencodeDir = path.join(targetDir, OPENCODE_FOLDER);
    const agentsMdPath = path.join(targetDir, AGENTS_MD);
    
    const existingFolders = [];
    if ((ideTarget === IDE_OPTIONS.antigravity || ideTarget === IDE_OPTIONS.both) && fs.existsSync(agentDir)) {
        existingFolders.push(AGENT_FOLDER);
    }
    if ((ideTarget === IDE_OPTIONS.opencode || ideTarget === IDE_OPTIONS.both) && fs.existsSync(opencodeDir)) {
        existingFolders.push(OPENCODE_FOLDER);
    }
    if ((ideTarget === IDE_OPTIONS.opencode || ideTarget === IDE_OPTIONS.both) && fs.existsSync(agentsMdPath)) {
        existingFolders.push(AGENTS_MD);
    }
    
    if (existingFolders.length > 0 && !options.force) {
        console.log(chalk.yellow(`\nExisting files/folders found: ${existingFolders.join(', ')}`));
        const shouldOverwrite = await confirm('Do you want to overwrite them?');
        
        if (!shouldOverwrite) {
            console.log(chalk.gray('Operation cancelled.'));
            process.exit(0);
        }
    }

    const spinner = ora({
        text: 'Downloading from repository...',
        color: 'cyan',
    }).start();

    try {
        // Download repository using giget
        const repoSource = options.branch ? `${REPO}#${options.branch}` : REPO;
        await downloadTemplate(repoSource, {
            dir: tempDir,
            force: true,
        });

        spinner.text = 'Installing files...';
        
        const installedPaths = [];
        
        // Install based on IDE target
        if (ideTarget === IDE_OPTIONS.antigravity || ideTarget === IDE_OPTIONS.both) {
            const destAgent = installAntigravity(tempDir, targetDir);
            installedPaths.push(`${AGENT_FOLDER} → ${destAgent}`);
        }
        
        if (ideTarget === IDE_OPTIONS.opencode || ideTarget === IDE_OPTIONS.both) {
            const { destOpencode, destAgentsMd, destShared } = installOpenCode(tempDir, targetDir);
            installedPaths.push(`${OPENCODE_FOLDER} → ${destOpencode}`);
            installedPaths.push(`${AGENTS_MD} → ${destAgentsMd}`);
            if (fs.existsSync(destShared)) {
                installedPaths.push(`${SHARED_FOLDER} → ${destShared}`);
            }
        }

        // Cleanup
        cleanup(tempDir);

        spinner.succeed(chalk.green('Installation successful!'));

        // Success message
        console.log(chalk.gray('\n────────────────────────────────────────'));
        console.log(chalk.white('Installed:'));
        installedPaths.forEach(p => {
            console.log(`   ${chalk.cyan(p.split(' → ')[0])} → ${chalk.gray(p.split(' → ')[1])}`);
        });
        console.log(chalk.gray('────────────────────────────────────────'));
        
        // IDE-specific tips
        if (ideTarget === IDE_OPTIONS.opencode || ideTarget === IDE_OPTIONS.both) {
            console.log(chalk.cyan('\nOpenCode Tips:'));
            console.log(chalk.gray('  - Skills are loaded on-demand via the `skill` tool'));
            console.log(chalk.gray('  - Press Tab to switch between Build and Plan modes'));
            console.log(chalk.gray('  - AGENTS.md contains core rules (~2500 tokens)'));
        }
        if (ideTarget === IDE_OPTIONS.antigravity || ideTarget === IDE_OPTIONS.both) {
            console.log(chalk.cyan('\nAntigravity Tips:'));
            console.log(chalk.gray('  - Rules in .agent/rules/ are auto-loaded based on activation type'));
            console.log(chalk.gray('  - Skills are available in .agent/skills/'));
        }
        
        console.log(chalk.green('\nHappy coding!\n'));
    } catch (error) {
        spinner.fail(chalk.red(`Error: ${error.message}`));
        cleanup(tempDir);
        process.exit(1);
    }
};

/**
 * Update existing installation
 */
const updateCommand = async (options) => {
    showBanner();

    const targetDir = path.resolve(options.path || process.cwd());
    const agentDir = path.join(targetDir, AGENT_FOLDER);
    const opencodeDir = path.join(targetDir, OPENCODE_FOLDER);

    // Check what exists
    const hasAgent = fs.existsSync(agentDir);
    const hasOpencode = fs.existsSync(opencodeDir);
    
    if (!hasAgent && !hasOpencode) {
        console.log(chalk.red(`No existing installation found at: ${targetDir}`));
        console.log(chalk.yellow(`Tip: Run ${chalk.cyan('antigravity init')} to install first.`));
        process.exit(1);
    }

    // Determine what to update
    let ideTarget = options.ide;
    if (!ideTarget) {
        if (hasAgent && hasOpencode) {
            ideTarget = IDE_OPTIONS.both;
        } else if (hasAgent) {
            ideTarget = IDE_OPTIONS.antigravity;
        } else {
            ideTarget = IDE_OPTIONS.opencode;
        }
        console.log(chalk.gray(`Detected installation: ${chalk.cyan(ideTarget)}`));
    }

    if (!options.force) {
        console.log(chalk.yellow(`\nUpdate will overwrite the existing installation`));
        const shouldUpdate = await confirm('Are you sure you want to continue?');

        if (!shouldUpdate) {
            console.log(chalk.gray('Operation cancelled.'));
            process.exit(0);
        }
    }

    // Call init with force option
    await initCommand({ ...options, ide: ideTarget, force: true });
};

/**
 * Show status of installation
 */
const statusCommand = (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    const agentDir = path.join(targetDir, AGENT_FOLDER);
    const opencodeDir = path.join(targetDir, OPENCODE_FOLDER);
    const agentsMdPath = path.join(targetDir, AGENTS_MD);
    const sharedDir = path.join(targetDir, SHARED_FOLDER);

    console.log(chalk.blueBright('\nAntigravity Kit Status\n'));
    console.log(chalk.gray('────────────────────────────────────────'));

    // Check Antigravity
    console.log(chalk.white('\nAntigravity IDE (.agent):'));
    if (fs.existsSync(agentDir)) {
        const stats = fs.statSync(agentDir);
        const files = fs.readdirSync(agentDir, { recursive: true });
        console.log(chalk.green('  ✓ Installed'));
        console.log(`    Path:     ${chalk.gray(agentDir)}`);
        console.log(`    Modified: ${chalk.gray(stats.mtime.toLocaleString('en-US'))}`);
        console.log(`    Files:    ${chalk.yellow(files.length)} items`);
    } else {
        console.log(chalk.red('  ✗ Not installed'));
    }

    // Check OpenCode
    console.log(chalk.white('\nOpenCode IDE (.opencode):'));
    if (fs.existsSync(opencodeDir)) {
        const stats = fs.statSync(opencodeDir);
        const files = fs.readdirSync(opencodeDir, { recursive: true });
        console.log(chalk.green('  ✓ Installed'));
        console.log(`    Path:     ${chalk.gray(opencodeDir)}`);
        console.log(`    Modified: ${chalk.gray(stats.mtime.toLocaleString('en-US'))}`);
        console.log(`    Files:    ${chalk.yellow(files.length)} items`);
        
        // Check AGENTS.md
        if (fs.existsSync(agentsMdPath)) {
            console.log(chalk.green('  ✓ AGENTS.md present'));
        } else {
            console.log(chalk.yellow('  ! AGENTS.md missing'));
        }
    } else {
        console.log(chalk.red('  ✗ Not installed'));
    }

    // Check shared folder
    console.log(chalk.white('\nShared Resources:'));
    if (fs.existsSync(sharedDir)) {
        const files = fs.readdirSync(sharedDir, { recursive: true });
        console.log(chalk.green('  ✓ Installed'));
        console.log(`    Path:     ${chalk.gray(sharedDir)}`);
        console.log(`    Files:    ${chalk.yellow(files.length)} items`);
    } else {
        console.log(chalk.gray('  - Not installed (optional)'));
    }

    console.log(chalk.gray('\n────────────────────────────────────────'));
    
    if (!fs.existsSync(agentDir) && !fs.existsSync(opencodeDir)) {
        console.log(chalk.yellow(`\nTip: Run ${chalk.cyan('antigravity init')} to install.\n`));
    } else {
        console.log(chalk.gray(`\nTip: Run ${chalk.cyan('antigravity update')} to update to latest version.\n`));
    }
};

// ============================================================================
// CLI DEFINITION
// ============================================================================

const program = new Command();

program
    .name('antigravity')
    .description('CLI tool to install and manage Antigravity Kit for multiple IDEs')
    .version('2.0.0', '-v, --version', 'Display version number');

// Command: init
program
    .command('init')
    .description('Install agent configuration into your project')
    .option('-f, --force', 'Overwrite if folders already exist', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .option('-i, --ide <target>', 'Target IDE: antigravity, opencode, or both')
    .action(initCommand);

// Command: update
program
    .command('update')
    .description('Update installation to the latest version')
    .option('-f, --force', 'Skip confirmation prompt', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .option('-i, --ide <target>', 'Target IDE: antigravity, opencode, or both')
    .action(updateCommand);

// Command: status
program
    .command('status')
    .description('Check installation status')
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .action(statusCommand);

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
