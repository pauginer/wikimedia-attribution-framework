import type { Scenario, AttributionSignal } from "./types";

export const scenarios: Scenario[] = [
  {
    id: "search",
    name: "Search",
    description:
      "Learn how to properly attribute Wikipedia content in search results",
    url: "/scenarios/search",
  },
  {
    id: "ai-assistants",
    name: "AI Assistants",
    description: "Guidelines for attribution in conversational interfaces",
    url: "/scenarios/ai-assistants",
  },
  {
    id: "audio",
    name: "Audio",
    description: "Description goes here",
    url: "/scenarios/audio",
  },
  {
    id: "games-rich-experiences",
    name: "Games & Rich Experiences",
    description: "Best practices for games and interactive applications",
    url: "/scenarios/games-rich-experiences",
  },
  {
    id: "media-outlets",
    name: "Media Outlets",
    description: "Description goes here",
    url: "/scenarios/media-outlets",
  },
];

export const attributionSignals: AttributionSignal[] = [
  {
    id: "source",
    name: "Source",
    description: "Description goes here",
    url: "/attribution-signals/source",
  },
  {
    id: "author",
    name: "Author",
    url: "/attribution-signals/author",
    description: "Description goes here",
  },
  {
    id: "link",
    name: "Link",
    url: "/attribution-signals/link",
    description: "Description goes here",
  },
  {
    id: "title",
    name: "Title",
    url: "/attribution-signals/title",
    description: "Description goes here",
  },
  {
    id: "license",
    name: "License",
    url: "/attribution-signals/license",
    description: "Description goes here",
  },
  {
    id: "brand-mark",
    name: "Brand mark",
    url: "/attribution-signals/brand-mark",
    description: "Description goes here",
  },
  {
    id: "modification-disclaimer",
    name: "Modification disclaimer",
    url: "/attribution-signals/modification-disclaimer",
    description: "Description goes here",
  },
  {
    id: "reference-count",
    name: "Reference count",
    url: "/attribution-signals/reference-count",
    description: "Description goes here",
  },
  {
    id: "contributor-count",
    name: "Contributor count",
    url: "/attribution-signals/contributor-count",
    description: "Description goes here",
  },
  {
    id: "page-views",
    name: "Page views",
    url: "/attribution-signals/page-views",
    description: "Description goes here",
  },
  {
    id: "attribution-count",
    name: "Attribution count",
    url: "/attribution-signals/attribution-count",
    description: "Description goes here",
  },
  {
    id: "trending-indicator",
    name: "Trending indicator",
    url: "/attribution-signals/trending-indicator",
    description: "Description goes here",
  },
  {
    id: "last-update",
    name: "Last update",
    url: "/attribution-signals/last-update",
    description: "Description goes here",
  },
  {
    id: "participation-cta",
    name: "Participation CTA",
    url: "/attribution-signals/participation-cta",
    description: "Description goes here",
  },
];

export const scenarioSignalsMap: Record<Scenario["id"], string[]> = {
  search: [
    "source",
    "title",
    "brand-mark",
    "modification-disclaimer",
    "reference-count",
    "contributor-count",
    "page-views",
    "attribution-count",
    "trending-indicator",
    "last-update",
    "participation-cta",
  ],
  "ai-assistants": ["source", "title", "brand-mark"],
  audio: [
    "attribution-count",
    "trending-indicator",
    "last-update",
    "participation-cta",
  ],
  "games-rich-experiences": [
    "title",
    "brand-mark",
    "modification-disclaimer",
    "reference-count",
  ],
  "media-outlets": [
    "source",
    "title",
    "brand-mark",
    "modification-disclaimer",
    "reference-count",
    "contributor-count",
  ],
};
