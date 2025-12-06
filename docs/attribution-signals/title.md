# Title

The Title signal indicates the name of the work being reused, such as a Wikipedia article or a Wikimedia Commons file. This information is key to enable the identification of relevant resources in informational contexts. 

It’s a commonly accepted, and practical, to use the source’s title as text for the link to the original page or media being shared. When used as link text, titles helps users recognize the work, distinguish between similarly named topics, and navigate directly to the source.

Titles are generally soft-required, and their omission is acceptable in favor of other core signals, such as [Source](source.md), in interfaces where space is constrained or information density is too high.

<FilterButtons />


## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### URL parsing

Available after normalization: URLs contain the title of the resource (articles, entity page, file, etc) being shared. Project URL roots  have to be parsed out and normalized (e.g. https://en.wikipedia.org/wiki/Josephine_Baker → Josephine_Baker → Josephine Baker).

### Wikimedia Enterprise API

Example: cURL On-Demand Article Lookup call requesting all articles named 'squirrel':

```
curl -L "https://api.enterprise.wikimedia.com/v2/articles/squirrel" -H "Authorization: Bearer ACCESS_TOKEN"
```
Title information is included in the `name` field. For example: 

```
"name": "Squirrel"
```

[See Wikimedia Enterprise API's documentation →](https://enterprise.wikimedia.com/docs/#getting-started)


## Implementation guidance {#implementation}

### Minimum requirements

- Show the original title of the work being reused next to the content. You might use the resource’s title to [link](link.md) it to the original page or media (i.e., an article page for Wikipedia, a file description page for Commons, an entity page for Wikidata). 


- When facing medium or spacing constraints (e.g., voice-only, very small UI), you may prioritize stating the source, author and license, and surfacing the title in a secondary location (e.g., a details view, tooltip, etc.).


- Use the title exactly as rendered on the source page and don’t paraphrase. When titles are very long or unwieldy, or space constraints apply, you may truncate them, as long as the full title remains accessible (e.g., via hover, expand, or in the destination page).


- Multiple titles: If your output blends content from several pages, list multiple titles (e.g., Sources: “X”, “Y”, “Z”) or reveal them via expandable details, keeping each title linked to its source.

### Best practices

- Keep title disambiguators (e.g., “Jaguar (animal)”) to support proper understanding and orient users.

- Conversational UIs / audio: Long titles can overwhelm speech or chat replies. Speak or render a concise topic label, and present the source chip or linked title as a tap target for users who want details.

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search 

`Required`

Displaying the article or file title helps users recognize the topic and distinguish between similar results.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Providing titles clarifies which topic an answer draws from, improving transparency in conversational outputs.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
