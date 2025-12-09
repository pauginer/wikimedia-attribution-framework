# Contributor count

Contributor count is a Wikipedia-specific signal. It indicates the total number of unique human editors who have helped create and maintain a Wikipedia article (e.g., “117 contributors”).

This attribute makes the presence of the community that creates and curates Wikipedia’s content transparent to external audiences. It highlights the scale of the collaborative editorial process behind open knowledge projects, making explicit the human effort that keeps Wikipedia one of the most trusted sources of free knowledge.

<!-- TODO: Mockups for Contributor count examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### Wikimedia dumps

Public datasets include full revision histories that can be used to calculate editor counts programmatically.

### MediaWiki REST API

The MediaWiki REST API currently offers a [`/page/{title}/history/counts/{type}` endpoint](https://www.mediawiki.org/wiki/API:REST_API/Reference#Get_page_history_counts) that allows requestors to get the total number of editors of an article.

```plaintext
GET https://{lang}.{project}.org/w/rest.php/v1/page/{title}/history/counts/editors
```

[See example](https://test.wikipedia.org/w/rest.php/v1/page/Earth/history/counts/editors)

**Constraints**:

- Editor counts are limited. If there are more than 10,000 editors for a given page, the limit may be hit.

- If only human contributors are desired, then bot and anonymous edit counts will need to be subtracted from the total. There is no direct query parameter for ‘human’ only editors.

- Bots and anonymous edits can be captured using additional path parameters.

[See MediaWiki REST API's documentation →](https://www.mediawiki.org/wiki/API:REST_API)

### Action API

The action API can be used to retrieve contributor information.

```plaintext
GET https://{lang}.{project}.org/w/api.php?action=query&titles={title}&prop=contributors&pclimit=max&format=json
```

[See example](https://test.wikipedia.org/w/api.php?action=query&titles=Earth&prop=contributors&format=json)

Using this request will require counting the number of entries included in the returned `contributors` array to get a complete list of editors. Additionally, anonymous editors are counted separately; to get the complete count, contributors will have to be added from the `anoncontributors` property.

**Constraints**: Only the first 500 contributors are returned by default; pagination is required if there are more than 500 contributors.

[See MediaWiki Action API's documentation →](https://www.mediawiki.org/wiki/API:Action_API)

### Wikimedia Enterprise API

`Coming soon`

## Implementation guidance {#implementation}

### Minimum requirements

- Display, in plain text, the number of unique contributors who have edited the Wikipedia page being shared: e.g., “128 contributors”.

- Keep it neutral: avoid expressing, textually nor visually, that a higher contributor count equals to higher quality. This signal conveys collaboration, and it shouldn’t be treated as a correctness rating.

- Keep contributor count signals secondary to core attribution (such as Source, Link/Access, Title) and avoid replacing or obscuring these.

### Best practices

- Pair with complementary attributes to increase impact. When combined with [Last update](last-update.md) or [Reference count](reference-count.md), this signal can contribute to effectively communicate the scale and the recency of collaboration.

- Consider expanding on the meaning of this signal using complementary information (e.g., displaying a tooltip that clarifies that this is the “Number of volunteers who edited this article on Wikipedia”).

- Conditional display: Suppress or simplify the signal (e.g., “Community-edited”) when contributor counts are low or when it might be misread as a negative indicator.

## Reuse scenarios

The Contributor count signal can strengthen understanding and trust across contexts where audiences may not realize that Wikimedia content is human-made and community-curated. It is particularly relevant for high-visibility integrations that reuse Wikipedia content without a clear connection to its volunteer origins.

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Display the Contributor count as part of the source snippet to highlight human authorship. This builds trust and emphasizes the scale of collaboration behind the source.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Recommended`

Show contributor count in expandable or source-detail views. This signal can add a nice contrast in a machine-generated information environment.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
