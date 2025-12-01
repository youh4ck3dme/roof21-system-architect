import { 
  LayoutDashboard, 
  Database, 
  GitMerge, 
  LayoutTemplate, 
  Plug, 
  Globe, 
  Users,
  FolderTree,
  ShieldCheck,
  Presentation,
  Map
} from 'lucide-react';
import { NavItem, ViewState, CRMEntity, PipelineStage, Language } from '@/types';
import { TRANSLATIONS } from './translations';

export const getNavItems = (lang: Language): NavItem[] => [
  { id: ViewState.ARCHITECTURE, label: TRANSLATIONS[lang].sidebar.nav[ViewState.ARCHITECTURE].label, icon: LayoutDashboard, description: TRANSLATIONS[lang].sidebar.nav[ViewState.ARCHITECTURE].desc },
  { id: ViewState.CRM_MODEL, label: TRANSLATIONS[lang].sidebar.nav[ViewState.CRM_MODEL].label, icon: Database, description: TRANSLATIONS[lang].sidebar.nav[ViewState.CRM_MODEL].desc },
  { id: ViewState.PIPELINES, label: TRANSLATIONS[lang].sidebar.nav[ViewState.PIPELINES].label, icon: GitMerge, description: TRANSLATIONS[lang].sidebar.nav[ViewState.PIPELINES].desc },
  { id: ViewState.UX_DESIGN, label: TRANSLATIONS[lang].sidebar.nav[ViewState.UX_DESIGN].label, icon: LayoutTemplate, description: TRANSLATIONS[lang].sidebar.nav[ViewState.UX_DESIGN].desc },
  { id: ViewState.PLUGIN_SPECS, label: TRANSLATIONS[lang].sidebar.nav[ViewState.PLUGIN_SPECS].label, icon: Plug, description: TRANSLATIONS[lang].sidebar.nav[ViewState.PLUGIN_SPECS].desc },
  { id: ViewState.EXPORT_ENGINE, label: TRANSLATIONS[lang].sidebar.nav[ViewState.EXPORT_ENGINE].label, icon: Globe, description: TRANSLATIONS[lang].sidebar.nav[ViewState.EXPORT_ENGINE].desc },
  { id: ViewState.CUSTOMER_JOURNEY, label: TRANSLATIONS[lang].sidebar.nav[ViewState.CUSTOMER_JOURNEY].label, icon: Users, description: TRANSLATIONS[lang].sidebar.nav[ViewState.CUSTOMER_JOURNEY].desc },
  { id: ViewState.INFO_ARCH, label: TRANSLATIONS[lang].sidebar.nav[ViewState.INFO_ARCH].label, icon: FolderTree, description: TRANSLATIONS[lang].sidebar.nav[ViewState.INFO_ARCH].desc },
  { id: ViewState.DATA_PROTECTION, label: TRANSLATIONS[lang].sidebar.nav[ViewState.DATA_PROTECTION].label, icon: ShieldCheck, description: TRANSLATIONS[lang].sidebar.nav[ViewState.DATA_PROTECTION].desc },
  { id: ViewState.DEMO_SCRIPT, label: TRANSLATIONS[lang].sidebar.nav[ViewState.DEMO_SCRIPT].label, icon: Presentation, description: TRANSLATIONS[lang].sidebar.nav[ViewState.DEMO_SCRIPT].desc },
  { id: ViewState.IMPLEMENTATION_PLAN, label: TRANSLATIONS[lang].sidebar.nav[ViewState.IMPLEMENTATION_PLAN].label, icon: Map, description: TRANSLATIONS[lang].sidebar.nav[ViewState.IMPLEMENTATION_PLAN].desc },
];

export const getCRMEntities = (lang: Language): CRMEntity[] => [
  {
    name: lang === 'en' ? 'Properties (Smart Process)' : 'Nehnuteľnosti (Smart Process)',
    description: lang === 'en' ? 'Central inventory for all real estate units.' : 'Centrálny inventár pre všetky realitné jednotky.',
    fields: [
      { name: 'property_type', type: 'List', example: 'Condo, Villa, Land', flags: ['filterable'] },
      { name: 'price_thb', type: 'Money', example: '5,000,000', flags: ['range_filter', 'export_ddproperty'] },
      { name: 'roi_yield', type: 'Number', example: '6.5', flags: ['investment_metric'] },
      { name: 'export_ddproperty', type: 'Boolean', example: 'Yes', flags: ['control_flag'] },
      { name: 'roof21_visible', type: 'Boolean', example: 'Yes', flags: ['control_flag'] },
      { name: 'seo_title', type: 'String', example: lang === 'en' ? 'Luxury Villa in Phuket' : 'Luxusná vila na Phukete', flags: ['seo_optimization'] },
      { name: 'meta_desc', type: 'Text', example: lang === 'en' ? '3BR Pool Villa near beach...' : '3-izbová vila s bazénom pri pláži...', flags: ['seo_optimization'] },
      { name: 'investment_potential', type: 'HTML', example: lang === 'en' ? 'High demand area...' : 'Lokalita s vysokým dopytom...', flags: ['investment_metric'] },
    ]
  },
  {
    name: lang === 'en' ? 'Deals' : 'Obchody',
    description: lang === 'en' ? 'Transaction tracking connected to Contacts and Properties.' : 'Sledovanie transakcií prepojené na Kontakty a Nehnuteľnosti.',
    fields: [
      { name: 'stage_id', type: 'Stage', example: lang === 'en' ? 'Negotiation' : 'Vyjednávanie', flags: ['system'] },
      { name: 'probability', type: 'Number', example: '70%', flags: ['analytics'] },
      { name: 'closing_date', type: 'Date', example: '2023-12-31', flags: ['required'] },
    ]
  },
  {
    name: lang === 'en' ? 'Contacts' : 'Kontakty',
    description: lang === 'en' ? 'Buyers, Sellers, and Investors.' : 'Kupujúci, Predávajúci a Investori.',
    fields: [
      { name: 'client_type', type: 'List', example: lang === 'en' ? 'Investor (Foreign)' : 'Investor (Zahraničný)', flags: ['segmentation'] },
      { name: 'preferred_language', type: 'List', example: 'English', flags: ['communication'] },
    ]
  }
];

export const getPipelineStagesIntl = (lang: Language): PipelineStage[] => [
  { id: 'new', name: lang === 'en' ? 'New Lead' : 'Nový Lead', description: lang === 'en' ? 'Incoming form/chat' : 'Prichádzajúci formulár/chat', duration: '24h', color: '#3b82f6' },
  { id: 'qualify', name: lang === 'en' ? 'Qualification' : 'Kvalifikácia', description: lang === 'en' ? 'Needs analysis call' : 'Hovor o potrebách', duration: lang === 'en' ? '2 days' : '2 dni', color: '#6366f1' },
  { id: 'viewing', name: lang === 'en' ? 'Viewing' : 'Obhliadka', description: lang === 'en' ? 'Property tour (Physical/Virtual)' : 'Obhliadka nehnuteľnosti', duration: lang === 'en' ? '1 week' : '1 týždeň', color: '#8b5cf6' },
  { id: 'offer', name: lang === 'en' ? 'Offer / Negotiation' : 'Ponuka / Vyjednávanie', description: lang === 'en' ? 'Price and terms' : 'Cena a podmienky', duration: lang === 'en' ? '3 days' : '3 dni', color: '#ec4899' },
  { id: 'contract', name: lang === 'en' ? 'Contract & Deposit' : 'Zmluva a Depozit', description: lang === 'en' ? 'Legal work' : 'Právne úkony', duration: lang === 'en' ? '2 weeks' : '2 týždne', color: '#10b981' },
];

export const getPipelineStagesLocal = (lang: Language): PipelineStage[] => [
  { id: 'inbound', name: lang === 'en' ? 'Inbound Call' : 'Prichádzajúci hovor', description: lang === 'en' ? 'Phone inquiry' : 'Telefonický dopyt', duration: '2h', color: '#f59e0b' },
  { id: 'screening', name: lang === 'en' ? 'Screening' : 'Skríning', description: lang === 'en' ? 'Budget & Motivation' : 'Rozpočet a Motivácia', duration: '24h', color: '#d97706' },
  { id: 'site_visit', name: lang === 'en' ? 'Site Visit' : 'Návšteva', description: lang === 'en' ? 'On-site showing' : 'Obhliadka na mieste', duration: lang === 'en' ? '3 days' : '3 dni', color: '#b45309' },
  { id: 'loan', name: lang === 'en' ? 'Bank Loan' : 'Úver', description: lang === 'en' ? 'Document collection' : 'Zber dokumentov', duration: lang === 'en' ? '2 weeks' : '2 týždne', color: '#78350f' },
  { id: 'transfer', name: lang === 'en' ? 'Transfer' : 'Prevod', description: lang === 'en' ? 'Land Office' : 'Kataster', duration: lang === 'en' ? '1 day' : '1 deň', color: '#10b981' },
];

export const getImplementationPhases = (lang: Language) => [
  {
    id: 1,
    title: lang === 'en' ? "Foundation & CRM Setup" : "Základy & Nastavenie CRM",
    duration: lang === 'en' ? "Week 1-2" : "Týždeň 1-2",
    status: "completed",
    items: lang === 'en' ? [
      "Configure Bitrix24 Smart Processes (Properties)",
      "Define Custom Fields (Price, Location, Features)",
      "Set up Sales Pipelines (Local vs. International)",
      "Configure Basic Automation (Auto-replies)",
      "Setup Bitrix24 Sites/Forms for landing pages"
    ] : [
      "Konfigurácia Smart Procesov v Bitrix24 (Nehnuteľnosti)",
      "Definícia vlastných polí (Cena, Lokalita, Vlastnosti)",
      "Nastavenie obchodných pipeline (Lokálne vs. Medzinárodné)",
      "Konfigurácia základnej automatizácie (Auto-odpovede)",
      "Nastavenie Bitrix24 Stránok/Formulárov pre landing pages"
    ]
  },
  {
    id: 2,
    title: lang === 'en' ? "Frontend & Integration" : "Frontend & Integrácia",
    duration: lang === 'en' ? "Week 3-5" : "Týždeň 3-5",
    status: "in-progress",
    items: lang === 'en' ? [
      "Develop 'roof21-connector' WP Plugin",
      "Implement CPT 'Property' in WordPress",
      "Set up CRON jobs for hourly sync",
      "Map Bitrix24 fields to WP Meta fields",
      "Frontend Theme Development (Tailwind)"
    ] : [
      "Vývoj WP pluginu 'roof21-connector'",
      "Implementácia CPT 'Property' vo WordPress",
      "Nastavenie CRON jobov pre hodinovú synchronizáciu",
      "Mapovanie polí Bitrix24 na WP Meta polia",
      "Vývoj témy frontendu (Tailwind)"
    ]
  },
  {
    id: 3,
    title: lang === 'en' ? "Content & Export Engine" : "Obsah & Exportný Engine",
    duration: lang === 'en' ? "Week 6-8" : "Týždeň 6-8",
    status: "pending",
    items: lang === 'en' ? [
      "Import Initial Property Inventory (CSV/Manual)",
      "Write Core Guides (Investment, Legal, Area)",
      "Develop XML Feed Generators for Portals",
      "Test Lead Forms (WP -> Bitrix Webhooks)",
      "Set up Google Analytics & Pixel Tracking"
    ] : [
      "Import počiatočného inventára nehnuteľností (CSV/Manuálne)",
      "Napísanie kľúčových príručiek (Investície, Právo, Lokality)",
      "Vývoj generátorov XML feedov pre portály",
      "Testovanie formulárov (WP -> Bitrix Webhooky)",
      "Nastavenie Google Analytics & Pixel sledovania"
    ]
  },
  {
    id: 4,
    title: lang === 'en' ? "Launch & Expansion" : "Spustenie & Expanzia",
    duration: lang === 'en' ? "Week 9+" : "Týždeň 9+",
    status: "pending",
    items: lang === 'en' ? [
      "Full End-to-End Testing (Lead -> Deal)",
      "Staff Training (CRM usage)",
      "Go Live: roof21.co.th & thajsko-nehnutelnosti.sk",
      "Activate AI Copilot features",
      "Start Paid Ad Campaigns"
    ] : [
      "Kompletné End-to-End testovanie (Lead -> Obchod)",
      "Školenie personálu (používanie CRM)",
      "Go Live: roof21.co.th & thajsko-nehnutelnosti.sk",
      "Aktivácia funkcií AI Copilot",
      "Spustenie platených reklamných kampaní"
    ]
  }
];

export const getCustomerJourneySteps = (lang: Language) => {
  const investor = lang === 'en' ? [
    { stage: 'Awareness', action: 'Googles "investicie thajsko"', touch: 'SEO Article: "Investičný sprievodca 2024"', sys: 'WordPress Blog' },
    { stage: 'Consideration', action: 'Downloads ROI Calculator PDF', touch: 'Lead Magnet Form', sys: 'Bitrix24 CRM Form' },
    { stage: 'Engagement', action: 'Receives Email Sequence', touch: 'Auto-Email: "Top 3 Projects for Yield"', sys: 'Bitrix24 Automation' },
    { stage: 'Conversion', action: 'Books Consultation Call', touch: 'Zoom Meeting', sys: 'Bitrix24 Calendar' },
    { stage: 'Loyalty', action: 'Receives Quarterly Reports', touch: 'Investor Newsletter', sys: 'Campaigns' },
  ] : [
    { stage: 'Povedomie', action: 'Googli "investície thajsko"', touch: 'SEO Článok: "Investičný sprievodca 2024"', sys: 'WordPress Blog' },
    { stage: 'Zvažovanie', action: 'Sťahuje PDF Kalkulačku ROI', touch: 'Lead Magnet Formulár', sys: 'Bitrix24 CRM Formulár' },
    { stage: 'Angažovanosť', action: 'Dostáva emailovú sekvenciu', touch: 'Auto-Email: "Top 3 Projekty pre Výnos"', sys: 'Bitrix24 Automatizácia' },
    { stage: 'Konverzia', action: 'Rezervuje konzultačný hovor', touch: 'Zoom Meeting', sys: 'Bitrix24 Kalendár' },
    { stage: 'Lojalita', action: 'Dostáva štvrťročné reporty', touch: 'Investorský Newsletter', sys: 'Kampane' },
  ];

  const buyer = lang === 'en' ? [
    { stage: 'Discovery', action: 'Portal Search / Social Ads', touch: 'Listing on DDProperty', sys: 'Export Engine' },
    { stage: 'Search', action: 'Browses roof21.co.th', touch: 'Property Filter & Search', sys: 'WordPress Search' },
    { stage: 'Inquiry', action: 'Clicks WhatsApp Button', touch: 'WhatsApp Chat', sys: 'Bitrix24 Open Channel' },
    { stage: 'Viewing', action: 'Physical Viewing in Phuket', touch: 'Agent Appt', sys: 'Mobile App' },
    { stage: 'Purchase', action: 'Signs Reservation', touch: 'Digital Contract', sys: 'Bitrix24 Deal' },
  ] : [
    { stage: 'Objavovanie', action: 'Hľadanie na portáloch / Reklamy', touch: 'Inzerát na DDProperty', sys: 'Exportný Engine' },
    { stage: 'Hľadanie', action: 'Prezerá roof21.co.th', touch: 'Filter & Hľadanie', sys: 'WordPress Vyhľadávanie' },
    { stage: 'Dopyt', action: 'Kliká na WhatsApp tlačidlo', touch: 'WhatsApp Chat', sys: 'Bitrix24 Open Channel' },
    { stage: 'Obhliadka', action: 'Fyzická obhliadka na Phukete', touch: 'Stretnutie s maklérom', sys: 'Mobilná Appka' },
    { stage: 'Nákup', action: 'Podpisuje rezerváciu', touch: 'Digitálna Zmluva', sys: 'Bitrix24 Obchod' },
  ];

  return { investor, buyer };
};

export const getExportData = (lang: Language) => {
  const mapping = lang === 'en' ? [
    { int: 'Property Title', dd: '<name>', fw: 'title', rule: 'Trim to 100 chars' },
    { int: 'Price (THB)', dd: '<price>', fw: 'price_sale', rule: 'Remove decimals' },
    { int: 'Description', dd: '<description>', fw: 'description', rule: 'Strip HTML tags' },
    { int: 'Bedroom Count', dd: '<bedrooms>', fw: 'bedroom', rule: 'Map "Studio" to 0' },
    { int: 'Area (sqm)', dd: '<floor_area>', fw: 'size', rule: 'Integer only' },
    { int: 'Property Type', dd: '<property_type>', fw: 'unit_type', rule: 'Map ID: 45 -> "Condo"' },
    { int: 'Images', dd: '<photo>', fw: 'images[]', rule: 'Limit to first 10' },
  ] : [
    { int: 'Názov Nehnuteľnosti', dd: '<name>', fw: 'title', rule: 'Skrátiť na 100 znakov' },
    { int: 'Cena (THB)', dd: '<price>', fw: 'price_sale', rule: 'Odstrániť desatinné miesta' },
    { int: 'Popis', dd: '<description>', fw: 'description', rule: 'Odstrániť HTML tagy' },
    { int: 'Počet Spální', dd: '<bedrooms>', fw: 'bedroom', rule: 'Mapovať "Studio" na 0' },
    { int: 'Plocha (m²)', dd: '<floor_area>', fw: 'size', rule: 'Len celé čísla' },
    { int: 'Typ Nehnuteľnosti', dd: '<property_type>', fw: 'unit_type', rule: 'Mapovať ID: 45 -> "Condo"' },
    { int: 'Obrázky', dd: '<photo>', fw: 'images[]', rule: 'Limit na prvých 10' },
  ];

  const validation = lang === 'en' ? [
    "Price must be greater than 0",
    "Must have at least 3 high-res images",
    "Description length > 200 characters",
    "Map coordinates (Lat/Long) are present"
  ] : [
    "Cena musí byť väčšia ako 0",
    "Musí mať aspoň 3 obrázky vo vysokom rozlíšení",
    "Dĺžka popisu > 200 znakov",
    "Súradnice mapy (Lat/Long) sú prítomné"
  ];

  return { mapping, validation };
};

export const getInfoArchData = (lang: Language) => {
  const slovakArticles = [
    { title: "Prečo investovať v Thajsku v roku 2024?", type: "Guide" },
    { title: "Kúpa nehnuteľnosti na firmu vs. na meno", type: "Legal" },
    { title: "Phuket vs. Koh Samui: Kde je vyšší výnos?", type: "Comparison" },
    { title: "Ako bezpečne poslať peniaze do Thajska", type: "Finance" },
    { title: "Daňová rezidencia a nehnuteľnosti v Ázii", type: "Legal" },
    { title: "Top 5 lokalít pre digitálnych nomádov", type: "Lifestyle" },
    { title: "Garantovaný výnos z prenájmu: Ako to funguje?", type: "Guide" },
    { title: "Víza a povolenia na pobyt pre majiteľov", type: "Legal" },
    { title: "Freehold vs. Leasehold: Kompletný sprievodca", type: "Guide" },
    { title: "Náklady na správu nehnuteľnosti v Thajsku", type: "Finance" },
  ];

  const contentPlanLabel = lang === 'en' ? "Content Plan (10 Articles)" : "Obsahový Plán (10 Článkov)";
  
  return { slovakArticles, contentPlanLabel };
};

export const getDataProtectionList = (lang: Language) => [
  lang === 'en' ? "Bitrix24: Enable 2FA for all Agents" : "Bitrix24: Zapnúť 2FA pre všetkých maklérov",
  lang === 'en' ? "WordPress: Disable XML-RPC" : "WordPress: Vypnúť XML-RPC",
  lang === 'en' ? "WordPress: Install Wordfence/Security Plugin" : "WordPress: Inštalovať Wordfence/Security Plugin",
  lang === 'en' ? "Hosting: SSL Certificates (Let's Encrypt)" : "Hosting: SSL Certifikáty (Let's Encrypt)",
  lang === 'en' ? "Legal: Privacy Policy Page (EN & SK)" : "Legal: Stránka Ochrany Osobných Údajov (EN & SK)",
  lang === 'en' ? "Forms: Add 'I agree to Privacy Policy' checkbox" : "Formuláre: Pridať checkbox 'Súhlasím so spracovaním OÚ'"
];

export const getPluginSpecsData = (lang: Language) => {
    const syncSteps = lang === 'en' ? {
        api: "crm.item.list",
        core: "Mapper & Sanitizer",
        db: "wp_posts (CPT)",
        cron: "CRON: Hourly"
    } : {
        api: "crm.item.list",
        core: "Mapovanie & Sanitizácia",
        db: "wp_posts (CPT)",
        cron: "CRON: Hodinovo"
    };

    const mappingList = lang === 'en' ? [
        "<strong>Title:</strong> Bitrix 'TITLE' → WP Post Title",
        "<strong>Images:</strong> Bitrix URL → Sideload to Media Lib",
        "<strong>Price:</strong> custom_uf_price → Meta key `_price`",
        "<strong>Location:</strong> custom_uf_location → Taxonomy `location`"
    ] : [
        "<strong>Názov:</strong> Bitrix 'TITLE' → WP Názov Príspevku",
        "<strong>Obrázky:</strong> Bitrix URL → Nahrať do Knižnice médií",
        "<strong>Cena:</strong> custom_uf_price → Meta kľúč `_price`",
        "<strong>Lokalita:</strong> custom_uf_location → Taxonómia `location`"
    ];

    const errorList = lang === 'en' ? [
        "Retry failed images 3x",
        "Log errors to `wp_roof21_logs` table",
        "Email admin on >50% sync failure",
        "Don't delete posts missing in feed (Soft Delete)"
    ] : [
        "Opakovať zlyhané obrázky 3x",
        "Logovať chyby do tabuľky `wp_roof21_logs`",
        "Email adminovi pri >50% zlyhaní syncu",
        "Nemazať príspevky chýbajúce vo feede (Soft Delete)"
    ];

    return { syncSteps, mappingList, errorList };
};