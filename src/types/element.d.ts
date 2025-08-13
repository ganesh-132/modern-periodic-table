export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  density?: number;
  phase: 'Gas' | 'Liquid' | 'Solid' | 'Synthetic';
  meltingPoint?: number;
  boilingPoint?: number;
  discoveryYear?: number | string;
  discoverer?: string;
  summary: string;
  externalLink: string;
  category: string;
  electronConfiguration: number[];
  xpos: number;
  ypos: number;
}
