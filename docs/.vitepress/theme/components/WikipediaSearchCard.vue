<template>
  <div class="cdx-card cdx-card--search-result">
    <div class="cdx-card__main-content">
      <div class="cdx-card__header">
        <div v-if="brandmark === 'favicon'" class="cdx-card__favicon-container">
          <cdx-icon :icon="cdxIconLogoWikipedia" size="medium" />
        </div>

        <div class="cdx-card__site-info">
          <div class="cdx-card__site-name">{{ siteName }}</div>
          <div class="cdx-card__site-url">
            en.wikipedia.org › wiki › {{ title }}
          </div>
        </div>
      </div>

      <component
        :is="contentTag"
        :href="cardLink"
        class="cdx-card__title-link"
        :class="{ 'cdx-card__title-link--is-link': isLink }"
      >
        {{ title }}
      </component>

      <div
        v-if="computedChips.length > 0 || computedExtraChipContent.length > 0"
        class="cdx-card__chips"
      >
        <cdx-info-chip
          v-for="chip in computedChips"
          :key="chip.text"
          :status="chip.type"
        >
          {{ chip.text }}
        </cdx-info-chip>
        <span
          v-for="(item, index) in computedExtraChipContent"
          :key="index"
          class="extra-content-chip"
        >
          <span v-if="index > 0"> • </span>
          {{ item.text }}
        </span>
      </div>

      <div class="cdx-card__content">
        <div class="cdx-card__snippet">
          {{ truncatedDescription }}
        </div>
        <cdx-thumbnail
          v-if="thumbnailData"
          :thumbnail="thumbnailData"
          class="cdx-card__thumbnail"
        />
      </div>

      <div
        v-if="computedExtraContentItems.length > 0"
        class="cdx-card__extra-content"
      >
        <span v-for="(item, index) in computedExtraContentItems" :key="index">
          <span v-if="index > 0"> • </span>
          <a
            v-if="item.type === 'link'"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            >{{ item.text }}</a
          >
          <span v-else>{{ item.text }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cdxIconLogoWikipedia } from "@wikimedia/codex-icons";
import { CdxInfoChip, CdxIcon, CdxThumbnail } from "@wikimedia/codex";

interface Props {
  url?: string;
  siteName?: string;
  title: string;
  description?: string;
  thumbnail?: { url: string } | null;
  topRead?: boolean;
  recentActivity?: boolean;
  activityIndicator?: boolean;
  updateSinceLastVisit?: boolean;
  numberOfViews?: number;
  timeSinceUpdate?: number;
  numberOfSources?: number;
  numberOfContributors?: number;
  callToAction?: string | null;
  brandmark?: string | null;
  activityLevel?: string | null;
  snippetLength?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  siteName: "Wikipedia",
  brandmark: "favicon",
  description: "",
  thumbnail: null,
});

// Static article data - default description for Halley's Comet
const defaultDescription =
  "Halley's Comet is the only known short-period comet that is consistently visible to the naked eye from Earth appearing every 72–80 years, though with the majority of recorded apparitions (25 of 30) occurring after 75–77 years.";

// Default thumbnail URL
const defaultThumbnail = {
  url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Lspn_comet_halley.jpg",
};

const cardUrl = computed(() => {
  if (props.url) {
    return props.url;
  }
  const encodedTitle = encodeURIComponent(props.title.replace(/\s+/g, "_"));
  return `https://en.wikipedia.org/wiki/${encodedTitle}`;
});

const isLink = computed(() => !!cardUrl.value);
const contentTag = computed(() => (isLink.value ? "a" : "span"));
const cardLink = computed(() => (isLink.value ? cardUrl.value : undefined));

const thumbnailData = computed(() => {
  return props.thumbnail || defaultThumbnail;
});

const truncatedDescription = computed(() => {
  const baseDescription = props.description || defaultDescription;
  let snippetTrunc = 200;
  if (props.snippetLength === "short") {
    snippetTrunc = 100;
  } else if (props.snippetLength === "long") {
    snippetTrunc = 300;
  }
  return baseDescription.length > snippetTrunc
    ? baseDescription.substring(0, snippetTrunc) + "..."
    : baseDescription;
});

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

const computedExtraContentItems = computed(() => {
  const extraContent: Array<{
    text: string;
    type: "text" | "link";
    href?: string;
  }> = [];
  if (props.numberOfSources && props.numberOfSources > 10) {
    const roundedSources = Math.floor(props.numberOfSources / 10) * 10;
    extraContent.push({
      text: `From ${roundedSources}+ sources`,
      type: "text",
    });
  }
  if (props.callToAction && props.callToAction.trim() !== "") {
    if (props.callToAction === "contribute") {
      extraContent.push({
        text: "Contribute to Wikipedia",
        type: "link",
        href: "https://en.wikipedia.org/wiki/Wikipedia:Contribute",
      });
    } else if (props.callToAction === "save") {
      extraContent.push({
        text: "Save to Reading List",
        type: "link",
        href: "https://en.wikipedia.org/wiki/Special:ReadingLists",
      });
    }
  }
  return extraContent;
});

const computedExtraChipContent = computed(() => {
  const extraContent: Array<{ text: string }> = [];
  if (props.numberOfContributors && props.numberOfContributors > 10) {
    const roundedContributors =
      Math.floor(props.numberOfContributors / 10) * 10;
    extraContent.push({
      text: `${formatNumber(roundedContributors)}+ contributors`,
    });
  }
  if (props.numberOfViews && props.numberOfViews > 100) {
    const roundedViews = Math.floor(props.numberOfViews / 100) * 100;
    extraContent.push({ text: `${formatNumber(roundedViews)}+ views` });
  }
  return extraContent;
});

const computedChips = computed(() => {
  const chips: Array<{
    text: string;
    type?: "notice" | "success" | "warning" | "error";
  }> = [];
  if (props.activityIndicator) {
    if (props.activityLevel === "read+updated") {
      chips.push({
        text: "New updates",
        type: "success",
      });
    } else if (props.activityLevel === "updated") {
      chips.push({
        text: "Active today",
        type: "success",
      });
    } else if (props.activityLevel === "read") {
      chips.push({
        text: "Popular today",
        type: "success",
      });
    } else if (props.activityLevel === "read-year") {
      chips.push({
        text: "Most read",
        type: "success",
      });
    }
  }
  return chips;
});
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
    overflow: hidden;
    border-radius: 8px;
    margin: 0;

    .cdx-thumbnail__placeholder,
    .cdx-thumbnail__image {
      object-fit: cover;
      width: @size-400;
      height: @size-400;
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

.extra-content-chip {
  font-size: @font-size-x-small;
  color: @color-subtle;
}
</style>
