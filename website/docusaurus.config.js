module.exports = {
  title: 'GraphQL Config',
  tagline: 'One configuration for all your GraphQL tools',

  url: 'https://graphql-config.com',
  baseUrl: '/',
  favicon: 'img/logo.ico',

  organizationName: 'kamilkisiela',
  projectName: 'graphql-config',

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: false,
    image: 'img/logo.png',
    navbar: {
      title: 'GraphQL Config',
      logo: {
        alt: 'GraphQL Config Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/introduction',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://github.com/kamilkisiela/graphql-config',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} The Guild. All rights reserved.`,
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'introduction',
            },
            {
              label: 'Developer Guide',
              to: 'load-config',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xud7bH9',
            },
            {
              label: 'Other projects',
              href: 'https://github.com/the-guild-org/Stack',
            },
            {
              label: 'Mailing List',
              href: 'https://upscri.be/19qjhi',
            },
            {
              label: 'Community Meetings',
              href: 'https://github.com/the-guild-org/community-meetings',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/the-guild',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kamilkisiela/graphql-config',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kamilkisiela',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/the-guild-software',
            },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-125180910-4',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  scripts: ['/js/light-mode-by-default.js', '/js/legacy.js', 'https://the-guild.dev/static/crisp.js'],
  presets: [
    [
      require.resolve('@docusaurus/preset-classic'),
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          include: ['**/*.md', '**/*.mdx'],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kamilkisiela/graphql-config/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
};
