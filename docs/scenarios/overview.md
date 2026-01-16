<script setup>
import { scenarios } from '../.vitepress/data'
</script>

# Reuse scenarios

Content from Wikimedia projects is reused in many environments, from search engines and AI assistants to mobile apps, games or press. Each of these contexts presents unique challenges for attribution: familiar visual signals aren’t possible in audio, conversational agents often blend and blur sources of information, and immersive formats like games can obscure the origin of knowledge to preserve user engagement.

We moved into action in face of those challenges to propose flexible, consistent, and feasible attribution practices across the most impactful ways people encounter Wikimedia content.

## Explore the scenarios

We identified and prioritized reuse scenarios where Wikimedia content has the greatest reach.

<div style="display:flex;flex-direction:column;row-gap:20px;">
  <Card 
    variant="link"
    v-for="scenario in scenarios"
    :key="scenario.id"
    :title="scenario.name"
    :description="scenario.description"
    :url="scenario.url"
  />
</div>

Technology and reuse practices are changing quickly. This framework is designed to be adaptable: new scenarios may be added in the future, and attribution signals may be updated as best practices and new insights emerge.

## What to expect

For each scenario, we describe:

- The context in which content from Wikimedia projects is typically reused in the selected scenario
- Why the reuse scenario matters, and why we chose to prioritize it.
- The required and recommended attribution signals that apply to each specific context, with illustrations, data sources and links to the sections that provide implementation guidance.

Our categorization should make it easier for reusers of Wikimedia projects' content to recognize their context. The structure is designed to facilitate the quick grasping of the framework’s requirements and recommendations, and it provides flexibility for adapting signals to the particular affordances and constraints of each medium.
