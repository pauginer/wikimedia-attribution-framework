<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description?: string | string[];
    url: string;
    variant?: "link" | "default";
  }>(),
  {
    variant: "link",
  }
);
</script>

<template>
  <component
    :is="variant === 'link' ? 'a' : 'div'"
    :href="variant === 'link' ? url : undefined"
    class="card"
  >
    <p class="card-title">{{ title }}</p>
    <div class="card-description">
      <ul v-if="Array.isArray(description)">
        <li v-for="item in description" :key="item">{{ item }}</li>
      </ul>
      <p v-else-if="description">{{ description }}</p>
    </div>
  </component>
</template>

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
.card {
  display: block;
  padding: @spacing-150;
  border: @border-width-base @border-style-base @border-color-base;
  border-radius: @border-radius-base;
  text-decoration: none;
  color: inherit;
  transition: all @transition-duration-medium @transition-timing-function-system;
}

a.card:hover {
  border-color: @color-progressive;
}

.card-title {
  margin: 0 0 @spacing-50 0;
  font-weight: @font-weight-bold;
}

.vp-doc a p.card-title {
  color: @color-progressive;
  text-decoration: none;
}

.card-description {
  margin: 0;
  color: @color-subtle;
  line-height: @line-height-medium;
}
</style>
