# Source

Reusers of Wikimedia content must explicitly identify the project they are extracting information from as their Source. Clear sourcing is fundamental for attribution in an information ecosystem where third-party platforms mix and recontextualize Wikimedia content. This recognition supports trust, transparency, and compliance with open licenses.
Identifying sources ensures that the contributions of Wikimedia volunteers remain visible and that end-users can recognize the origin of the knowledge they are consuming.

We recommend representing the Source attribute in text or verbalizing it in audio format in a way that fits the medium (e.g., (from) Wikidata, (according to) Wikipedia...). When facing space constraints or in interfaces with high  information density, it’s acceptable to use the project’s [Brand mark](brand-mark.html) to represent the source.

<!-- TODO: Mockups for Source examples-->

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### URL parsing

This information must be parsed or inferred directly from the URL. In nearly all cases, the URI follows this structure: ```[language_code].[project_name].org```. Project URL roots  have to be parsed out and normalized (e.g. ```https://en.wikipedia.org/wiki/Josephine_Baker``` → en.wikipedia → English Wikipedia).

### Static sitematrix on Meta Wikimedia

Wikimedia doesn’t provide a dedicated endpoint that supports fetching a human friendly “display name” based on the URL on demand. There is, however, a [static sitematrix endpoint available on Meta](https://meta.wikimedia.org/w/api.php?action=sitematrix&format=json) that returns a list of all projects hosted by Wikimedia, grouped by language. Using this endpoint, a user could look up localized “Name” and “Sitename” values to use for display purposes.

### Wikimedia enterprise APIs

This data point is available through the Wikimedia Enterprise APIs: Source information is included in the is_part_of field without parsing needed, and in main_entity and additional_entities under “URL/identifiers” with parsing ([See example](https://enterprise.wikimedia.com/docs/on-demand/)).

[See documentation →](https://enterprise.wikimedia.com/docs/#getting-started)

## Implementation guidance {#implementation}

### Minimum requirements

- State the name of the Wikimedia project from which the content was retrieved in a way that fits the medium (e.g., “Source: Wikidata”, “From Wikimedia Commons”, or “According to Wikipedia…”).

- The source signal must remain accessible to all users in the context of data reuse, either in visual or auditory form. In visual interfaces, place the source label consistently near the reused content. Flexible placement of this signal is permitted only if strictly necessary (e.g., in a sources’ panel), as long as it is easily findable, identifiable and easy to associate with the content presented to end-users.

- Refrain from attributing aggregated content to a single Wikimedia project. Instead, clearly list all the sources being used and, if necessary, include a [Modification disclaimer](../attribution-signals/modification-disclaimer.md).

### Best practices

- Pair the source label with a [Brand mark](../attribution-signals/brand-mark.md) to support the quick identification of Wikimedia projects.

- Source might be represented using a project's [Brand mark](../attribution-signals/brand-mark.md) only when space is limited, or in interfaces with a high information density.

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

Clearly indicating the Wikimedia project on search results pages helps users understand where the information originates and reinforces Wikimedia’s role as a trusted knowledge source.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

In conversational interfaces, explicitly crediting Wikimedia clarifies that responses draw on a collaborative, human-curated source rather than on proprietary or opaque data.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>

<!-- > **Note**  All the illustrations provided are only for orientation. You may adjust the appearance of the signals to follow your design guidelines and visual style in order to ensure consistency in your context.--!>

<!-- 
<FilterButtons />

## Content by Scenario

<FilteredContent scenario="all">

### All Scenarios

This content, along with all other blocks, is visible when "All" is selected.

</FilteredContent>

<FilteredContent scenario="search">

### Search Scenario

This content is specific to the **Search** scenario.

In search results, the source should be prominently displayed. This helps users understand where the information comes from.

</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants Scenario

This content is specific to the **AI Assistants** scenario.

For AI assistants, source attribution should be provided in the response. This ensures transparency and helps users verify information.

</FilteredContent>

<FilteredContent scenario="audio">

### Audio Scenario

This content is specific to the **Audio** scenario.

For audio content, source should be mentioned verbally or in metadata. This is important for accessibility and transparency.

</FilteredContent>

<FilteredContent scenario="media-outlets">

### Media Outlets Scenario

This content is specific to the **Media Outlets** scenario.

Media outlets should attribute sources in their articles. This maintains journalistic integrity and gives credit to Wikipedia contributors.

</FilteredContent>

-->
