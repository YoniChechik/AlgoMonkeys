// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// use math notations
const math = require("remark-math");
const katex = require("rehype-katex");
// end use math notations

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AlgoMonkeys",
  tagline: "Your Algo Team for Hire!",
  url: "https://www.algomonkeys.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "YoniChechik", // Usually your GitHub org/user name.
  projectName: "AlgoMonkeys", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

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
          // use math notations
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // end use math notations
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-P51BLZP1H4",
        },
      }),
    ],
  ],
  // use math notations
  stylesheets: [
    {
      // self hosting katex to avoid render block.
      // katex version is 0.16.0. from: https://github.com/KaTeX/KaTeX/releases/tag/v0.16.0
      // from: https://docusaurus.io/docs/markdown-features/math-equations#self-hosting-katex-assets
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  // end use math notations

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      //The meta image URL for the site. Relative to your site's "static" directory. Cannot be SVGs. Can be external URLs too.
      image: "img/meta_logo.png",
      metadata: [
        { name: "keywords", content: "computer vision, neural networks, algorithms, freelance, consulting, lecture" },
      ],
      navbar: {
        hideOnScroll: true,

        logo: {
          alt: "AlgoMonkeys Logo",
          src: "img/algomonkeys_logo.svg",
          width: "100%",
          height: "100%",
        },
        items: [
          {
            to: "/#contact_us",
            position: "left",
            label: "Contact Us",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Learn Computer Vision",
          },
        ],
      },
      footer: {
        // logo: {
        //   alt: "AlgoMonkeys Logo",
        //   src: "img/logo_light.svg",
        // },
        links: [
          {
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Contact Us",
                to: "/#contact_us",
              },
              {
                label: "Learn Computer Vision",
                to: "/docs/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AlgoMonkeys LTD.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        sizes: [100, 200, 400, 800, 1200, 1600],
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        // debug: true,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/manifest_icons/icon-512x512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(222, 23, 126)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "img/manifest_icons/icon-512x512.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "img/manifest_icons/icon-512x512.png",
            color: "rgb(222, 23, 126)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "img/manifest_icons/icon-512x512.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
