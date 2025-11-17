<template>
  <WikipediaCard
    :icon="brandmark === 'favicon' ? cdxIconLogoWikipedia : undefined"
    :thumbnail="thumbnailData"
    :url="cardUrl"
  >
    <template #site-name>{{ siteName }}</template>
    <template #site-url>en.wikipedia.org › wiki › {{ title }}</template>
    <template #title>{{ title }}</template>
    <template #chips>
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
    </template>
    <template #description>{{ truncatedDescription }}</template>
    <template #extra-content>
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
    </template>
  </WikipediaCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cdxIconLogoWikipedia } from "@wikimedia/codex-icons";
import { CdxInfoChip } from "@wikimedia/codex";
import WikipediaCard from "./WikipediaCard.vue";

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

// Static article data - default description for Jean-Michel Basquiat
const defaultDescription =
  "Jean-Michel Basquiat (December 22, 1960 – August 12, 1988) was an American artist who rose to success during the 1980s as part of the Neo-expressionism movement. Basquiat first achieved fame as part of SAMO, a graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s, where rap, punk, and street art coalesced into early hip-hop music culture. By the early 1980s, his paintings were being exhibited in galleries and museums internationally.";

// Default thumbnail URL
const defaultThumbnail = {
  url: "https://upload.wikimedia.org/wikipedia/en/e/e1/Untitled_acrylic_and_mixed_media_on_canvas_by_--Jean-Michel_Basquiat--%2C_1984.jpg",
};

const cardUrl = computed(() => {
  if (props.url) {
    return props.url;
  }
  const encodedTitle = encodeURIComponent(props.title.replace(/\s+/g, "_"));
  return `https://en.wikipedia.org/wiki/${encodedTitle}`;
});

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

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.extra-content-chip {
  font-size: @font-size-x-small;
  color: @color-subtle;
}
</style>
