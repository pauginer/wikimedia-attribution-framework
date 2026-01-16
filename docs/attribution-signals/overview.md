<script setup>
import { useFilter } from '../.vitepress/useFilter'

const { filteredItems } = useFilter()
</script>

# Attribution Signals

Attribution signals are the specific elements that keep Wikimedia projects visible when their content is surfaced in external contexts. Signals provide direct acknowledgment and access to the source, and present additional information that helps end users evaluate and engage with the knowledge they encountered.

The signals included in this framework were selected because they serve one or more of the following purposes:

- Ensure compliance with licensing and attribution requirements.
- Strengthen trust by giving visibility to the processes and the community behind Wikimedia projects.
- Provide transparency about how up-to-date or how widely used the knowledge is.
- Support the long-term growth of the free knowledge ecosystem by providing participation and contribution pathways.

<br>
<div>
  <FilterButtons />
  
  <GridLayout>
    <Card v-for="item in filteredItems" :key="item.id" :title="item.name" :description="item.description" :url="item.url" />
  </GridLayout>
</div>
