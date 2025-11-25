import { defineConfig } from "vitepress";
import { scenarios, attributionSignals } from "./data";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wikipedia Attribution Guidelines",
  description:
    "Attribution Guidelines for references and using Wikipedia content",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        items: [
          { text: "Overview", link: "/" },
          { text: "Principles and levels", link: "/principles-and-levels" },
        ],
      },
      {
        text: "Reuse Scenarios",
        collapsed: false,
        items: [
          { text: "Overview", link: "/scenarios/overview" },
          ...scenarios.map((scenario) => ({
            text: scenario.name,
            link: scenario.url,
          })),
        ],
      },
      {
        text: "Attribution Signals",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/attribution-signals/overview",
          },
          ...attributionSignals.map((signal) => ({
            text: signal.name,
            link: signal.url,
          })),
        ],
      },
      {
        items: [
          {
            text: "Help",
            link: "/help",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
