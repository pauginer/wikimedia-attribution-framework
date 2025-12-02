<script setup lang="ts">
import { useFilter } from "../../useFilter";

const { allScenarios, selectedFilter, selectFilter } = useFilter();
</script>

<template>
  <div class="filter-buttons">
    <button
      v-for="scenario in allScenarios"
      :key="scenario.id"
      @click="selectFilter(scenario)"
      class="filter-button"
    >
      {{ selectedFilter.id === scenario.id ? "●" : "○" }} {{ scenario.name }}
    </button>
  </div>
</template>

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.filter-buttons {
  display: flex;
  column-gap: @size-25;
}
</style>
