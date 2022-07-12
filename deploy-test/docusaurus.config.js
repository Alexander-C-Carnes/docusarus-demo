// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'using-single-yaml',
        spec: 'openapi/single-file/openapi.yaml',
        route: '/examples/using-single-yaml/',
      },
      {
        id: 'using-multi-file-yaml',
        spec: 'openapi/multi-file/openapi.yaml',
        route: '/examples/using-multi-file-yaml/',
      },
      {
        id: 'using-swagger-json',
        spec: 'openapi/swagger/swagger.json',
        route: '/examples/using-swagger-json/',
      },
      {
        id: 'using-remote-url',
        // Remote File
        spec: 'https://redocly.github.io/redoc/openapi.yaml',
        route: '/examples/using-remote-url/',
      },
      {
        id: 'using-custom-page',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-page/index.jsx')
      },
      {
        id: 'using-custom-layout',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
      {
        id: 'using-xvp-docs',
        spec: 'openapi/xvp-api/xvp.json',
        route: '/examples/using-xvp-docs/',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#1890ff',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RDK Central Test Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://github.com/Alexander-C-Carnes/dousarus-demo',
  baseUrl: '/dousarus-demo/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alexander-C-Carnes', // Usually your GitHub org/user name.
  projectName: 'dousarus-demo', // Usually your repo name.
  deploymentBranch: 'deployment-branch',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        systemvars: true
      }
    ],

  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/Alexander-C-Carnes/dousarus-demo/edit/main/website/${versionDocsDirPath}/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // Redocusaurus Config
    redocusaurus,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RDK Central Firebolt',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
          type: 'docsVersionDropdown',
          position: 'right',
          to: '/path',
          label: 'label',
        },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'fireboltDocs',
            label: 'Firebolt Documentation',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'Firebolt API',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'xvp',
            label: 'XVP Documentation',
          },
          {
            position: 'right',
            to: 'signup_page',
            label: 'Login',
          },
          {
            href: 'https://github.com/Alexander-C-Carnes/dousarus-demo',
            label: 'GitHub',
            position: 'right',
          },
              {
            label: 'API Examples',
            position: 'left',
            items: [
              {
                label: 'All',
                to: '/examples',
              },
              {
                label: 'XVP Example',
                to: '/examples/using-xvp-docs/',
              },
              {
                label: 'Using Single YAML',
                to: '/examples/using-single-yaml/',
              },
              {
                label: 'Using Remote URL',
                to: '/examples/using-remote-url/',
              },
              {
                label: 'Using Multiple YAMLs',
                to: '/examples/using-multi-file-yaml/',
              },
              {
                label: 'Using Swagger',
                to: '/examples/using-swagger-json/',
              },
              {
                label: 'Custom Page',
                to: '/examples/custom-page/',
              },
              {
                label: 'Custom Layout',
                to: '/examples/custom-layout/',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Alexander-C-Carnes/dousarus-demo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
