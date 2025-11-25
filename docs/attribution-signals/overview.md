<script setup>
import { useFilter } from '../.vitepress/useFilter'

const { filteredItems } = useFilter()
</script>

# Attribution Signals

<br>
<div>
  <FilterButtons />
  
  <GridLayout>
    <Card v-for="item in filteredItems" :key="item.id" :title="item.name" :description="item.description" :url="item.url" />
  </GridLayout>
</div>
