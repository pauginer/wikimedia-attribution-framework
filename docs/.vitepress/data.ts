import type { Scenario, AttributionSignal, AttributionLevel, ContributionLevel } from "./types";

export const scenarios: Scenario[] = [
  {
    id: "search",
    name: "Search",
    description:
      "Search results displaying encyclopedic content, images, or structured data.",
    url: "/scenarios/search",
  },
  {
    id: "ai-assistants",
    name: "AI Assistants",
    description: "Integrating text, media, or data from Wikimedia projects into AI-driven responses.",
    url: "/scenarios/ai-assistants",
  },
  {
    id: "social",
    name: "Social media [coming soon]",
    description: "Sharing content from Wikimedia projects in online social contexts, such as online forums, chat and messaging services, social networking platforms.",
    url: "/scenarios/social",
  },
  {
    id: "games-rich-experiences",
    name: "Games and Rich media [coming soon]",
    description: "Incorporating text, images, or data from Wikimedia platforms in educational and interactive environments.",
    url: "/scenarios/games-rich-experiences",
  },
  {
    id: "media-outlets",
    name: "Media and publications [coming soon]",
    description: "Using text, images, or data from Wikimedia projects in articles, journals, blogs, etc.",
    url: "/scenarios/media-outlets",
  },
  {
    id: "audio",
    name: "Audio [coming soon]",
    description: "Audio media or voice assistants using content where source citation must remain transparent.",
    url: "/scenarios/audio",
  },
];

export const attributionSignals: AttributionSignal[] = [
  {
    id: "source",
    name: "Source",
    description: "Identifies the Wikimedia project from which the content originates.",
    url: "/attribution-signals/source",
  },
  {
    id: "author",
    name: "Author",
    url: "/attribution-signals/author",
    description: "Information about the volunteers who created the content.",
  },
  {
    id: "link",
    name: "Link",
    url: "/attribution-signals/link",
    description: "Direct access to the original Wikimedia page(s) from where the reused content was drawn.",
  },
  {
    id: "title",
    name: "Title",
    url: "/attribution-signals/title",
    description: "Name of the work being reused, such as a Wikipedia article or a Wikimedia Commons file.",
  },
  {
    id: "license",
    name: "License",
    url: "/attribution-signals/license",
    description: "License under which the Wikimedia content is available",
  },
  {
    id: "brand-mark",
    name: "Brand mark",
    url: "/attribution-signals/brand-mark",
    description: "Visual (or auditory) cues used to identify Wikimedia or any of its projects as the source of the knowledge being shared.",
  },
  {
    id: "modification-disclaimer",
    name: "Modification disclaimer",
    url: "/attribution-signals/modification-disclaimer",
    description: "Indication that the content has been modified, adapted, or built upon after its extraction from the original source.",
  },
  {
    id: "reference-count",
    name: "Reference count",
    url: "/attribution-signals/reference-count",
    description: "Number of references supporting a Wikipedia article at the time of citation or reuse.",
  },
  {
    id: "contributor-count",
    name: "Contributor count",
    url: "/attribution-signals/contributor-count",
    description: "Total number of unique human editors who have helped create and maintain the content.",
  },
  {
    id: "page-views",
    name: "Page views",
    url: "/attribution-signals/page-views",
    description: "How often a Wikimedia project page has been visited over a defined period of time",
  },
  {
    id: "attribution-count",
    name: "Attribution count",
    url: "/attribution-signals/attribution-count",
    description: "Popularity or relevance of a specific Wikimedia source (e.g., a Wikipedia article) in its context of reuse.",
  },
  {
    id: "trending-indicator",
    name: "Trending indicator",
    url: "/attribution-signals/trending-indicator",
    description: "Indication of contents experiencing an unusual volume of recent activity.",
  },
  {
    id: "last-update",
    name: "Last update",
    url: "/attribution-signals/last-update",
    description: "Timestamp of the most recent edit done to the contents.",
  },
  {
    id: "participation-cta",
    name: "Participation CTA",
    url: "/attribution-signals/participation-cta",
    description: "Context-appropriate prompts that invite end users to contribute to Wikimedia projects",
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

export const attributionLevels: AttributionLevel[] = [
  {
    id: "basic",
    name: "Basic",
    description: [
      "Explicit mention of source",
      "Path to source (as appropriate to the medium).",
      "Content has been reused without modification, or modifications have been disclosed.",
      "All “essential” attribution signals for the use case and format are provided.",
    ],
  },
  {
    id: "approaching",
    name: "Approaching",
    description: [
      "All “Basic” items; and",
      "All “essential” attribution signals for the use case and format are provided in context and visible with reused content.",
    ],
  },
  {
    id: "ideal",
    name: "Ideal",
    description: [
      "All “Approaching” items; and",
      "One or more additional signals beyond the essential for the reuse scenario has been used.",
      "One more active CTAs to engage with Wikimedia is included in the reuse scenario.",
    ],
  },
];

export const contributionLevels: ContributionLevel[] = [
  {
    id: "minimum",
    name: "Minimum",
    description: [
      "Generating more than 0 monthly visitors or equivalent engagement conversions to Wikimedia projects (contributions, donations, participation).",
    ],
  },
  {
    id: "approaching",
    name: "Approaching",
    description: [
      "Generating more than X% of the reuser traffic, or equivalent engagement conversions to Wikimedia projects (contributions, donations, participation).",
    ],
  },
  {
    id: "elevated",
    name: "Elevated",
    description: [
      "Generating more than X+Y% of the reuser traffic, or equivalent engagement conversions to Wikimedia projects (contributions, donations, participation).",
    ],
  },
];
