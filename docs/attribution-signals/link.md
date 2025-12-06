# Link

Reusers must provide direct access to the original Wikimedia page(s) from where the reused content was drawn (e.g., the specific Wikipedia article, the Commons file page, or the Wikidata entity). 

This is an essential attribution element that preserves verifiability by letting end-users access information at the source with a single click. Links can also contribute to sustain the open-knowledge ecosystem by returning traffic to Wikimedia, where readers can explore context, see authorship, donate, or even contribute edits.

Links can take the form of text (e.g., the title of the article or image being shared, or a complete URL) or be represented by direct affordances (e.g., “Read full article” link or interactive cards).


<!-- TODO: Add mockups for Source examples-->


## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### MediaWiki Action API

If a page title is available, the query endpoint can be used. The example below links to a functional query on English Wikipedia, but the route can be updated for any project, language, and URL percent encoded page title (e.g.,: `C++` becomes `C%2B%2B`) by changing the values wrapped in curly braces:

```plaintext
GET https://{language}.{project}.org/w/api.php?action=query&titles={title}&prop=info&inprop=url&format=json
```

This returns basic metadata about the page, including the last touch date, links for the page itself.

Additionally, this request can return information about multiple pages endpoint using this format: `titles=Title1|Title2|Title3`, for example: `titles=Earth|Main_Page|​​C%2B%2B`.

[See MediaWiki Action API's documentation→](https://www.mediawiki.org/wiki/API:Action_API)

### MediaWiki REST API

The best option for retrieving this information through REST is to use the page/summary endpoint within the Wikimedia RESTbase API. The example below links to a functional query on English Wikipedia, but the route can be updated for any project, language, and URL percent encoded page title (e.g.,: `C++` becomes `C%2B%2B`) by changing the values wrapped in curly braces:

```plaintext
GET https://{language}.{project}.org/api/rest_v1/page/summary/{title}
```

This includes the `content_urls` object, which has links for various page views, including links for the main page, talk page, edit, and list of revisions.

[See MediaWiki REST API's documentation→](https://www.mediawiki.org/wiki/API:REST_API)

### Wikimedia Enterprise API

Example: cURL On-Demand Article Lookup call requesting all articles named 'squirrel':

```shell
curl -L "https://api.enterprise.wikimedia.com/v2/articles/squirrel" -H "Authorization: Bearer ACCESS_TOKEN"
```

The URL of the article is stored in the [`url`](https://enterprise.wikimedia.com/docs/data-dictionary/#url) field. For example:

```json
"url": "https://en.wikipedia.org/wiki/Squirrel",
```

A link to the main Wikidata entity ID and URL is found in the [`main_entity`](https://enterprise.wikimedia.com/docs/data-dictionary/#main_entity) field. For example: 

```json
"main_entity": {
            "identifier": "Q9482",
            "url": "https://www.wikidata.org/entity/Q9482",
}
```

[See Wikimedia Enterprise API's documentation→](https://enterprise.wikimedia.com/docs/#getting-started)

### URL manipulation

A last available option to obtain links would be to simply construct the URL based on the known language, project, and title. In general, Wikimedia projects’ URLs follow the pattern of: `https://{language}.{project}.org/wiki/{title}`.

This structure includes Commons, when referencing the file by title. For example: `https://commons.wikimedia.org/wiki/File:Grasshoppper_(27703165173).jpg`

## Implementation guidance {#implementation}

### Minimum requirements

- Provide a hyperlink to the exact Wikimedia page being reused, never to the homepage (e.g., wikipedia.org). For example, link to article pages on Wikipedia, to the file description pages in Wikimedia Commons, or the entity pages in Wikidata.

- Every source requires a link: when content is drawn from multiple Wikimedia pages, allow users to access back to each individual source of information.

- Avoid exposing raw URLs and opt for concise, descriptive labels instead. You may use the [Source](source.md) or [Title](title.md) attributes as text for your link, or provide a clear navigation affordance that fits your context and is clearly associated with the reused content.

### Best practices

- In visual interfaces, make sure that the link is part of or visible next to the reused content, guaranteeing that it is not hidden in secondary pages, or collapsible areas such as menus or accordions.

- In constrained environments such as small-screens or compact UIs, you may use icons, shortlinks, or other affordances to ensure one-tap access back to the source.


## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

A direct link enables users to verify results and continue exploring the original source to further satisfy their information need.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Linking back to the specific article offers transparency and supports explainability in AI-generated responses

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>


<!-- > **Note**  All the illustrations provided are only for orientation. You may adjust the appearance of the signals to follow your design guidelines and visual style in order to ensure consistency in your context.--!>

