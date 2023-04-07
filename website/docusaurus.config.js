// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const theme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "catchphrase",
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "catchphrase",
        logo: {
          alt: "catchphrase Logo",
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} André Lichtenthäler. Built with Docusaurus.`,
      },
      prism: {
        theme,
        darkTheme: theme,
      },
    }),
};

module.exports = config;
