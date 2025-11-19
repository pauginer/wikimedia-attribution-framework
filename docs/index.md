<script setup>
import { scenarios } from './.vitepress/data'
</script>

# How to use Wikimedia contents in a sustainable way?

**Help disseminate relevant contents for your audience and help grow the free knowledge ecosystem.**

The Attribution framework helps organizations and individuals when reusing Wikimedia contents by providing recommended attribution approaches. Check the scenarios that are relevant to your usecase, and the signals that you can use to provide great attribution.

## Reuse scenarios

The framework needs to be observed carefully by companies reusing Wikimedia content in the following scenarios:

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

<!-- ## Example of an embed

<iframe width="560" height="315" src="https://www.youtube.com/embed/MDnyhGLVkKU?si=wUq4fbnawwBvnVS2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
