# Search Engine Results Page

Search engines are one of the most visible and common ways people encounter Wikimedia content. Whether on classic result pages or AI-generated overviews, Wikipedia and its sister projects commonly stand as a fundamental source of the information provided to search engine users.

Search platforms amplify Wikimedia’s reach, and are a primary gateway to free knowledge for billions of people worldwide. Consistent attribution in this scenario is necessary not only to safeguard the visibility of our projects as a source of high-quality content, but also to ensure reciprocity.

<WikipediaAttributionDemo />


<!-- TODO: Mockups and note for search exmaples-->

## Essential attribution

At the most basic level, when Wikimedia content appears in search results (whether as classic snippets or AI-generated summaries) it should always be clearly attributed. This means identifying Wikimedia as the source, linking back to the original page, and displaying the title and other elements as required by the content’s license and any modifications applied to it. 

Essential signals safeguard visibility for the volunteer-created projects that power the information delivered by search engines. They provide users with a transparent path to verify, explore, and potentially engage with the ecosystem where the knowledge originated.


## 1. [Source](../attribution-signals/source.html) 

*Required*

Identify the Wikimedia project from which the information originates. Use text or, exceptionally, the project’s brand mark (see 6) if space is limited.

[See implementation guidance](../attribution-signals/source.html#implementation)

**Data sources**
- Available for crawlers: Must be parsed or inferred directly from the URL (needs normalization)
- Static sitematrix endpoint in Meta Wikimedia
- Wikimedia Enterprise API

More details

**Visibility on wiki**

- High: Immediately visible at the source

## 2. [Author](../attribution-signals/author.html) 

*Required based on license*

When displaying media files (e.g., from Wikimedia Commons) in result pages, it’s important to state or provide direct access to information about the author.

See implementation guidance

**Data sources**
- Available for crawlers
- MediaWiki Action API

More details

**Visibility on wiki**

- Varies per project: e.g., Immediately visible in file pages for Commons, requires reviewing the article history on Wikipedia.

