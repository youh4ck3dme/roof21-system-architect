import React, { useState } from 'react';
import Sidebar from './src/components/Sidebar';
import HeaderMockup from './src/components/HeaderMockup';
import {
  ArchitectureView,
  CRMDataView,
  PipelineView,
  PluginSpecsView,
  ExportEngineView,
  CustomerJourneyView,
  InfoArchitectureView,
  DataProtectionView,
  DemoScriptView,
  ImplementationView,
} from './src/views';
import { ViewState, Language } from './src/types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.ARCHITECTURE);
  const [language, setLanguage] = useState<Language>('en');

  const renderContent = () => {
    switch (currentView) {
      case ViewState.ARCHITECTURE:
        return <ArchitectureView language={language} />;
      case ViewState.CRM_MODEL:
        return <CRMDataView language={language} />;
      case ViewState.PIPELINES:
        return <PipelineView language={language} />;
      case ViewState.UX_DESIGN:
        return <HeaderMockup language={language} />;
      case ViewState.PLUGIN_SPECS:
        return <PluginSpecsView language={language} />;
      case ViewState.EXPORT_ENGINE:
        return <ExportEngineView language={language} />;
      case ViewState.CUSTOMER_JOURNEY:
        return <CustomerJourneyView language={language} />;
      case ViewState.INFO_ARCH:
        return <InfoArchitectureView language={language} />;
      case ViewState.DATA_PROTECTION:
        return <DataProtectionView language={language} />;
      case ViewState.DEMO_SCRIPT:
        return <DemoScriptView language={language} />;
      case ViewState.IMPLEMENTATION_PLAN:
        return <ImplementationView language={language} />;
      default:
        return <ArchitectureView language={language} />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1 h-full relative overflow-hidden bg-slate-50/50">
        {/* The key ensures the animation triggers every time the view changes */}
        <div key={currentView} className="h-full w-full animate-enter-view origin-top">
          {renderContent()}
        </div>
  {/* AI chat removed — feature deleted per request */}
      </main>
    </div>
  );
}

export default App;