<script setup>
import { attributionLevels } from './.vitepress/data'
import { contributionLevels } from './.vitepress/data'
</script>

# Principles and levels

## Principles

### Keep Wikimedia content visible

While different reusers rely on Wikipedia or other data from Wikimedia projects for their products, their application without attribution means Wikimedia projects become invisible to users on those other platforms/contexts. Over time, it may become harder to attract new contributors if they are not aware of the project and understand its value.

### Recognizable elsewhere

When content from Wikimedia projects is distributed on external platforms (i.e., Reusers), we want to make sure that their audiences know where the content comes from, and that they have a way to access original sources.

### Trustworthy, verifiable content

Surfaces the reliability and constantly verified and updated content from high-quality sources.

### Made by humans

Emphasizes content created and verified by humans, and gives credit to the community when contextually appropriate.

## Levels of attribution

**Based on usage of signals**. We have defined different levels of attribution for reusers to meet.

<GridLayout>
  <Card 
    variant="default"
    v-for="attributionLevel in attributionLevels"
    :key="attributionLevel.id"
    :title="attributionLevel.name"
    :description="attributionLevel.description"
  />
</GridLayout>

**Contributing back**. In connection to the levels of attribution, there are different levels of impact related to the extent that reuse generates engagement on Wikimedia projects.

<GridLayout>
  <Card 
    variant="default"
    v-for="contributionLevel in contributionLevels"
    :key="contributionLevel.id"
    :title="contributionLevel.name"
    :description="contributionLevel.description"
  />
</GridLayout>
