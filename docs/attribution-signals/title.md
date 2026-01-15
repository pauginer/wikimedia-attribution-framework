# Title

The Title signal indicates the name of the work being reused, such as a Wikipedia article or a Wikimedia Commons file. This information is key to enabling the identification of original resources in external contexts.

It’s commonly accepted, and practical, to use the source’s title as text for the link to the original page or media being shared. When used as link text, titles help users both recognize the work and navigate directly to the source.

Titles are generally soft-required. Their truncation or omission is acceptable in favor of other core attributes, such as [Source](source.md), when space is constrained or information density is too high.

<!-- TODO: Add mockups for Title examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### URL parsing

Available after normalization: URLs contain the title of the resource (articles, entity page, file, etc) being shared. Project URL roots  have to be parsed out and normalized (e.g. https://en.wikipedia.org/wiki/Josephine_Baker → Josephine_Baker → Josephine Baker).

### Wikimedia Enterprise API

Example: cURL On-Demand Article Lookup call requesting all articles named 'squirrel':

```curl
curl -L "https://api.enterprise.wikimedia.com/v2/articles/squirrel" -H "Authorization: Bearer ACCESS_TOKEN"
```

Title information is included in the `name` field. For example:

```json
"name": "Squirrel"
```

[See Wikimedia Enterprise API's documentation →](https://enterprise.wikimedia.com/docs/#getting-started)

## Implementation guidance {#implementation}

### Minimum requirements

- Show the original title of the work being reused next to the content. You might use the title to [link](link.md) to the source (i.e., an article page on Wikipedia, a file description page on Wikimedia Commons, an entity page on Wikidata).

- When facing medium or spacing constraints (e.g., voice-only, limited real state on a user interface), you may prioritize stating the source, author and license, and surface the title in a secondary location (e.g., a details view, tooltip, etc.).

- Don't paraphrase. Always use the title exactly as rendered on the source page. If space constraints apply, you may truncate titles, as long as the full text remains accessible (e.g., via hover, expand, or in the linked source or destination page).

- If your output blends content from several pages, list alltheir titles (e.g., Sources: “X”, “Y”, “Z”) and keep each title linked to its source.

### Best practices

- Keep title disambiguators (e.g., “Jaguar (animal)”) to support proper understanding and orient users.

- In conversational UIs, long titles can overwhelm speech or chat replies. Audibly express or render a concise topic label, and present the source chip or linked title as a tap target for users who want details.

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
