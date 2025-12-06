# Trending indicator

Trending indicators flag Wikipedia articles that are experiencing an unusual volume of recent activity, such as sharp increases in reads and/or edits that often correlate with unfolding events.

This signal provides a timely indicator that can enhance discovery and user engagement. Moreover, the attribute makes Wikipedia’s role in documenting current events more explicit.

<!-- TODO: Add mockups for Trending indicator examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### Wikimedia Enterprise API

`Coming soon`

## Implementation guidance {#implementation}

### Minimum requirements

- This attribute is intended for Wikipedia articles, and it should be based on significant, recent spikes in page views and/or edits relative to typical activity, often reflecting live events.

- The trending indicator signal should be displayed adjacent to the title/summary of the reused article. The indicator must not replace or obscure essential attribution signals.

### Best practices

- Apply a decay, so sources fall out of “trend” rapidly when activity on an article normalizes. Prevent stale badges to reduce trust risks.

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Trending tags help readers spot results experiencing spikes in attention and being actively updated in accordance to current events.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Recommended`

Marking articles as trending adds contextual freshness, signaling that the information is actively updated or discussed.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
