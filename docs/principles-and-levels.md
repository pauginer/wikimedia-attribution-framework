<script setup>
import { attributionLevels } from './.vitepress/data'
</script>

# Principles and levels

## Principles

### Keep Wikipedia visible

While different reusers rely on Wikipedia to produce their content, Wikipedia becomes invisible to users on those other platforms/contexts. Over time, it may become harder to attract new contributors if they are not aware of the project, and understand its value.

### Recognizable elsewhere

When Wikipedia contents are distributed in external platforms (i.e., Reusers), we want to make sure that their users know where contents come from, and they have a way (and a motivation) to access the original content.

### Trustworthy, verifiable content

Surfaces the reliability, and constantly verified and updated content from high quality sources.

### Made by humans

Emphasises content created and verified by humans, gives credit to the community as contextually apt.

## Levels of attribution

**Based on the used signals**. We have defined different levels of attribution for reusers to meet.

<GridLayout>
  <Card 
    variant="default"
    v-for="attributionLevel in attributionLevels"
    :key="attributionLevel.id"
    :title="attributionLevel.name"
    :description="attributionLevel.description"
  />
</GridLayout>

**Contributing back**. In connection to the levels of attribution, there will be a metric-driven way to measure the expected attribution impact enabling pathways back for people to engage with Wikimedia projects.

<GridLayout>
  <Card 
    variant="default"
    v-for="contributionLevel in contributionLevels"
    :key="contributionLevel.id"
    :title="contributionLevel.name"
    :description="contributionLevel.description"
  />
</GridLayout>
