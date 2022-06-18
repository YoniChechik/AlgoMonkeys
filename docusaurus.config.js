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
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  // end use math notations

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,

        logo: {
          alt: "AlgoMonkeys Logo",
          src: "img/logo_light.svg",
        },
        items: [
          {
            type: "doc",
            docId: "course_intro",
            position: "left",
            label: "Our Computer Vision Course",
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
                to: "/",
              },
              {
                label: "Our Computer Vision Course",
                to: "/docs/course_intro",
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
};

module.exports = config;
