<template>
  <div class="grid-layout">
    <slot />
  </div>
</template>

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(@size-1600, 1fr));
  gap: @spacing-100;
  margin-top: @spacing-100;
}
</style>
