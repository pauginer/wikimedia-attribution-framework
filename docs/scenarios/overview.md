<script setup>
import { scenarios } from '../.vitepress/data'
</script>

# Reuse scenarios

Wikimedia content is reused in many environments, from search engines and AI assistants to mobile apps, games or press. Each of these contexts presents unique challenges for attribution.

## Explore the scenarios

Explore best practices for attribution in the different scenarios.

<div style="display:flex;flex-direction:column;row-gap:20px;">
  <Card 
    variant="link"
    v-for="scenario in scenarios" 
    :key="scenario.id" 
    :title="scenario.name" 
    :description="scenario.description" 
  />
</div>

## Propose a new scenario

The above list does not cover all possible scenarios in which Wikimedia contents are reused. Please, share new scenarios not documented where you may need guidance for attribution.

[Propose a new scenario]()
