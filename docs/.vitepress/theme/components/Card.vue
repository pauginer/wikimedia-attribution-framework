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

<style scoped>
.card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

a.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

a .card-title {
  color: var(--vp-c-brand-1);
}

.card-description {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
