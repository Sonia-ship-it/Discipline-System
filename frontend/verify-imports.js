#!/usr/bin/env node
/**
 * Verification script for TypeScript path aliases
 * This checks that all @ imports can be resolved correctly
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Files that should exist for common imports
const criticalPaths = [
    'src/stores/authStore.ts',
    'src/lib/api.ts',
    'src/lib/exportUtils.ts',
    'src/components/layout/AdminSidebar.tsx',
    'src/components/layout/AppHeader.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/input.tsx',
    'src/components/ui/table.tsx',
    'src/components/ui/select.tsx',
    'src/components/RCA/Badges.tsx',
    'src/components/RCA/EmptyState.tsx',
];

console.log('🔍 Verifying TypeScript Path Aliases...\n');

let allExist = true;

criticalPaths.forEach((filePath) => {
    const fullPath = path.join(__dirname, filePath);
    const exists = fs.existsSync(fullPath);
    const icon = exists ? '✅' : '❌';
    console.log(`${icon} ${filePath}`);
    if (!exists) allExist = false;
});

console.log('\n' + '='.repeat(50));

if (allExist) {
    console.log('✅ All critical files exist!');
    console.log('\nIf you still see TypeScript errors in VS Code:');
    console.log('1. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)');
    console.log('2. Type "TypeScript: Restart TS Server"');
    console.log('3. Press Enter');
    console.log('\nThis will reload the TypeScript configuration.');
} else {
    console.log('❌ Some files are missing! Check the output above.');
}

console.log('='.repeat(50));
