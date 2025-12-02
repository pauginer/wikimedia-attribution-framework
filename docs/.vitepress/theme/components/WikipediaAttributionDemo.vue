<template>
  <div className="wikipedia-attribution-demo-wrapper">
    <div class="wikipedia-attribution-demo box-shadow-medium">
      <div class="card-preview">
        <WikipediaSearchCard
          :site-name="siteName"
          :brandmark="formData.brandmarkAttribution"
          :title="formData.articleTitle || 'Jean-Michel Basquiat'"
          :activity-level="
            formData.activityIndicator ? formData.activityLevel : undefined
          "
          :activity-indicator="formData.activityIndicator"
          :number-of-contributors="
            formData.contributorIndicator
              ? formData.numberOfContributors || 80
              : undefined
          "
          :number-of-views="
            formData.viewsIndicator
              ? formData.numberOfViews || 32000
              : undefined
          "
          :number-of-sources="
            formData.referenceIndicator
              ? formData.numberOfSources || 32
              : undefined
          "
          :call-to-action="formData.callToAction"
          :snippet-length="formData.snippetLength"
        />
      </div>

      <div>
        <cdx-button
          action="progressive"
          weight="primary"
          @click="showControls = !showControls"
        >
          <cdx-icon :icon="cdxIconConfigure" />
          Configure
        </cdx-button>
      </div>

      <AttributionControls v-if="showControls" v-model="formData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import WikipediaSearchCard from "./WikipediaSearchCard.vue";
import AttributionControls from "./AttributionControls.vue";
import { cdxIconConfigure } from "@wikimedia/codex-icons";

interface FormData {
  articleTitle: string;
  numberOfSources?: number;
  numberOfViews?: number;
  numberOfContributors?: number;
  callToAction: string | null;
  sourceAttribution: string | null;
  brandmarkAttribution: string | null;
  activityIndicator: boolean;
  contributorIndicator: boolean;
  viewsIndicator: boolean;
  referenceIndicator: boolean;
  activityLevel: string;
  snippetLength: string;
}

const formData = ref<FormData>({
  articleTitle: "Jean-Michel Basquiat",
  numberOfSources: 32,
  numberOfViews: 32000,
  numberOfContributors: 80,
  callToAction: null,
  sourceAttribution: "name",
  brandmarkAttribution: "favicon",
  activityIndicator: false,
  contributorIndicator: false,
  viewsIndicator: false,
  referenceIndicator: false,
  activityLevel: "read-year",
  snippetLength: "medium",
});

const showControls = ref(false);

const siteName = computed(() => {
  return formData.value.sourceAttribution === "name+language"
    ? "English Wikipedia"
    : "Wikipedia";
});
</script>

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.wikipedia-attribution-demo-wrapper {
  background-color: var(@background-color-neutral-subtle);
  padding: @spacing-100;
}

.wikipedia-attribution-demo {
  display: flex;
  flex-direction: column;
  gap: @spacing-150;
}

.card-preview {
  width: @size-full;
}

@media (max-width: 768px) {
  .wikipedia-attribution-demo {
    gap: @spacing-150;
  }
}
</style>
