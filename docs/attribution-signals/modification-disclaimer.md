# Modification disclaimer

Reusers of content from Wikimedia projects must share Modification disclaimers to openly disclose it if they have modified, adapted, or built upon the information extracted from original sources. This is a core requirement of the Creative Commons BY-SA 4.0 license, which governs most Wikimedia content.

Clear modification disclaimers protect Wikimedia projects from misinterpretation. They prevent edits, errors, or deteriorations introduced downstream from being mistaken as genuine Wikimedia content. Disclaimers also preserve transparency by allowing readers to distinguish between unaltered knowledge curated by Wikimedia volunteers and derivative versions.

By flagging modifications, reusers help support the health of Wikimedia's open knowledge ecosystem and sustain its credibility.

<!-- TODO: Mockups for Modification disclaimer examples-->

<FilterButtons />

## Implementation guidance {#implementation}

### Minimum requirements

- Explicitly state when the reused content has been modified, edited, translated, mixed or otherwise adapted.

- Refrain from attributing aggregated content to a single Wikimedia project, even when a modification disclaimer is present. (Check the [Source](source.md) signal guidelines for further recommendations on how to attribute in multi-source experiences).

- The modifications disclaimer should appear alongside the content, in a form that is visible and immediately accessible to the end user.

- Simple wording is acceptable, such as “This content has been adapted from {Project}” or “Modified from original on {Project}”.

### Best practices

- Use clear language that directly specifies the type of modification applied to the content (e.g., “Translated from Wikipedia,” “Excerpted and adapted from Wikipedia,” “Image cropped from Wikimedia Commons”).

- Pair the disclaimer with a link back to the original page so users can verify the original source.

- In visual contexts (apps, games, infographics), you may include a more concise and subtle, yet legible, label such as “Adapted from Wikipedia”.

- In audio or voice contexts, a short spoken phrase like “Adapted from Wikipedia” should accompany the modified content.

## Reuse scenarios

Modification disclaimers are essential to maintain the integrity of attribution. Without them, audiences could wrongly associate errors, omissions or misrepresentations with Wikimedia projects. Stating when text, images or any other media have been modified, or when content has been aggregated before being shared with end-users, is considered a requirement in the following contexts:

<FilterButtons />

<FilteredContent scenario="search">

### Search

`Required`

When results alter original phrasing from sources (e.g., in AI summaries), a disclaimer must be used to clarify that content has been adapted.

[Learn more about attribution in this context →](../scenarios/search.md)
</FilteredContent>

<FilteredContent scenario="ai-assistants">

### AI Assistants

`Required`

Declaring modifications prevents confusion between original and AI-generated text.

[Learn more about attribution in this context →](../scenarios/ai-assistants.md)
</FilteredContent>
