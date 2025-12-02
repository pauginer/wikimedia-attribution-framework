<template>
  <div class="cdx-card cdx-card--search-result">
    <div class="cdx-card__main-content">
      <div class="cdx-card__header">
        <div v-if="icon" class="cdx-card__favicon-container">
          <cdx-icon :icon="cdxIconLogoWikipedia" size="medium" />
        </div>
        <div v-else class="cdx-card__favicon-container">
          <cdx-icon :icon="cdxIconLogoWikipedia" size="medium" />
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
      <div class="cdx-card__content">
        <div v-if="$slots.description" class="cdx-card__snippet">
          <slot name="description" />
        </div>
        <cdx-thumbnail
          v-if="thumbnail"
          :thumbnail="thumbnail"
          :placeholder-icon="customPlaceholderIcon"
          class="cdx-card__thumbnail"
        />
      </div>

      <div v-if="$slots['extra-content']" class="cdx-card__extra-content">
        <slot name="extra-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cdxIconLogoWikipedia, type Icon } from "@wikimedia/codex-icons";
import { CdxIcon, CdxThumbnail } from "@wikimedia/codex";
import type { Thumbnail } from "@wikimedia/codex";
interface Props {
  url?: string;
  icon?: Icon | string;
  thumbnail?: Thumbnail | null;
  forceThumbnail?: boolean;
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
  border-radius: @border-radius-base;
  padding: @spacing-100;
  box-shadow: @box-shadow-medium;
  border: none;

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
    padding: 4px;
    flex-shrink: 0;
    border: @border-subtle;
    border-radius: @size-50;
  }

  &__favicon {
    color: @color-subtle;
    width: calc(@size-icon-medium + 18px);
    height: calc(@size-icon-medium + 18px);
    flex-shrink: 0;
  }

  &__site-info {
    min-width: 0;
  }

  &__site-name,
  &__site-url {
    color: @color-base;
    font-size: @font-size-x-small;
    font-weight: @font-weight-normal;
    line-height: @line-height-x-small;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__site-name {
    color: @color-base;
  }

  &__site-url {
    color: @color-subtle;
  }

  &__title-link {
    color: @color-progressive;
    font-size: @font-size-medium;
    font-weight: @font-weight-bold !important;
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

  &__content {
    display: flex;
    align-items: center;
    gap: @spacing-100;
  }

  &__thumbnail.cdx-thumbnail {
    flex-shrink: 0;

    .cdx-thumbnail__placeholder,
    .cdx-thumbnail__image {
      object-fit: cover;
      width: @size-400;
      height: @size-400;
      border-radius: @border-radius-base;
    }
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
}
</style>
