# Attribution count

The Attribution count signal reflects the popularity or relevance of a specific Wikimedia source (e.g., a Wikipedia article) in its context of reuse. For example, the attribute can be used to express how many times a given page has been cited or accessed by users on your system or, in its non-numerical form, to indicate the relevance of that source in your platform, based on user activity (e.g., “Top result” in a search engine scenario).

This attribute demonstrates a transparent partnership with Wikimedia as a relevant knowledge provider. Attribution counts can also spark user engagement, encouraging further exploration and helping drive traffic back to Wikimedia projects, where curiosity could turn into a meaningful contribution to the free knowledge ecosystem.

<!-- TODO: Mockups for Attribution count examples-->

<FilterButtons />

## Implementation guidance {#implementation}

### Minimum requirements

- Present the attribution count signal using a neutral, descriptive label (e.g., “123K views on {your platform}”) and avoid terms that could be misinterpreted as quality markers.

- Be explicit about whether the metric is based on impressions, citations, or displays of the given resource in your context.

- Define a relevant, recent time window for your measure (e.g., the last 30 days).

- To maintain relevance, always display the attribution count relevant to the specific source being displayed: avoid aggregating attribution across sources, or displaying values that correspond to entire Wikimedia projects. 

### Best practices

- Conditionally display this signal to make sure that it will have a positive impact on users’  perception of relevance. You might define a threshold to suppress lower attribution count values that could mislead users regarding the validity of certain sources.

## Reuse scenarios

The Attribution count signal can be applied across contexts to highlight how often a Wikimedia source is cited or displayed. We specially encourage the use of this signal in the following reuse scenarios: 

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Indicating how frequently a Wikimedia page is cited or displayed demonstrates its relevance within your search platform.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Recommended`

Showing attribution frequency highlights the ongoing value and reuse of Wikimedia knowledge across generated responses.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
