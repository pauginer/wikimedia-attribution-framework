import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Card from "./components/Card.vue";
import GridLayout from "./components/GridLayout.vue";
import FilterButtons from "./components/FilterButtons.vue";
import WikipediaCard from "./components/WikipediaCard.vue";
import WikipediaSearchCard from "./components/WikipediaSearchCard.vue";
import AttributionControls from "./components/AttributionControls.vue";
import WikipediaAttributionDemo from "./components/WikipediaAttributionDemo.vue";
import {
  CdxButton,
  CdxField,
  CdxSelect,
  CdxCheckbox,
  CdxTextInput,
  CdxInfoChip,
  CdxThumbnail,
  CdxIcon,
} from "@wikimedia/codex";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card);
    app.component("GridLayout", GridLayout);
    app.component("FilterButtons", FilterButtons);
    app.component("WikipediaCard", WikipediaCard);
    app.component("WikipediaSearchCard", WikipediaSearchCard);
    app.component("AttributionControls", AttributionControls);
    app.component("WikipediaAttributionDemo", WikipediaAttributionDemo);
    app.component("CdxButton", CdxButton);
    app.component("CdxField", CdxField);
    app.component("CdxSelect", CdxSelect);
    app.component("CdxCheckbox", CdxCheckbox);
    app.component("CdxTextInput", CdxTextInput);
    app.component("CdxInfoChip", CdxInfoChip);
    app.component("CdxThumbnail", CdxThumbnail);
    app.component("CdxIcon", CdxIcon);
  },
} satisfies Theme;
