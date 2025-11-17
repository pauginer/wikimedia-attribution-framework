<template>
  <div class="cdx-card cdx-card--search-result">
    <div class="cdx-card__main-content">
      <div class="cdx-card__header">
        <div v-if="icon" class="cdx-card__favicon-container">
          <cdx-icon :icon="icon" class="cdx-card__favicon" size="medium" />
        </div>
        <div v-else class="cdx-card__favicon-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
            alt="Wikipedia Logo"
            class="cdx-card__favicon"
          />
        </div>

        <div class="cdx-card__site-info">
          <div class="cdx-card__site-name">
            <slot name="site-name" />
          </div>
          <div class="cdx-card__site-url">
            <slot name="site-url" />
          </div>
        </div>
      </div>

      <component
        :is="contentTag"
        :href="cardLink"
        class="cdx-card__title-link"
        :class="{ 'cdx-card__title-link--is-link': isLink }"
      >
        <slot name="title" />
      </component>

      <div v-if="$slots.chips" class="cdx-card__chips">
        <slot name="chips" />
      </div>
      <div v-if="$slots.description" class="cdx-card__snippet">
        <slot name="description" />
      </div>

      <div v-if="$slots['extra-content']" class="cdx-card__extra-content">
        <slot name="extra-content" />
      </div>
    </div>

    <cdx-thumbnail
      v-if="thumbnail"
      :thumbnail="thumbnail"
      :placeholder-icon="customPlaceholderIcon"
      class="cdx-card__thumbnail"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Icon } from "@wikimedia/codex-icons";
import { CdxIcon, CdxThumbnail } from "@wikimedia/codex";
import type { Thumbnail } from "@wikimedia/codex";

interface Props {
  /**
   * If provided, the Card will be a link to this URL.
   */
  url?: string;

  /**
   * Icon displayed at the start of the Card.
   */
  icon?: Icon | string;

  /**
   * Thumbnail image data for the Card.
   */
  thumbnail?: Thumbnail | null;

  /**
   * Option to force a thumbnail layout.
   */
  forceThumbnail?: boolean;

  /**
   * Optional custom icon for the placeholder shown when forceThumbnail is true but no
   * thumbnail is provided.
   */
  customPlaceholderIcon?: Icon | string;
}

const props = withDefaults(defineProps<Props>(), {
  url: "",
  icon: undefined,
  thumbnail: null,
  forceThumbnail: false,
  customPlaceholderIcon: undefined,
});

// If a URL is provided for this menu item, the content will be wrapped in an `<a>` element
// with the href value set to the URL. Otherwise, it'll just be wrapped in a `<span>` element.
const isLink = computed(() => !!props.url);
const contentTag = computed(() => (isLink.value ? "a" : "span"));
const cardLink = computed(() => (isLink.value ? props.url : undefined));
</script>

<style lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import (reference) "@wikimedia/codex/mixins/link.less";

.cdx-card {
  background-color: @background-color-base;
  border: @border-base;
  border-radius: @border-radius-base;
  padding: @spacing-100;

  .cdx-info-chip__icon--vue {
    display: none;
  }

  &--search-result {
    display: flex;
    align-items: flex-start;
    gap: @spacing-100;
    min-height: @size-400;
  }

  &__main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: @spacing-25;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: @spacing-50;
  }

  &__favicon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(@size-icon-medium + 8px);
    height: calc(@size-icon-medium + 8px);
    border-radius: 50%;
    padding: 4px;
    flex-shrink: 0;
  }

  &__favicon {
    color: @color-subtle;
    width: calc(@size-icon-medium + 18px);
    height: calc(@size-icon-medium + 18px);
    flex-shrink: 0;
  }

  &__site-info {
    display: flex;
    flex-direction: column;
    gap: @spacing-12;
    min-width: 0;
  }

  &__site-name {
    color: @color-base;
    font-size: @font-size-small;
    font-weight: @font-weight-normal;
    line-height: @line-height-small;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__site-url {
    color: @color-subtle;
    font-size: @font-size-x-small;
    line-height: @line-height-small;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__title-link {
    color: @color-progressive;
    font-size: @font-size-x-large;
    font-weight: @font-weight-bold;
    line-height: @line-height-medium;
    text-decoration: none;
    word-wrap: break-word;
    overflow-wrap: break-word;

    &--is-link {
      &:hover {
        text-decoration: underline;
      }

      &:focus {
        outline: @outline-base--focus;
      }

      &:visited {
        color: @color-visited;
      }
    }
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: @spacing-25;
    align-items: center;
  }

  &__snippet {
    color: @color-subtle;
    font-size: @font-size-small;
    line-height: @line-height-small;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__extra-content {
    padding: 0;
    color: @color-subtle;
    font-size: @font-size-x-small;
    line-height: @line-height-small;

    a {
      .cdx-mixin-link();
    }
  }

  &__thumbnail.cdx-thumbnail {
    flex-shrink: 0;

    .cdx-thumbnail__placeholder,
    .cdx-thumbnail__image {
      object-fit: cover;
      width: @size-800;
      height: @size-800;
      border-radius: 1rem;
    }
  }
}
</style>
