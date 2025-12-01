<script setup>
import { scenarios } from './.vitepress/data'
</script>

# Wikimedia Attribution Framework

**Sustainable Reuse of Wikimedia Content**

Wikimedia’s content is created by a global community of volunteers who share their knowledge freely. Every day, that free knowledge is surfaced in search engines, apps, AI assistants, in social media, media publications, and countless other contexts by “reusers”.

The Wikimedia Attribution Framework provides reusers with requirements and recommendations to ensure recognition is clear and consistent across contexts. Attribution is essential for fair **acknowledgment and active awareness** of Wikimedia’s human-made, verified high quality content. It is a key factor in the continued growth and sustainability of the free knowledge ecosystem.

Reusers can help disseminate relevant contents for their audience, while also helping to keep the circle of free, human-produced knowledge alive by protecting trust, ensuring transparency, and fostering participation.


## Reuse scenarios

We identified and prioritized reuse scenarios where Wikimedia content has the greatest reach, but are applicable to **anyone reusing Wikimedia content**. In some of the following reuse contexts, attribution practices urgently need clarity. 

<GridLayout>
  <Card 
    variant="link"
    v-for="scenario in scenarios" 
    :key="scenario.id" 
    :title="scenario.name" 
    :description="scenario.description" 
    :url="scenario.url" 
  />
</GridLayout>

Not sure if your data reuse scenario is covered? Visit the [help page](help.html) for additional help and guidance.

<!-- ## Example of an embed

<iframe width="560" height="315" src="https://www.youtube.com/embed/MDnyhGLVkKU?si=wUq4fbnawwBvnVS2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

## Attribution signals

Attribution for each scenario uses a set of signals as building blocks. These are attributes (links, brand marks, metadata, etc.) can be combined to provide appropriate attribution to indicate Wikimedia as the source of knowledge in external contexts. 

Some of the signals help viewers also convey trust, transparency, and encouragement for participation.

[Explore all signals](attribution-signals/overview.html)

## About the framework

The Wikimedia Attribution Framework sets out practical guidelines that state when and how Wikimedia content should be credited when reused outside our projects. It also provides paths back to the ecosystem, supporting the sustainability of our movement and its growth through open contribution. Wikimedia’s framework exists to:

- Simplify attribution practices by providing straightforward implementation guidelines and data sources that support the implementation of compliant and consistent attribution across diverse platforms.


- Strengthen trust in information by emphasizing the reliability of Wikimedia content, and making credibility cues visible and accessible in third-party contexts.

- Contribute to the sustainability of the Wikimedia ecosystem by driving engagement back to the source of free knowledge.


These guidelines are designed to be straightforward, adaptable, and aligned with existing legal requirements and Creative Commons licenses.
