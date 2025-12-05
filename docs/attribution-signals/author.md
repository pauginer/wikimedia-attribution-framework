# Author

Credit is one of the most important reasons for attribution. It is essential for end users to access the original version of the content being reused, and for them to have access to information about the volunteers who created it. In the context of Wikimedia, where most of resources are the product of collaboration among groups of contributors, individual credit becomes complicated and often takes the form of a generic statement (e.g., List of editors available at the source).

The exception in our crowdsourced knowledge ecosystem is Wikimedia Commons, a platform that hosts hundreds of thousands of images and other media files that are generally authored by a single or a smaller group of authors. Reusers embedding images and media files in their contexts must give credit to the individual creators of these materials if required by licensing.

<!-- TODO: Add mockups for Source examples-->


## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that reusers can rely on to implement the signal accurately and consistently.

### MediaWiki Action API

The Action API is the only option for getting the author (Artist) for media files. Although the example below is referencing Wikimedia Commons, this can also be used for files uploaded directly to other Wikimedia projects (for example, [a photo of Jane Goodall on English Wikipedia](https://en.wikipedia.org/w/api.php?action=query&titles=File%3AJane_Goodall_2010_%28cropped%29.jpg&prop=imageinfo&iiprop=user%7Cextmetadata&format=json)).

```
GET https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=user|extmetadata&format=json
```
The `extmetadata` field contains Artist information, which is the actual author or contributor attribution value for images and other forms of media.

[See documentation→](https://www.mediawiki.org/wiki/API:Action_API)


## Implementation guidance {#implementation}

### Minimum requirements

- To properly credit Wikimedia Commons media (images, audio, video), it’s recommended to visually display or audibly state the name of the author as listed on the original file page. This recommendation becomes a requirement if for some reason linking to the original file isn’t possible.

- If the file page specifies a preferred credit line, follow it when reasonable within your medium’s constraints.

### Best practices

- In small surfaces, it’s recommended to prioritize the name of the author (also the source and license) to the title of the file (e.g., Jane Doe, Wikimedia Commons (CC BY-SA 4.0))

- In-image or below-image credit is ideal, otherwise, ensure to link to the correct media file page showing full credit with the author name.

- If a file has multiple authors, list all primary creators if practical, else credit “Contributors (see file page)” and link to the original page.

- For projects other than Commons, you might signal that a list of authors is available at the source using a generic statement (e.g., List of editors available at the source).


## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search 

`Required` based on licensing

Mentioning the Wikimedia editor community as the author clarifies that knowledge is built collectively, not by a single institution.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required` based on licensing

Acknowledging volunteer authors adds human context, differentiating collaboratively written material from AI-generated text.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>


<!-- > **Note**  All the illustrations provided are only for orientation. You may adjust the appearance of the signals to follow your design guidelines and visual style in order to ensure consistency in your context.--!>