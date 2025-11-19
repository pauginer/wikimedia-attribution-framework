<script setup>
import { attributionLevels } from './.vitepress/data'
</script>

# Principles and levels

## Principles

**Keep Wikipedia visible**
<br>
While different reusers rely on Wikipedia to produce their content, Wikipedia becomes invisible to users on those other platforms/contexts. Over time, it may become harder to attract new editors and donors if they are not aware of the project, and understand its value.

**Recognizable elsewhere**
<br>
When Wikipedia contents are distributed in external platforms (i.e., Reusers), we want to make sure that their users know where contents come from, and they have a way (and a motivation) to access the original content.

**Trustworthy verifiable content**
<br>
Surfaces the reliability and constantly verified and updated content from high quality sources.

**Made by humans**
<br>
Emphasises content created and verified by humans, gives credit to the community as contextually apt.

## Levels of attribution

**Based on the used signals**. We have defined different levels of attribution for reusers to consider.

<GridLayout>
  <Card 
    variant="default"
    v-for="attributionLevel in attributionLevels" 
    :key="attributionLevel.id" 
    :title="attributionLevel.name" 
    :description="attributionLevel.description" 
  />
</GridLayout>

**Contributing back**. For qualifying to the above levels, reusers need to meet the corresponding level of contribution. This is an metric-driven way to confirm that attribution is providing a way that allows people to engage with Wikimedia projects.
