// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RDK',
  tagline: 'RDK DOCUMENTATION',
  url: 'https://246c-2600-1700-5130-7b10-3024-8d85-3be4-f540.ngrok.io/',//'https://github.com/Alexander-C-Carnes/docusarus-demo',
  baseUrl:'/', //'/docs/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',
  organizationName: 'Alexander-C-Carnes', // Usually your GitHub org/user name.
  projectName: 'docusarus-demo', // Usually your repo name.
  deploymentBranch: 'deployment-branch',

  staticDirectories:["static", "public"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/Alexander-C-Carnes/docusarus-demo/edit/main/website/${docPath}`,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          exclude: ['**/*.wip'],
          breadcrumbs: true,
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          lastVersion: "current",
          versions: {
            current: {
              label: "v2.x",
              badge: true,
              path: 'latest'
            },
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'wiki',
        path: 'wiki',
        routeBasePath: "wiki",
        editUrl: ({ docPath }) => `https://github.com/Alexander-C-Carnes/docusarus-demo/edit/main/website/${docPath}`,
        editCurrentVersion: true,
        docItemComponent: require.resolve('./src/components/CustomDocItem/CustomDocItemWiki.tsx'),
        // disableVersioning: true,
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebarsWiki.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs:{
        sidebar:{
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'src/img/logo.png',
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rest', 'http', 'haskell', 'plsql', 'docker', 'nginx', 'markdown'],
      },
      
      // announcementBar: {
      //   id: 'announcementBar-3', // Increment on change
      //   content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a> ${TwitterSvg}`,
      // },
      announcementBar: {
        id: 'announcement-bar-3',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexander-C-Carnes/docusarus-demo">Check out the Github</a>',
        backgroundColor: "orange",
        textColor: '#fff',
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'RDK Logo',
          src: '/img/logo.svg',
          srcDark: '/img/logo-light.svg',
          href: 'https://github.com/Alexander-C-Carnes/docusarus-demo'
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                //docId: 'graphql/core/index',
                docId: 'firebolt/getting-started/quick-start-guide',
                label: 'Firebolt Documentation',
              },
              {
                type: 'docSidebar',
                sidebarId: 'cloudDocsSidebar',
                label: 'Firebolt API',
              },
            ],
          },
          {
            to: 'https://hasura.io/products/',
            label: 'Product',
            position: 'left',
          },
          {
            to: 'https://hasura.io/blog/',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'https://hasura.io/learn/',
            label: 'Tutorials',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                href: 'https://hasura.io/docs/1.0/graphql/core/index.html',
                label: 'v1.x',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/hasura/graphql-engine',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            to: 'https://hasura.io/pricing/',
            label: 'Pricing',
            position: 'right',
          },
          {
            to: 'https://cloud.hasura.io/login?pg=docs&plcmt=header&cta=log-in&tech=default',
            label: 'Login',
            position: 'right',
            className: "nav-link_login",
          },
          {
            to: 'https://cloud.hasura.io/signup?pg=products&plcmt=header&cta=try-hasura&tech=default',
            label: 'Get Started',
            position: 'right',
            className: "nav-link_getting-started",
          },
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Hasura',
      //       items: [
      //         {
      //           label: 'About Us',
      //           to: 'https://hasura.io/about/',
      //         },
      //         {
      //           label: 'Press',
      //           to: 'https://hasura.io/press/',
      //         },
      //         {
      //           label: 'Careers',
      //           to: 'https://hasura.io/careers/',
      //         },
      //         {
      //           label: 'Contact Us',
      //           to: 'https://hasura.io/contact-us/',
      //         },
      //         {
      //           label: 'Legal Stuff',
      //           to: 'https://hasura.io/legal/',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Support',
      //       items: [
      //         {
      //           label: 'Documentation',
      //           to: '/latest/graphql/core/index',
      //         },
      //         {
      //           label: 'Community Forum',
      //           to: 'https://discordapp.com/invite/hasura',
      //         },
      //         {
      //           label: 'Help',
      //           to: 'https://hasura.io/help/',
      //         },
      //         {
      //           label: 'Github',
      //           to: 'https://github.com/hasura',
      //         },
      //         {
      //           label: 'Hasura Cloud Status',
      //           to: 'https://status.hasura.io/',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Tools',
      //       items: [
      //         {
      //           label: 'Graphqurl',
      //           to: 'https://github.com/hasura/graphqurl',
      //         },
      //         {
      //           label: 'Firebase2GraphQL',
      //           to: 'https://github.com/hasura/firebase2graphql',
      //         },
      //         {
      //           label: 'JSON2GraphQL',
      //           to: 'https://github.com/hasura/json2graphql',
      //         },
      //         {
      //           label: 'GraphQL2ChartJS',
      //           to: 'https://github.com/hasura/graphql2chartjs',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Product',
      //       items: [
      //         {
      //           label: 'Hasura Open Source',
      //           to: 'https://hasura.io/opensource/',
      //         },
      //         {
      //           label: 'Hasura Cloud',
      //           to: 'https://hasura.io/cloud/',
      //         },
      //         {
      //           label: 'Hasura Enterprise',
      //           to: 'https://hasura.io/enterprise/',
      //         },
      //         {
      //           label: 'Pricing',
      //           to: 'https://hasura.io/pricing/',
      //         },
      //         {
      //           label: 'Changelog',
      //           to: 'https://github.com/hasura/graphql-engine/releases',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Resources',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: 'https://hasura.io/blog/',
      //         },
      //         {
      //           label: 'Case Studies',
      //           to: 'https://hasura.io/case-studies/',
      //         },
      //         {
      //           label: '3Factor Apps',
      //           to: 'https://3factor.app/',
      //         },
      //         {
      //           label: 'Event Driven Programming',
      //           to: 'https://hasura.io/event-driven-programming/',
      //         },
      //         {
      //           label: 'React GraphQL',
      //           to: 'https://hasura.io/react-graphql/',
      //         },
      //         {
      //           label: 'Vue GraphQL',
      //           to: 'https://hasura.io/vue-graphql/',
      //         },
      //         {
      //           label: 'DIY GraphQL BaaS',
      //           to: 'https://hasura.io/diy-graphql-baas/',
      //         },
      //         {
      //           label: 'GraphQL & Hasura',
      //           to: 'https://hasura.io/graphql/',
      //         },
      //         {
      //           label: 'Hasura Cloud Security',
      //           to: 'https://hasura.io/security/',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Community Resources',
      //           to: 'https://hasura.io/community/',
      //         },
      //         {
      //           label: 'GraphQL Tutorials',
      //           to: 'https://hasura.io/learn/',
      //         },
      //         {
      //           label: 'Community Wiki',
      //           to: 'https://github.com/hasura/graphql-engine/wiki',
      //         },
      //         {
      //           label: 'Sample Apps',
      //           to: 'https://hasura.io/sample-apps/',
      //         },
      //         {
      //           label: 'Partnership Program',
      //           to: 'https://hasura.io/partner-agencies/',
      //         },
      //         {
      //           label: 'HasuraCon 2021',
      //           to: 'https://hasura.io/events/hasura-con-2021/',
      //         },
      //         {
      //           label: 'GraphQL Asia',
      //           to: 'https://graphql.asia/',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Hasura Inc. All rights reserved`,
      // },
    }),
};

module.exports = config;
