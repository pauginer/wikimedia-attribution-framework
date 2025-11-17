<template>
  <div class="wikipedia-attribution-demo">
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
          formData.viewsIndicator ? formData.numberOfViews || 32000 : undefined
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

    <AttributionControls v-model="formData" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import WikipediaSearchCard from "./WikipediaSearchCard.vue";
import AttributionControls from "./AttributionControls.vue";

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

const siteName = computed(() => {
  return formData.value.sourceAttribution === "name+language"
    ? "English Wikipedia"
    : "Wikipedia";
});
</script>

<style scoped>
.wikipedia-attribution-demo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.card-preview {
  margin: 0 auto;
  max-width: 45rem;
  width: 100%;
}

@media (max-width: 768px) {
  .wikipedia-attribution-demo {
    gap: 1.5rem;
  }
}
</style>
