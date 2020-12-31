module.exports = {
  title: 'ActiveWorkflow Documentation',
  tagline: 'Turn complex requirements to workflows without leaving the comfort of your technology stack',
  url: 'https://raspberry-lef.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'raspberry-lef', // Usually your GitHub org/user name.
  projectName: 'raspberry-lef.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ActiveWorkflow Documentation',
      logo: {
        alt: 'ActiveWorkflow Logo',
        src: 'img/AW-logo.svg',
      },
      items: [
        // {
        //   to: '/',
        //   activeBasePath: 'docs',
        //   label: 'Documentation',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Documentation Blog', position: 'left'},
        {
          href: 'https://github.com/automaticmode/active_workflow',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/activeworkflow',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/activeworkflow',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/automaticmode/activeworkflow',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} Automatic Mode Labs AG`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};