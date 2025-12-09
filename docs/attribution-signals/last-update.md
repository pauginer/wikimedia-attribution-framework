# Last update

The Last update signal displays the timestamp of the most recent edit done to the Wikimedia page being cited or reused (e.g., “Last update 22 September 2025”). 

This attribute highlights recency and makes editorial activity transparent, reinforcing the perception of Wikimedia projects as a living resources. Showing when a Wikimedia page was last updated gives readers a quick way to see that the information they are being provided is actively maintained, which positively impacts trust on its relevance and accuracy.

<!-- TODO: Mockups for Last update examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### MediaWiki REST API

The bare page endpoint is the most performant way to retrieve basic metadata about a page, including the ID and timestamp for the latest revision.

```plaintext
GET /v1/page/{title}/bare
```

[See example](https://test.wikipedia.org/w/rest.php/v1/page/Earth/bare)

[See MediaWiki REST API's documentation →](https://www.mediawiki.org/wiki/API:REST_API)

### MediaWiki Action API

The `Query` action in the Action API can be used to pull revision information, including the timestamp for the latest revision.

```plaintext
GET https://{lang}.{project}.org/w/api.php?action=query&titles={Titile}&prop=revisions&rvprop=timestamp&rvlimit=1&format=json
```

[See example](https://test.wikipedia.org/w/api.php?action=query&titles=Earth&prop=revisions&rvprop=timestamp&rvlimit=1&format=json)

On the other hand, the Action API also offers a “touched” attribute which reflects non-revision based changes like template updates:

```plaintext
https://{lang}.{project}.org/w/api.php?action=query&titles={title}&prop=info&format=json
```

[See example](https://test.wikipedia.org/w/api.php?action=query&titles=Earth&prop=info&format=json)

[See MediaWiki Action API's documentation →](https://www.mediawiki.org/wiki/API:Action_API)

### Wikimedia Enterprise API

The date of the last revision is stored in [`date_modified`](https://enterprise.wikimedia.com/docs/data-dictionary/#date_modified), a string with the timestamp of the last revision of the article in RFC3339 format.

```plaintext
Example: "2021-08-31T04:51:39Z"
```

The date of the second-to-last revision is stored in [`date_previously_modified`](https://enterprise.wikimedia.com/docs/data-dictionary/#date_previously_modified), also a string in RFC3339 format. Use this field in conjunction with `date_previously_modified` to compute the time between the two latest revisions.

The [Snapshot](https://enterprise.wikimedia.com/docs/snapshot/), [On-Demand](https://enterprise.wikimedia.com/docs/on-demand/), and [Realtime](https://enterprise.wikimedia.com/docs/realtime/) APIs all return articles in the same schema. Find all fields described in this schema in the [Enterprise Data Dictionary](https://enterprise.wikimedia.com/docs/data-dictionary/).

The [Snapshot](https://enterprise.wikimedia.com/docs/snapshot/) endpoints and the [Realtime Hourly Batch](https://enterprise.wikimedia.com/docs/realtime/#project-updates-batch) endpoint provide JSON articles downloaded in a compressed ([tar.gz](http://tar.gz)) format. The [Realtime streaming](https://enterprise.wikimedia.com/docs/snapshot/) endpoint provides a continuous stream of JSON data. The [On-Demand Article Lookup](https://enterprise.wikimedia.com/docs/on-demand/#article-lookup) endpoint will return a JSON response containing all articles for a given article name from any supported Wikimedia project in any language.

Example: cURL On-Demand Article Lookup call requesting all articles named 'squirrel':

```curl
curl -L "https://api.enterprise.wikimedia.com/v2/articles/squirrel" -H "Authorization: Bearer ACCESS_TOKEN"
```

[See Wikimedia Enterprise API's documentation →](https://enterprise.wikimedia.com/docs/#getting-started)

## Implementation guidance {#implementation}

### Minimum requirements

- Surface the last edit timestamp of the specific article version you reused. Display either as a relative indicator (“Last updated 2 days ago”) or  an absolute date in the user’s locale. When using absolute dates, you may specify longer (“Last updated 22 September, 2025”) or shorter formats (“Last update 09/2025”).

- Make the attribute visible near the reused summary/title, or alongside other attribution elements.

### Best practices

- Topic-conditional display: Recency isn’t always meaningful (e.g., stable math topics). Consider conditional display for established subjects, and stronger prominence for time-sensitive topics (e.g., live events).

## Reuse scenarios

The Last update signal makes Wikimedia’s constant editorial activity visible at a glance, and provides reusers with a simple, consistent way to convey recency. This signal is particularly valuable in the following scenarios:

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Recommended`

Displaying last edit dates reassures users that the responses offered are current and actively maintained.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Recommended`

Including edit timestamps supports transparency and helps users judge information freshness in generated text.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
