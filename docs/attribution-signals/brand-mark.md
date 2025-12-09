# Brand mark

Brand marks are visual (or auditory) cues used to identify Wikimedia or any of its projects as the source of the knowledge being shared. This signal is devised to fully adapt to diverse contexts, mediums and constrains. For this reason, Brand marks can take a variety of shapes such as word marks or icons, and even be represented by audio (see [Wikimedia Sound Logo](https://meta.wikimedia.org/wiki/Brand/logo#Wikimedia_Sound_Logo)).

Brand marks are especially relevant in constrained environments, where they enable source recognition with minimal use of space. Displaying brand marks supports clarity and allows distinguishing Wikimedia sources in external branded contexts.

<!-- TODO: Mockups for Brand mark examples-->

<FilterButtons />

## Data sources {#data}

This section lists the diverse sources where users can find visual and audio assets that they can use to express Wikimedia and Wikimedia projects’ brand marks.

### Visual brand marks

Wikimedia Commons categorizes [Wikipedia and Wikimedia brand favicons](https://commons.wikimedia.org/wiki/Category:Wikimedia_Attribution_Guide_Favicons) that are aligned with Wikimedia identity guidelines.
Other projects’ brand marks (e.g., Wikifunctions, Wikidata, etc.) can also be found in Commons under the [SVG official Wikimedia logos category](https://commons.wikimedia.org/wiki/Category:High-resolution_or_SVG_official_Wikimedia_logos), together with their [localized](https://commons.wikimedia.org/wiki/Category:High-resolution_localized_Wikimedia_logos) versions.

> **Note**: The last two Commons categories mentioned are curated by the Wikimedia Foundation, but might contain incorrectly altered assets. Make sure to compare the logos with production to validate accuracy before use.

### Audio brand marks

The [Meta Wikimedia](https://meta.wikimedia.org/wiki/Brand/logo#Wikimedia_Sound_Logo) platform hosts all the necessary information and audio files to support the implementation of Wikimedia’s sound logo.

## Implementation guidance {#implementation}

### Minimum requirements

- Use brand marks to enable quick visual or auditory recognition of the Wikimedia project being used as a source, specially if the source is not mentioned or included in text form due to space constraints.

- Always assign `alt` text to brand marks when they are used to represent the source on their own (i.e., if the source isn’t included in text form due to constraints).

- For audio-only contexts, such as voice assistants or spoken-word media, you might use the [Wikimedia Sound Logo](https://meta.wikimedia.org/wiki/Brand/logo#Wikimedia_Sound_Logo) to signal that information originates from a Wikimedia project.

- Make sure that the brand mark you use is an official, unaltered version, and that it is in accordance with Wikimedia’s [Visual identity guidelines](https://foundation.wikimedia.org/wiki/Legal:Visual_identity_guidelines). Follow the guidelines to keep marks clear, at recommended sizes, and with sufficient contrast. Do not alter colors, proportions, or add effects to the brand marks.

### Best practices

- Where space allows, prioritize displaying the full wordmark of a project, instead of only their logo, to maximize recognition.

- Use compact logos (such as Wikipedia’s “W” icon) when space is constrained, in interfaces like cards, chips, or mobile layouts.

- When using the sound logo, apply the full 4-second version for long-form audio (e.g., like podcasts), or the short 1-second version in short-form audio (e.g., voice assistants). Avoid playing the logo over other audio: include short pauses before and after so the logo can stand out clearly.

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

Project brand marks help users immediately recognize Wikimedia sources within results

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Displaying a small brand mark near citations visually ties content to Wikimedia’s reliability.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
