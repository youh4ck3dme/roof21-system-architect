import { ViewState } from '@/types';

export const TRANSLATIONS = {
  en: {
    sidebar: {
      title: "Roof21",
      subtitle: "System Architect",
      status_bitrix: "Bitrix24: Connected",
      status_sync: "Sync Engine: Idle",
      nav: {
        [ViewState.ARCHITECTURE]: { label: 'System Architecture', desc: 'High-level Masterplan' },
        [ViewState.CRM_MODEL]: { label: 'CRM Data Model', desc: 'Bitrix24 Entities & Fields' },
        [ViewState.PIPELINES]: { label: 'Sales Pipelines', desc: 'Workflows & Automation' },
        [ViewState.UX_DESIGN]: { label: 'UX & Navigation', desc: 'Header & Menu Specs' },
        [ViewState.PLUGIN_SPECS]: { label: 'WP Plugin Specs', desc: 'Roof21 Connector' },
        [ViewState.EXPORT_ENGINE]: { label: 'Export Engine', desc: 'Portal Syndication' },
        [ViewState.CUSTOMER_JOURNEY]: { label: 'Customer Journey', desc: 'CX Mapping' },
        [ViewState.INFO_ARCH]: { label: 'Info Architecture', desc: 'Content & Sitemaps' },
        [ViewState.DATA_PROTECTION]: { label: 'Data Protection', desc: 'GDPR & PDPA' },
        [ViewState.DEMO_SCRIPT]: { label: 'Demo Script', desc: 'Founder Presentation' },
        [ViewState.IMPLEMENTATION_PLAN]: { label: 'Implementation Roadmap', desc: 'Execution Timeline' },
      }
    },
    architecture: {
      title: "System Architecture Masterplan",
      subtitle: "High-level data flow between Bitrix24, WordPress Frontends, and External Portals.",
      nodes: {
        bitrix: { title: "Bitrix24 CRM", subtitle: "Single Source of Truth", desc: "Stores all Properties, Contacts, Companies, Deals, and Export Logs. Handles Automation & Business Logic." },
        sk_site: { badge: "SK Investor Focus", title: "thajsko-nehnutelnosti.sk", desc: "WordPress + Connector Plugin", sub: "REST API Sync (Read Only)" },
        intl_site: { badge: "Global Catalog", title: "roof21.co.th", desc: "WordPress + Connector Plugin", sub: "REST API Sync + Forms" },
        export: { title: "Export Engine", subtitle: "Syndication to Thai Portals" }
      },
      legend: {
        backend: { title: "Backend", items: ["Smart Processes for Properties", "Automation Rules for Pipelines", "Custom Webhooks for Sync"] },
        frontend: { title: "Frontend", items: ["WordPress 6.4+", "Custom 'roof21-connector' Plugin", "Tailwind CSS Theme"] },
        integration: { title: "Integration", items: ["REST API v2", "CRON Scheduling (Hourly)", "XML Feed Generation"] }
      }
    },
    crm: {
      title: "Bitrix24 Data Model",
      subtitle: "Definitions for Custom Items, Smart Processes, and Deal fields.",
      note_title: "Implementation Note",
      note_desc: "Use <strong>Smart Process Automation (SPA)</strong> for Properties to separate them from CRM Deals. This allows independent pipelines for listing acquisition vs. sales.",
      searchable: "Searchable in Filter Presets",
      fields_defined: "Fields Defined",
      table: { name: "Field Name", type: "Type", example: "Example", attrs: "Attributes" }
    },
    pipeline: {
      title: "Sales Pipelines & Automation",
      subtitle_prefix: "Visualizing the flow for",
      subtitle_intl: "International Buyers",
      subtitle_local: "Local Thai Market",
      btn_intl: "International",
      btn_local: "Local Thai",
      triggers: "Triggers",
      chart_title: "Pipeline Velocity",
      chart_badge: "Live Data Simulation",
      copilot_title: "AI Copilot Automation"
    },
    ux: {
      title: "Roof21 UX Specification",
      subtitle: "Responsive Header & Navigation Design",
      desktop: "Desktop",
      mobile: "Mobile",
      state: "State",
      view: "View",
      scrolled: "Scrolled (Sticky White)",
      top: "Top (Transparent)",
      mobile_dev: "Mobile (iPhone SE)",
      desktop_dev: "Desktop (1440p)",
      hero_title: "Find Your Dream Home \n in Thailand",
      hero_sub: "Luxury Condos, Villas, and Investments",
      behavior: {
        title: "Behavior Specs",
        items: [
            "<strong>Sticky Header:</strong> Transitions to solid white bg after 50px scroll.",
            "<strong>Mobile:</strong> Burger menu opens full-screen overlay with motion-staggered links.",
            "<strong>Hover:</strong> 'Properties' Mega-menu drops down with 3 columns (By Type, By Location, Featured).",
            "<strong>Breakpoints:</strong> Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)."
        ]
      },
      micro: {
        title: "Micro-Interactions",
        btn_effect: "Button Fill Effect",
        font: "Font: 'Inter' (UI) + 'Playfair Display' (Headings)."
      }
    },
    plugin: {
        title: "Plugin Specification: roof21-connector",
        subtitle: "Technical design for the bridge between Bitrix24 and WordPress.",
        sync_title: "Synchronization Logic",
        mapping_title: "Mapping Strategy",
        error_title: "Error Handling",
        code_title: "register_cpt.php",
        nodes: {
            api: "Bitrix24 API",
            core: "Plugin Core",
            db: "WP Database",
            cron: "CRON: Hourly"
        }
    },
    export: {
        title: "Export Engine & Syndication",
        subtitle: "Managing XML/JSON feeds for external Thai property portals.",
        listings: "listings",
        feed: "Feed",
        sync: "Sync",
        mapping_title: "Field Mapping: Bitrix24 → Portals",
        view_source: "View Feed Source",
        validation_title: "Pre-Export Validation Rules",
        table: { int: "Internal Field (Bitrix/WP)", dd: "DDProperty Tag", fw: "FazWaz Key", rule: "Transformation Rule" },
        status: { active: "Active", warning: "Warning", inactive: "Inactive" }
    },
    journey: {
        title: "Customer Journey Map",
        subtitle: "Dual persona mapping: Slovak Investor vs. International Lifestyle Buyer.",
        investor_title: "Slovak Investor",
        investor_goal: "Goal: High ROI, Safe Investment",
        buyer_title: "International Buyer",
        buyer_goal: "Goal: Holiday Home / Lifestyle",
        system: "System"
    },
    info_arch: {
        title: "Information Architecture & Content Plan",
        subtitle: "Sitemap structure and content strategy for both WordPress frontends.",
        sitemap: "Sitemap Structure",
        content_plan: "Content Plan (10 Articles)",
        dynamic: "Dynamic Content",
        lead_magnet: "Lead Magnets"
    },
    data_protection: {
        title: "Data Protection & Compliance",
        subtitle: "Strategy for GDPR (EU Users) and PDPA (Thai Users).",
        minimization_title: "Data Minimization",
        minimization_text: "WordPress acts as a 'dumb' frontend. No sensitive personal data (passport copies, contracts) is stored in the WP database.",
        minimization_rule: "Rule: Forms submit directly to Bitrix24 Webhooks or use iframe forms to bypass WP storage.",
        consent_title: "Consent Management",
        compliance_title: "Compliance Framework Comparison",
        security_title: "Security Implementation Checklist",
        table: { feature: "Feature", gdpr: "GDPR (EU/Slovak Site)", pdpa: "PDPA (Thai/Intl Site)" }
    },
    demo: {
        title: "Founder Presentation Demo",
        subtitle: "15-minute live demo script to showcase the ecosystem's value.",
        intro_title: "The 'Why' (Introduction)",
        intro_text: "\"Today we solve the chaos of spreadsheets and disconnected websites. We are building a machine that captures leads, processes them, and syncs our stock everywhere automatically.\"",
        customer_title: "The Customer Experience",
        control_title: "The Control Center (Bitrix24)",
        auto_title: "Automation & Scale",
        impact_title: "System Impact Summary",
        impact_1: { t: "Centralized", d: "Total control over agents and inventory from one dashboard." },
        impact_2: { t: "Automated", d: "Leads are nurtured instantly. Portals update automatically." },
        impact_3: { t: "Scalable", d: "Ready for 1000+ listings and international expansion." }
    },
    impl: {
        title: "Implementation Roadmap",
        subtitle: "Phased execution plan to build the Roof21 ecosystem.",
        ready_title: "Ready to Start?",
        ready_text: "The architectural plan is complete. Proceed to Phase 1 setup in Bitrix24 to begin the foundation work.",
        btn_init: "Initialize Project",
        status: { completed: "Completed", progress: "In Progress", pending: "Pending" },
        current: "Current Phase"
    }
  },
  sk: {
    sidebar: {
      title: "Roof21",
      subtitle: "Systémový Architekt",
      status_bitrix: "Bitrix24: Pripojené",
      status_sync: "Sync Engine: Neaktívny",
      nav: {
        [ViewState.ARCHITECTURE]: { label: 'Architektúra Systému', desc: 'Masterplan na vysokej úrovni' },
        [ViewState.CRM_MODEL]: { label: 'CRM Dátový Model', desc: 'Bitrix24 Entity a Polia' },
        [ViewState.PIPELINES]: { label: 'Obchodné Procesy', desc: 'Workflow a Automatizácia' },
        [ViewState.UX_DESIGN]: { label: 'UX a Navigácia', desc: 'Hlavička a Menu' },
        [ViewState.PLUGIN_SPECS]: { label: 'Špecifikácia WP Pluginu', desc: 'Roof21 Connector' },
        [ViewState.EXPORT_ENGINE]: { label: 'Exportný Engine', desc: 'Syndikácia na Portály' },
        [ViewState.CUSTOMER_JOURNEY]: { label: 'Cesta Zákazníka', desc: 'CX Mapovanie' },
        [ViewState.INFO_ARCH]: { label: 'Info Architektúra', desc: 'Obsah a Sitemap' },
        [ViewState.DATA_PROTECTION]: { label: 'Ochrana Údajov', desc: 'GDPR a PDPA' },
        [ViewState.DEMO_SCRIPT]: { label: 'Demo Scenár', desc: 'Prezentácia pre Majiteľa' },
        [ViewState.IMPLEMENTATION_PLAN]: { label: 'Implementačný Plán', desc: 'Časová os exekúcie' },
      }
    },
    architecture: {
      title: "Masterplan Architektúry Systému",
      subtitle: "Dátové toky medzi Bitrix24, WordPress frontendmi a externými portálmi.",
      nodes: {
        bitrix: { title: "Bitrix24 CRM", subtitle: "Jediný Zdroj Pravdy", desc: "Ukladá všetky Nehnuteľnosti, Kontakty, Spoločnosti, Obchody a Logy exportov. Riadi automatizáciu." },
        sk_site: { badge: "SK Investor Focus", title: "thajsko-nehnutelnosti.sk", desc: "WordPress + Connector Plugin", sub: "REST API Sync (Len na čítanie)" },
        intl_site: { badge: "Globálny Katalóg", title: "roof21.co.th", desc: "WordPress + Connector Plugin", sub: "REST API Sync + Formuláre" },
        export: { title: "Exportný Engine", subtitle: "Syndikácia na Thajské Portály" }
      },
      legend: {
        backend: { title: "Backend", items: ["Smart Procesy pre Nehnuteľnosti", "Automatizačné pravidlá pre Pipeline", "Vlastné Webhooky pre Sync"] },
        frontend: { title: "Frontend", items: ["WordPress 6.4+", "Vlastný plugin 'roof21-connector'", "Tailwind CSS Téma"] },
        integration: { title: "Integrácia", items: ["REST API v2", "CRON Plánovanie (Každú hodinu)", "Generovanie XML Feedov"] }
      }
    },
    crm: {
      title: "Bitrix24 Dátový Model",
      subtitle: "Definície pre Vlastné Položky, Smart Procesy a polia Obchodov.",
      note_title: "Implementačná Poznámka",
      note_desc: "Použite <strong>Smart Process Automation (SPA)</strong> pre Nehnuteľnosti na ich oddelenie od CRM Obchodov. To umožňuje nezávislé pipeline pre náber vs. predaj.",
      searchable: "Vyhľadateľné vo filtroch",
      fields_defined: "Definované polia",
      table: { name: "Názov Poľa", type: "Typ", example: "Príklad", attrs: "Atribúty" }
    },
    pipeline: {
      title: "Obchodné Procesy a Automatizácia",
      subtitle_prefix: "Vizualizácia toku pre",
      subtitle_intl: "Medzinárodných Kupujúcich",
      subtitle_local: "Lokálny Thajský Trh",
      btn_intl: "Medzinárodný",
      btn_local: "Lokálny (TH)",
      triggers: "Spúšťače",
      chart_title: "Rýchlosť Pipeline",
      chart_badge: "Simulácia Živých Dát",
      copilot_title: "AI Copilot Automatizácia"
    },
    ux: {
      title: "Roof21 UX Špecifikácia",
      subtitle: "Dizajn Responsívnej Hlavičky a Navigácie",
      desktop: "Desktop",
      mobile: "Mobil",
      state: "Stav",
      view: "Pohľad",
      scrolled: "Scrollované (Sticky Biela)",
      top: "Hore (Transparentná)",
      mobile_dev: "Mobil (iPhone SE)",
      desktop_dev: "Desktop (1440p)",
      hero_title: "Nájdite svoj vysnívaný domov \n v Thajsku",
      hero_sub: "Luxusné byty, vily a investície",
      behavior: {
        title: "Špecifikácia Správania",
        items: [
            "<strong>Sticky Hlavička:</strong> Zmení sa na bielu po 50px scrollovaní.",
            "<strong>Mobil:</strong> Burger menu otvorí celoobrazovkové menu s animovanými odkazmi.",
            "<strong>Hover:</strong> 'Properties' Mega-menu sa vysunie s 3 stĺpcami (Podľa typu, Podľa lokality, Odporúčané).",
            "<strong>Breakpoints:</strong> Mobil (<768px), Tablet (768px-1024px), Desktop (>1024px)."
        ]
      },
      micro: {
        title: "Mikro-interakcie",
        btn_effect: "Efekt výplne tlačidla",
        font: "Font: 'Inter' (UI) + 'Playfair Display' (Nadpisy)."
      }
    },
    plugin: {
        title: "Špecifikácia Pluginu: roof21-connector",
        subtitle: "Technický dizajn premostenia medzi Bitrix24 a WordPress.",
        sync_title: "Logika Synchronizácie",
        mapping_title: "Stratégia Mapovania",
        error_title: "Spracovanie Chýb",
        code_title: "register_cpt.php",
        nodes: {
            api: "Bitrix24 API",
            core: "Jadro Pluginu",
            db: "WP Databáza",
            cron: "CRON: Hodinovo"
        }
    },
    export: {
        title: "Exportný Engine a Syndikácia",
        subtitle: "Správa XML/JSON feedov pre externé thajské realitné portály.",
        listings: "ponúk",
        feed: "Feed",
        sync: "Sync",
        mapping_title: "Mapovanie Polí: Bitrix24 → Portály",
        view_source: "Zobraziť Zdroj Feedu",
        validation_title: "Pravidlá Validácie pred Exportom",
        table: { int: "Interné Pole (Bitrix/WP)", dd: "DDProperty Tag", fw: "FazWaz Kľúč", rule: "Pravidlo Transformácie" },
        status: { active: "Aktívne", warning: "Varovanie", inactive: "Neaktívne" }
    },
    journey: {
        title: "Mapa Cesty Zákazníka",
        subtitle: "Duálne mapovanie: Slovenský Investor vs. Medzinárodný Lifestyle Kupujúci.",
        investor_title: "Slovenský Investor",
        investor_goal: "Cieľ: Vysoké ROI, Bezpečná investícia",
        buyer_title: "Medzinárodný Kupujúci",
        buyer_goal: "Cieľ: Prázdninový dom / Lifestyle",
        system: "Systém"
    },
    info_arch: {
        title: "Informačná Architektúra a Obsahový Plán",
        subtitle: "Štruktúra sitemap a obsahová stratégia pre oba WordPress frontendy.",
        sitemap: "Štruktúra Sitemap",
        content_plan: "Obsahový Plán (10 Článkov)",
        dynamic: "Dynamický Obsah",
        lead_magnet: "Lead Magnety"
    },
    data_protection: {
        title: "Ochrana Údajov a Compliance",
        subtitle: "Stratégia pre GDPR (EU užívatelia) a PDPA (Thajskí užívatelia).",
        minimization_title: "Minimalizácia Údajov",
        minimization_text: "WordPress funguje ako 'hlúpy' frontend. Žiadne citlivé osobné údaje (kópie pasov, zmluvy) sa neukladajú vo WP databáze.",
        minimization_rule: "Pravidlo: Formuláre odosielajú dáta priamo na Bitrix24 Webhooky alebo používajú iframe.",
        consent_title: "Správa Súhlasov",
        compliance_title: "Porovnanie Rámcov Compliance",
        security_title: "Checklist Implementácie Bezpečnosti",
        table: { feature: "Funkcia", gdpr: "GDPR (EU/SK Stránka)", pdpa: "PDPA (TH/Intl Stránka)" }
    },
    demo: {
        title: "Demo Prezentácia pre Majiteľa",
        subtitle: "15-minútový scenár na ukážku hodnoty ekosystému.",
        intro_title: "Prečo? (Úvod)",
        intro_text: "\"Dnes vyriešime chaos tabuliek a neprepojených webov. Budujeme stroj, ktorý zachytáva leady, spracováva ich a synchronizuje našu ponuku všade automaticky.\"",
        customer_title: "Zákaznícka Skúsenosť",
        control_title: "Riadiace Centrum (Bitrix24)",
        auto_title: "Automatizácia a Škálovanie",
        impact_title: "Zhrnutie Dopadu Systému",
        impact_1: { t: "Centralizované", d: "Plná kontrola nad maklérmi a inventárom z jedného dashboardu." },
        impact_2: { t: "Automatizované", d: "Leady sú okamžite spracované. Portály sa aktualizujú samé." },
        impact_3: { t: "Škálovateľné", d: "Pripravené pre 1000+ ponúk a medzinárodnú expanziu." }
    },
    impl: {
        title: "Implementačná Roadmapa",
        subtitle: "Fázový plán exekúcie na vybudovanie ekosystému Roof21.",
        ready_title: "Pripravený začať?",
        ready_text: "Architektonický plán je hotový. Prejdite na Fázu 1 nastavenia v Bitrix24 a začnite s budovaním základov.",
        btn_init: "Inicializovať Projekt",
        status: { completed: "Dokončené", progress: "Prebieha", pending: "Čaká" },
        current: "Aktuálna Fáza"
    }
  }
};