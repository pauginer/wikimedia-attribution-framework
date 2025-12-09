# Reference count

Reference count is a Wikipedia-specific signal. It indicates the number of references supporting a Wikipedia article (e.g., “23 references”) at the time of citation or reuse. This is a trust attribute that underscores Wikipedia’s reliability and verifiability by giving readers a quick sense of the multiplicity of resources that are used to back the information they are provided.

<!-- TODO: Mockups for Reference count examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### Crawling and self-parsing

Crawlers can self-parse the number of references included in Wikipedia articles.

### MediaWiki REST API

MediaWiki REST API can return the HTML of a page. Users would then have to parse the number of references within the references list. This can be accomplished by targeting the following HTML and counting the list items (`<li>`) as individual references:

```html
<div class="reflist">
<div class="mw-references-wrap mw-references-columns">
<ol class="references">
  <li id=”{referenceID}”>
```

>**Note**: This example was simplified, and is probably not a failsafe method, as some projects may be using different templates or gadgets that affect how references are rendered.

[See MediaWiki REST API's documentation →](https://www.mediawiki.org/wiki/API:REST_API)

### Action API

`Coming soon`

### Wikimedia Enterprise API

`Coming soon`

## Implementation guidance {#implementation}

### Minimum requirements

- Present article references as a single count (e.g., “XX references”).

- Always display the number of references contained by the article being reused: avoid aggregating references across language versions of an article, or using the reference value corresponding to a different language variant of the source.

- Keep it neutral: Use a stable label (“References”) and a simple integer. Avoid phrasings or visual representations that assign quality ratings to this attribute. The very presence of references is enough to allow readers to infer credibility.

- Keep page views signals secondary to core attribution (such as Source, Link/Access, Title) and avoid replacing or obscuring these.

### Best practices

- Pair with complementary attributes to increase impact. When combined with [Last update](last-update.md) or [Contributor count](contributor-count.md), this signal can help highlight the scale and the recency of collaboration.

- Conditionally display this signal to make sure that it will have a positive impact on users’  perception: Consider showing the references count only when above a threshold, or fall back to a non-numeric label (e.g., “Supported by references”) when the count is low.

- Consider expanding on the meaning of this signal using complementary information (e.g., displaying a tooltip that clarifies that this is the “Number of sources cited in a Wikipedia article”).

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Showing how many references support an article reinforces Wikipedia’s verifiability and reliability.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Recommended`

Exposing reference counts builds confidence that the underlying information is evidence-based.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
