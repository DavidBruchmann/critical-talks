// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const path = require('path');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Critical Talks',
  tagline: 'Dark Patterns of Systemic Control: Internal and External Imperialism',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://davidbruchmann.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/critical-talks/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'David Bruchmann', // Usually your GitHub org/user name.
  projectName: 'critical-talks', // Usually your repo name.

  onBrokenLinks: 'warn',
  baseUrlIssueBanner: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    //format: 'mdx',
    mermaid: true,
    //emoji: true,
  },
  /*
  plugins: [
    ['@docusaurus/plugin-content-docs', {id: 'dossiers', path: '/dossiers'}],
  ],
  */
  presets: [
    [
      /*
      './src/presets/preset-dossiers.js',
      ({
        dossiers: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/DavidBruchmann/critical-talk/issues/',
          blog: false,
          theme: {
            customCss: './src/css/custom.css',
          },
        }
      }),
      */
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: path.resolve(__dirname, 'dossiers'),
          routeBasePath: 'dossiers',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/DavidBruchmann/critical-talk/issues/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Critical Talks',
        logo: {
          alt: '',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'dossiers',
            label: 'Dossiers',
            position: 'left'
          },
          /*
          {
            type: 'docSidebar',
            sidebarId: 'criticalTalksSidebar',
            position: 'left',
            label: 'Dossiers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*
          {
            title: 'Dossiers',
            items: [
              {
                label: 'Dossiers',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          */
          {
            title: 'More',
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'GitHub',
                href: 'https://github.com/DavidBruchmann/critical-talks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
};

export default config;
