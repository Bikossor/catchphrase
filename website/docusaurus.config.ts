import { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

export default {
  title: "Catchphrase",
  tagline: "Functional internationalization library for the web",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://catchphrase.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Catchphrase",
      logo: {
        alt: "Catchphrase Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://www.npmjs.com/org/catchphrase",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/Bikossor/catchphrase",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
            {
              label: "Examples",
              href: "https://github.com/Bikossor/catchphrase/tree/main/examples",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/catchphrase",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Bikossor/catchphrase",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/org/catchphrase",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} André Lichtenthäler. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.vsDark,
      darkTheme: themes.vsDark,
    },
  },
} satisfies Config;
