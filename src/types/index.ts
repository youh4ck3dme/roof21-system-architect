import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'sk';

export enum ViewState {
  ARCHITECTURE = 'ARCHITECTURE',
  CRM_MODEL = 'CRM_MODEL',
  PIPELINES = 'PIPELINES',
  UX_DESIGN = 'UX_DESIGN',
  PLUGIN_SPECS = 'PLUGIN_SPECS',
  EXPORT_ENGINE = 'EXPORT_ENGINE',
  CUSTOMER_JOURNEY = 'CUSTOMER_JOURNEY',
  INFO_ARCH = 'INFO_ARCH',
  DATA_PROTECTION = 'DATA_PROTECTION',
  DEMO_SCRIPT = 'DEMO_SCRIPT',
  IMPLEMENTATION_PLAN = 'IMPLEMENTATION_PLAN',
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface EntityField {
  name: string;
  type: string;
  example: string;
  flags: string[];
}

export interface CRMEntity {
  name: string;
  description: string;
  fields: EntityField[];
}

export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  duration: string;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
