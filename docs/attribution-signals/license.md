# License

Reusers should indicate the license under which the Wikimedia content is available and, where possible, link to the full license text. This is a core component of Creative Commons attribution, and helps audiences understand the terms of reuse. License attribution is generally required, but its omission due to space constraints is acceptable as long as the content or media being shared belong to the public domain.

For Wikimedia text content, reuse is typically under CC BY-SA 4.0, but it’s worth keeping in mind that media files (images, audio, video) on Wikimedia Commons can carry individually assigned licenses. These must be respected and expressed in external context, specially if any restrictions apply.

Including the license (and linking to its full text) makes permissions explicit, educates users about open source, and helps sustain a healthy, transparent knowledge ecosystem.

<!-- TODO: Mockups for License examples-->

<FilterButtons />

## Data sources {#data}

This section identifies where and how the data point behind this signal can be obtained. It points to the relevant Wikimedia APIs, datasets, or metadata fields that content reusers can rely on to implement the signal accurately and consistently.

### MediaWiki Action API

This public API might be used to fetch:

1. Project's global license: The query action can be used to pull the license information for the overall project using the `rightsinfo` property:

    ```plaintext
    GET https://{language}.{project}.org/w/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json
    ```

    This request returns a link to get more information about the license, as well as a license display name.

2. Images and files' licenses: The query action can be used with a few additional properties to pull the license information for every media file.

    ```plaintext
    GET https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=extmetadata&format=json
    ```

    Use for the `License` and `LicenseShortName` returned in the extmetadata object.

[See MediaWiki Action API's documentation →](https://www.mediawiki.org/wiki/API:Action_API)

### Wikimedia Enterprise API

This on-demand API may be used to fetch:

1. An article’s Structured Contents: This includes the license information for a given article, in either the main `Article Lookup` or `Article Structured Contents` endpoints. 

    ```plaintext
    GET https://api.enterprise.wikimedia.com/v2/articles/{name}
    ```

    ```plaintext
    GET https://api.enterprise.wikimedia.com/v2/structured-contents/{name}
    ```

    Using either endpoint, the information can be found within the [`license`](https://enterprise.wikimedia.com/docs/data-dictionary/#license) property.

2. An object with information about the License relevant to an article ([See in Wikimedia Enterprise’s Data Dictionary](https://enterprise.wikimedia.com/docs/data-dictionary/#license)). The object presents the following structure:

    ```json
    [
    {
        "name":"Creative Commons Attribution Share Alike 3.0 Unported",
        "identifier":"CC-BY-SA-3.0",
        "url":"https://creativecommons.org/licenses/by-sa/3.0/"
    }
    ]
    ```

    > ℹ️ **Note**: Enterprise endpoints do not work without authenticating.

[See Wikimedia Enterprise API's documentation →](https://enterprise.wikimedia.com/docs/#getting-started)

### Visual assets

If you wish to represent licenses visually, Creative Commons make available a library of [logos and badges](https://creativecommons.org/mission/downloads/).

## Implementation guidance {#implementation}

### Minimum requirements

License attribution strongly depends on the type of content being shared, and the implications of the specific license assigned to that content:

- For reused text content, you may include a licensing notice that states that the work is released under CC BY-SA (the common license for Wikimedia projects) and provide a link to the license text.

- For media from Wikimedia Commons, display the specific file’s license (e.g., CC BY, CC BY-SA, CC0, Public Domain) and ensure that end-users can reach license details (which are always available in the original file page).

### Best practices

- Use human-readable labeling plus the formal code, e.g., “Freely licensed (CC BY-SA 4.0)”, and link the license name to the license deed in [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/).

- You might use [Creative Commons badges](https://creativecommons.org/share-your-work/cclicenses/) to express the content’s license in a more visually prominent way.

- Place license information near the reused item:
  - Text: show the license with the attribution block or in a visible “About this content” or credits area.
  - Images and media: show license alongside the asset (caption/overlay/credit line) and link to the Wikimedia Commons file page (which exposes author, source, and license in a single location) or directly to the license deed from the context of reuse.

- In multi-source experiences (e.g., chatbot/LLM), allow users to access individual license information for each item. Flexible placement is allowed under space constraints.

## Reuse scenarios

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

Displaying license information clarifies reuse conditions, fostering responsible reuse of search results.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Displaying license information clarifies reuse conditions, fostering responsible AI outputs.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
