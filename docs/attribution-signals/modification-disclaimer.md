# Modification disclaimer

Reusers of Wikimedia content must share Modification disclaimers to clearly disclose it if they have modified, adapted, or built upon the information extracted from the original source. This is a core requirement of the Creative Commons BY-SA 4.0 license, which governs most Wikimedia content.

A clear modification disclaimer protects Wikimedia’s reputation by preventing edits, errors, or deteriorations introduced downstream from being mistaken as official Wikimedia output. It also preserves transparency and protects user trust by allowing readers to distinguish between unaltered knowledge curated by Wikimedia volunteers and derivative versions. 
By clearly flagging modifications, reusers help sustain Wikimedia’s credibility as a trusted source and support the health of the open knowledge ecosystem.

<!-- TODO: Mockups for Modification disclaimer examples-->

<FilterButtons />

## Implementation guidance {#implementation}

### Minimum requirements

- Explicitly state when the content has been modified, edited, translated, shortened, reformatted, or otherwise adapted.

- Refrain from attributing aggregated content to a single Wikimedia project, even when a modification disclaimer ir present. (Check the [Source](source.md) signal guidelines for further recommendations on how to attribute in multi-source experiences).

- The modifications disclaimer should appear adjacent to or alongside the content, in a form that is visible and immediately accessible to the end user.

- Simple wording is acceptable, such as “This content has been adapted from {Project}” or “Modified from original on {Project}”).

### Best practices

- Use clear, unambiguous language that specifies the type of modification when relevant (e.g., “Translated from Wikipedia,” “Excerpted and adapted from Wikipedia,” “Image cropped from Wikimedia Commons”).

- Pair the disclaimer with a link back to the original page, so users can verify the unmodified source.

- In visual contexts (apps, games, infographics), include a subtle but legible label such as “Adapted from Wikipedia”.

- In audio or voice contexts, a short spoken phrase like “Adapted from Wikipedia” should accompany the use.

## Reuse scenarios

Modification disclaimers are essential to maintain the integrity of attribution. Without them, audiences may wrongly associate errors, omissions or misrepresentations with Wikimedia itself. Stating when text, images or any other media has been modified or text has been aggregated before being shared with end-users is considered a requirement in the following context:

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

When results alter original phrasing (e.g., in AI summaries), a disclaimer must be used to clarify that content has been adapted.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Declaring modifications prevents confusion between original and AI-synthesized text.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
