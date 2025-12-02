# Search

Search engines are one of the most visible and common ways people encounter Wikimedia content. Whether on classic result pages or AI-generated overviews, Wikipedia and its sister projects commonly stand as a fundamental source of the information provided to search engine users.

Search platforms amplify Wikimedia’s reach, and are a primary gateway to free knowledge for billions of people worldwide. Consistent attribution in this scenario is necessary not only to safeguard the visibility of our projects as a source of high-quality content, but also to ensure reciprocity.

<WikipediaAttributionDemo />


![Search attribution overview](../public/media/search-overview.png)
*Mockup of a Search engine results page displaying minimal (left) and a combination of essential and recommended attribution signals (right)*

> **Note** All the illustrations provided are only for orientation. Reusers may adjust the appearance of the signals to follow their design guidelines and their context’s visual style in order to ensure consistency.

## Essential attribution

At the most basic level, when Wikimedia content appears in search results (whether as classic snippets or AI-generated summaries) it should always be clearly attributed. This means identifying Wikimedia as the source, linking back to the original page, and displaying the title and other elements as required by the content’s license and any modifications applied to it. 

Essential signals safeguard visibility for the volunteer-created projects that power the information delivered by search engines. They provide users with a transparent path to verify, explore, and potentially engage with the ecosystem where the knowledge originated.

![Search signal example](../public/media/search-signals-essential.png)


### 1. [Source](../attribution-signals/source.html) 

*Required* • [Implementation guidance](../attribution-signals/source.html#implementation)

Identify the Wikimedia project from which the information originates. Use text or, exceptionally, the project’s brand mark (see 6) if space is limited.

**Data sources** ([more details](../attribution-signals/source.html#data)):
- Available for crawlers: Must be parsed or inferred directly from the URL (needs normalization)
- Static sitematrix endpoint in Meta Wikimedia
- Wikimedia Enterprise API

**Visibility on wiki.** High: Immediately visible at the source


### 2. [Author](../attribution-signals/author.html) 

*Required based on license* • [Implementation guidance](../attribution-signals/author.html#implementation)

When displaying media files (e.g., from Wikimedia Commons) in result pages, it’s important to state or provide direct access to information about the author.

**Data sources** ([more details](../attribution-signals/author.html#data)):
- Available for crawlers
- MediaWiki Action API

**Visibility on wiki.** Varies per project: e.g., Immediately visible in file pages for Commons, requires reviewing the article history on Wikipedia.


### 3. [Link](../attribution-signals/link.html) 

*Required* • [Implementation guidance](../attribution-signals/link.html#implementation)

Provide direct access to the specific Wikimedia project page where the content in the results is being drawn from.

**Data sources** ([more details](../attribution-signals/link.html#data)):
- Available for crawlers
- MediaWiki Action API
- MediaWiki REST API
- [Wikimedia Enterprise API](https://enterprise.wikimedia.com/docs/#getting-started)


**Visibility on wiki.** High: Immediately visible at the source


### 4. [Title](../attribution-signals/title.html) 

*Required* • [Implementation guidance](../attribution-signals/title.html#implementation)

Identify the name of the media or source page being retrieved. This is key for search engine users to identify relevance.

**Data sources** ([more details](../attribution-signals/title.html#data)):
- Available for crawlers
- URL parsing
- Wikimedia Enterprise API

**Visibility on wiki.** High: Immediately visible at the source


### 5. [License](../attribution-signals/license.html) 

*Required by license type* • [Implementation guidance](../attribution-signals/license.html#implementation)

You must find an appropriate way to indicate the license of reused content. Particularly required if the license implies any usage restrictions.

**Data sources** ([more details](../attribution-signals/license.html#data)):
- Available for crawlers
- MediaWiki Action API
- Wikimedia Enterprise API

**Visibility on wiki.** High: Visible at the source


### 6. [Brand mark](../attribution-signals/brand-mark.html) 

*Required if source isn’t stated. Otherwise, recommended.* • [Implementation guidance](../attribution-signals/brand-mark.html#implementation)

Use brand marks to visually identify the source of the information being reused. Might replace the source when space is limited.

**Data sources** ([more details](../attribution-signals/brand-mark.html#data)):
- Available for crawlers (Favicon)
- Visual brand marks: [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Wikimedia_Attribution_Guide_Favicons) categorizes brand favicons aligned with Wikimedia identity guidelines
- Audio brand marks: The [Meta Wikimedia](https://meta.wikimedia.org/wiki/Brand/logo#Wikimedia_Sound_Logo) platform hosts information and audio files that allow implementing the Wikimedia sound logo

**Visibility on wiki.** High: Immediately visible at the source

![Modification disclaimer example](../public/media/search-signals-modification.png)

### [Modification disclaimer](../attribution-signals/modification-disclaimer.html) 

*Required* • [Implementation guidance](../attribution-signals/modification-disclaimer.html#implementation)

Modifications or additions made to Wikimedia content or media files need to be announced in a way that fits the medium. 

We recommend displaying disclaimers associated to aggregated content too, such as the one produced by AI search assistants (left image). 

Under no circumstances should aggregate content be attributed to a single source (right image).



## Trust and relevance

Beyond essential attribution, search results should help users assess the reliability of the information being surfaced. Signals such as reference counts, editor activity, or readership data make visible the processes of review, participation, and use that underpin Wikimedia projects. Highlighting these cues strengthens the credibility of both the content and the platform reusing it, while guiding audiences toward sources they can trust.


### [Reference count](../attribution-signals/reference-count.html) 

*Recommended* • [Implementation guidance](../attribution-signals/reference-count.html#implementation)

Use this Wikipedia-specific credibility signal to expose the number of sources backing an article’s content.

**Data sources** ([more details](../attribution-signals/reference-count.html#data)):
- MediaWiki REST API

**Visibility on wiki.** Medium: Visible in articles that contain numbered reference lists.



### [Contributor count](../attribution-signals/contributor-count.html) 

*Recommended* • [Implementation guidance](../attribution-signals/contributor-count.html#implementation)

This trust signal indicates the number of volunteers that have contributed to create or gather the information available in the original Wikimedia project page.

**Data sources** ([more details](../attribution-signals/contributor-count.html#data)):
- Coming soon...

**Visibility on wiki.** Medium: Visible but requires navigating to a data dashboard from articles’ Revision history



### [Page views](../attribution-signals/page-views.html) 

*Recommended* • [Implementation guidance](../attribution-signals/page-views.html#implementation)

Use this signal to express the total number of views that a specific Wikimedia page has received in a predefined period of time.

**Data sources** ([more details](../attribution-signals/page-views.html#data)):
- Coming soon...

**Visibility on wiki.** Medium: Visible but requires navigating to a data dashboard from articles’ Revision history



### [Attribution count](../attribution-signals/attribution-count.html) 

*Recommended* • [Implementation guidance](../attribution-signals/attribution-count.html#implementation)

Use this signal to indicate (numerically or not) the popularity of a specific resource in your system, based (for example) on the number of impressions.



## Recency of information

A unique feature of Wikimedia projects is that they are continuously updated by a global community of volunteers. Providing signals such as last edit date or indicators of trendiness when sharing articles or other Wikimedia resources can help surface this living nature, giving search engine users cues about the dynamism and timeliness of the content being displayed.


### [Trending indicator](../attribution-signals/trending-indicator.html) 

*Recommended* • [Implementation guidance](../attribution-signals/trending-indicator.html#implementation)

Use this attribute to flag Wikipedia articles that are experiencing an unusual volume of recent activity, such as sharp increases in reads and/or edits that often correlate with unfolding events.


**Data sources** ([more details](../attribution-signals/trending-indicator.html#data)):
- Coming soon...

**Visibility on wiki.** Not available on Wikimedia pages.


### [Last update](../attribution-signals/last-update.html) 

*Recommended* • [Implementation guidance](../attribution-signals/last-update.html#implementation)

Use this attribute to display the timestamp of the most recent edit done to the Wikimedia page being retrieved or reused (e.g., “Last update 22 September 2025”)

**Data sources** ([more details](../attribution-signals/last-update.html#data)):
- Coming soon...

**Visibility on wiki.** Medium: Available in pages’ history (requires navigation).



## Ecosystem growth

Attribution is not only about recognizing past contributions but also about sustaining the future of free knowledge. By including a clear participation call-to-action (CTA) in search results, reusers can help close the loop. Inviting audiences who benefit from Wikimedia content to also contribute back. This intervention supports the continued growth and renewal of Wikimedia projects, ensuring that the knowledge surfaced today keeps being enriched and expanded by volunteers tomorrow.


### [Participation CTA](../attribution-signals/participation-cta.html) 

*Recommended* • [Implementation guidance](../attribution-signals/participation-cta.html#implementation)

Use participation CTAs to provide context-appropriate prompts to invite your audience to contribute to the Wikimedia ecosystem.


