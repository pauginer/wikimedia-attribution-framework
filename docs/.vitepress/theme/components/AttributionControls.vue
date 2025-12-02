<template>
  <div class="attribution-controls">
    <div class="attribution-form">
      <h2>Attribution Signals</h2>
      <div class="form-container">
        <h3>Essential</h3>
        <div class="form-field">
          <cdx-field>
            <template #label>Source</template>
            <cdx-select
              default-label="Choose an option"
              :selected="modelValue.sourceAttribution"
              @update:selected="updateField('sourceAttribution', $event)"
              :menu-items="[
                { value: 'name', label: 'Project Name' },
                { value: 'name+language', label: 'Project Name & Language' },
              ]"
            />
          </cdx-field>
        </div>
        <div class="form-field">
          <cdx-field>
            <template #label>Brandmark</template>
            <cdx-select
              default-label="Choose an option"
              :selected="modelValue.brandmarkAttribution"
              @update:selected="updateField('brandmarkAttribution', $event)"
              :menu-items="[
                { value: 'favicon', label: 'Favicon' },
                { value: 'globe', label: 'Project logo' },
              ]"
            />
          </cdx-field>
        </div>
        <h3>Recommended</h3>
        <cdx-field>
          <cdx-checkbox
            :model-value="modelValue.activityIndicator"
            @update:model-value="updateField('activityIndicator', $event)"
          >
            <strong>Show activity indicator</strong>
          </cdx-checkbox>
        </cdx-field>
        <cdx-field>
          <cdx-checkbox
            :model-value="modelValue.contributorIndicator"
            @update:model-value="updateField('contributorIndicator', $event)"
          >
            <strong>Show contributor count</strong>
          </cdx-checkbox>
        </cdx-field>
        <cdx-field>
          <cdx-checkbox
            :model-value="modelValue.viewsIndicator"
            @update:model-value="updateField('viewsIndicator', $event)"
          >
            <strong>Show page views</strong>
          </cdx-checkbox>
        </cdx-field>
        <cdx-field>
          <cdx-checkbox
            :model-value="modelValue.referenceIndicator"
            @update:model-value="updateField('referenceIndicator', $event)"
          >
            <strong>Show reference count</strong>
          </cdx-checkbox>
        </cdx-field>
        <cdx-field>
          <template #label>Call To Action</template>
          <cdx-select
            default-label="Choose an option"
            :selected="modelValue.callToAction"
            @update:selected="updateField('callToAction', $event)"
            :menu-items="[
              { value: '', label: 'None' },
              { value: 'contribute', label: 'Contribute To Wikipedia' },
              { value: 'save', label: 'Save to Reading List' },
            ]"
          />
        </cdx-field>
      </div>
    </div>

    <div class="content-form">
      <h2>Content Settings</h2>
      <div class="form-field">
        <cdx-field>
          <template #label>Article Title</template>
          <cdx-text-input
            :model-value="modelValue.articleTitle"
            @update:model-value="updateField('articleTitle', $event)"
            placeholder="Enter article title"
          />
        </cdx-field>
      </div>
      <div class="form-field">
        <cdx-field>
          <template #label>Article Activity</template>
          <cdx-select
            default-label="Choose an option"
            :selected="modelValue.activityLevel"
            @update:selected="updateField('activityLevel', $event)"
            :menu-items="[
              { value: 'read+updated', label: 'Read and Updated today' },
              { value: 'updated', label: 'Updated today' },
              { value: 'read', label: 'Read today' },
              { value: 'read-year', label: 'Read a lot this year' },
              { value: 'none', label: 'No activity' },
            ]"
          />
        </cdx-field>
      </div>
      <div class="form-field">
        <cdx-field>
          <template #label>Snippet Length</template>
          <cdx-select
            default-label="Choose an option"
            :selected="modelValue.snippetLength"
            @update:selected="updateField('snippetLength', $event)"
            :menu-items="[
              { value: 'short', label: 'Short' },
              { value: 'medium', label: 'Medium' },
              { value: 'long', label: 'Long' },
            ]"
          />
        </cdx-field>
      </div>
      <div class="form-field">
        <cdx-field>
          <template #label>Number of Contributors</template>
          <cdx-text-input
            :model-value="String(modelValue.numberOfContributors || '')"
            @update:model-value="
              updateField(
                'numberOfContributors',
                $event ? Number($event) : undefined
              )
            "
            placeholder="e.g., 80"
            type="number"
          />
        </cdx-field>
      </div>
      <div class="form-field">
        <cdx-field>
          <template #label>Number of Views</template>
          <cdx-text-input
            :model-value="String(modelValue.numberOfViews || '')"
            @update:model-value="
              updateField('numberOfViews', $event ? Number($event) : undefined)
            "
            placeholder="e.g., 32000"
            type="number"
          />
        </cdx-field>
      </div>
      <div class="form-field">
        <cdx-field>
          <template #label>Number of Sources</template>
          <cdx-text-input
            :model-value="String(modelValue.numberOfSources || '')"
            @update:model-value="
              updateField(
                'numberOfSources',
                $event ? Number($event) : undefined
              )
            "
            placeholder="e.g., 32"
            type="number"
          />
        </cdx-field>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CdxTextInput,
  CdxField,
  CdxSelect,
  CdxCheckbox,
} from "@wikimedia/codex";

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

interface Props {
  modelValue: FormData;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  "update:modelValue": [value: FormData];
}>();

function updateField(field: keyof FormData, value: any) {
  emit("update:modelValue", {
    ...props.modelValue,
    [field]: value,
  });
}
</script>

<style scoped lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.attribution-controls {
  display: flex;
  gap: @spacing-200;
}

.attribution-form,
.content-form {
  flex: 1;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: @spacing-100;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: @spacing-50;
}

.vp-doc h2 {
  padding: @spacing-100 0;
  margin: 0;
}

.vp-doc h3 {
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .attribution-controls {
    flex-direction: column;
  }
}
</style>
