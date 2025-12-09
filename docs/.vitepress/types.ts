export interface Scenario {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface AttributionSignal {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface AttributionLevel {
  id: string;
  name: string;
  description: string[];
}

export interface ContributionLevel {
  id: string;
  name: string;
  description: string[];
}