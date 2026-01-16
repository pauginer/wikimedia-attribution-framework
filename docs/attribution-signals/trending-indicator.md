# Trending indicator

Trending indicators flag Wikipedia articles that are experiencing an unusual volume of recent activity, such as sharp increases in page views, edits, or a combination of both. These activity spikes often correlate with unfolding events, which is why this signal is useful to indicate timely relevance and to highlight Wikipedia as the source of relevant and updated information.

<!-- TODO: Add mockups for Trending indicator examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### Wikimedia Enterprise API

`Coming soon`

## Implementation guidance {#implementation}

### Minimum requirements

- This attribute is intended to accompany content extracted from Wikipedia articles. It should reflect significant, recent spikes in page views and/or edits relative to typical activity, which are often influenced by live events.

- The trending indicator signal should be displayed adjacent to the title/summary of the reused article. It must not replace or obscure essential attribution signals.

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

Marking articles as trending signals that the information is being actively updated, or consulted due to its relevance in relation to current events.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
