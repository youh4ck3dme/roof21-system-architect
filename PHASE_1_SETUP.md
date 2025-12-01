# Phase 1 Setup Complete — Next Steps

## What Was Completed ✅

### Infrastructure
- ✅ Folder structure created (`src/` with subfolders)
- ✅ ESLint + Prettier configured
- ✅ TypeScript strict mode enabled
- ✅ New npm scripts for lint/format/type-check
- ✅ EditorConfig for consistency
- ✅ VS Code settings for auto-formatting
- ✅ Dependencies installed (277 packages)

### Configuration Files Added
```
.eslintrc.json         → Strict ESLint rules
.prettierrc            → Code formatting
.prettierignore        → Prettier ignores
.editorconfig          → Editor consistency
.vscode/settings.json  → VS Code auto-formatting
tsconfig.json          → Strict TypeScript + path aliases
package.json           → New lint/format scripts
```

---

## Important: Complete the File Migration

**The app will NOT work until files are moved from root to `src/` folder.**

### Manual Migration (Option 1 — Recommended)

Run these commands from the project root:

```bash
# Move view components
mkdir -p src/views
mv components/ArchitectureView.tsx src/views/
mv components/CRMDataView.tsx src/views/
mv components/PipelineView.tsx src/views/
mv components/PluginSpecsView.tsx src/views/
mv components/ExportEngineView.tsx src/views/
mv components/CustomerJourneyView.tsx src/views/
mv components/InfoArchitectureView.tsx src/views/
mv components/DataProtectionView.tsx src/views/
mv components/DemoScriptView.tsx src/views/
mv components/ImplementationView.tsx src/views/

# Move main components
mv components/Sidebar.tsx src/components/
mv components/HeaderMockup.tsx src/components/

# Move other files
mv constants.ts src/constants/index.ts
mv translations.ts src/constants/translations.ts
mv index.css src/index.css
mv index.tsx src/main.tsx

# Move backup files if they exist
rm components/*.bak.*

# Clean up old components folder
rmdir components

# Update vite.config.ts to point to new entry
```

### Update `vite.config.ts` Entry Point

Change from:
```typescript
// entry point defaults to src/main.tsx if not specified
```

To explicitly define if needed. The default should work.

### Update `index.html` Script Tag

Change:
```html
<script type="module" src="/index.tsx"></script>
```

To:
```html
<script type="module" src="/src/main.tsx"></script>
```

---

## Verify Everything Works

After file migration, run:

```bash
npm run type-check    # Should have 0 errors
npm run lint          # Should check src/ successfully
npm run format:check  # Should pass
npm run build         # Should succeed
npm run dev           # Server should start
```

---

## Development Workflow

Now that tools are set up:

```bash
# Before committing
npm run lint:fix      # Auto-fix linting issues
npm run format        # Format all code
npm run type-check    # Verify types

# During development
npm run dev           # Start dev server (auto-reload)

# For production builds
npm run build         # Creates optimized bundle
npm run preview       # Preview production build
```

---

## What Gets Committed

Create a Git commit after completing this setup:

```bash
git add -A
git commit -m "Phase 1: Project structure refactor, ESLint, Prettier, strict TypeScript

- Created src/ folder structure (views/, components/, services/, etc.)
- Configured ESLint with strict rules and TypeScript support
- Added Prettier for consistent code formatting
- Enabled strict TypeScript mode (strict, noImplicitAny, etc.)
- Added npm scripts: lint, lint:fix, format, type-check
- Added EditorConfig and VS Code settings
- Installed dev dependencies (277 packages)

Next: Run file migration commands and verify with 'npm run type-check'"