# Page views

The page views signal indicates how often a Wikimedia project page (e.g., a Wikipedia article) has been visited over a defined period of time. Displaying page views can help reusers highlight the popularity and relevance of a source.

<!-- TODO: Mockups for Page views count examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### Wikimedia Analytics API

The Wikimedia Analytics API (powered by the Analytics Query Service, AQS) currently offers an endpoint for fetching the number of [views per page](https://doc.wikimedia.org/generated-data-platform/aqs/analytics-api/reference/page-views.html#get-number-of-page-views-for-a-page) of any Wikimedia project:

```plaintext
GET /pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end}
```

[See example](https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/test.wikipedia.org/all-access/user/Earth/daily/2025100100/20251029)

**Constraints**: The page view data is updated every 24 hours (for daily aggregates) to 30 days (for monthly granularity), meaning new and currently trending pages may not display the correct information. Additionally, there are some cases where view counts may be inaccurate, such as events related to merge, deletion/undeletion, and event stream outages.

[See Wikimedia Analytics API's documentation →](https://doc.wikimedia.org/generated-data-platform/aqs/analytics-api/)

### Wikimedia Enterprise API

`Coming soon`

## Implementation guidance {#implementation}

### Minimum requirements

- Always accompany pageview amounts with the time window during which they were measured (e.g., last 24 hours, last 30 days).

- Use neutral labeling (e.g., “10K views in 24h”) and avoid framing popularity as quality or correctness (e.g., “Highly accurate due to 1M views”).

- Keep page views signals secondary to core attribution (such as Source, Link/Access, Title) and avoid replacing or obscuring these.

### Best practices

- Conditionally display this signal to make sure that it will have a positive impact on users’  perception of relevance. Stable, emerging or niche topics might have lower pageview counts: you might define pageview amount thresholds to avoid displaying a lower value that could mislead users regarding the validity of certain sources.

## Reuse scenarios

The page views signal provides a simple, familiar cue of audience attention that can help end-users gauge relevance at a glance. This attribute can be specially useful to indicate relevance of resources in the following contexts:

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Displaying recent pageview numbers signals public interest and helps users gauge the relevance of a source.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Including page views as part of article context reassures users that the topic is widely consulted.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
