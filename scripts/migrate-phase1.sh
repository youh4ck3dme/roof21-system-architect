#!/bin/bash
set -e

echo "🚀 Starting Roof21 Phase 1 File Migration..."

# Create necessary directories if they don't exist
mkdir -p src/views
mkdir -p src/components
mkdir -p src/constants

echo "📦 Moving view components to src/views/"
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

echo "🎯 Moving main components to src/components/"
mv components/Sidebar.tsx src/components/
mv components/HeaderMockup.tsx src/components/

echo "⚙️  Moving constants and utilities to src/"
mv constants.ts src/constants/index.ts
mv translations.ts src/constants/translations.ts
mv types.ts src/types/index.ts
mv index.css src/index.css
mv index.tsx src/main.tsx

echo "🗑️  Cleaning up old directories"
rm -rf components

echo "✅ File migration complete!"
echo ""
echo "📝 Files moved:"
echo "   - 10 view components → src/views/"
echo "   - 2 main components → src/components/"
echo "   - constants.ts → src/constants/index.ts"
echo "   - translations.ts → src/constants/translations.ts"
echo "   - types.ts → src/types/index.ts"
echo "   - index.css → src/index.css"
echo "   - index.tsx → src/main.tsx"
