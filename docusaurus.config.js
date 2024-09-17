// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// use math notations
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// end use math notations

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AlgoMonkeys",
  tagline: "Your Algo Team for Hire!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.algomonkeys.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "YoniChechik", // Usually your GitHub org/user name.
  projectName: "AlgoMonkeys", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // use math notations
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // end use math notations
        },
        theme: {
          customCss: './src/css/custom.css',
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
      image: "img/meta_image.jpg",
      metadata: [
        { name: "keywords", content: "computer vision, neural networks, algorithms, freelance, consulting, lecture" },
      ],
      navbar: {
        hideOnScroll: true,

        logo: {
          alt: "AlgoMonkeys Logo",
          src: "img/algomonkeys_logo.svg",
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
              {
                label: "Accessibility",
                to: "/accessibility",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AlgoMonkeys LTD.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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

export default config;
