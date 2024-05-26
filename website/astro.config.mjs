import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://catchphrase.dev",
  scopedStyleStrategy: "where",
  integrations: [
    starlight({
      title: "Catchphrase",
      description: "Next-gen translation library for the web.",
      editLink: {
        baseUrl: "https://github.com/Bikossor/catchphrase",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Catchphrase",
      },
      favicon: "./public/favicon.svg",
      social: {
        github: "https://github.com/Bikossor/catchphrase",
        stackOverflow: "https://stackoverflow.com/questions/tagged/catchphrase",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "/intro",
        },
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api" },
          collapsed: true,
        },
      ],
    }),
  ],
});
