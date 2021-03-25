module.exports = {
  title: 'ActiveWorkflow Documentation',
  tagline: 'Turn complex requirements to workflows without leaving the comfort of your technology stack',
  url: 'https://docs.activeworkflow.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'raspberry-lef', // Usually your GitHub org/user name.
  projectName: 'raspberry-lef.github.io', // Usually your repo name.
  themeConfig: {
    image: 'img/AW_preview.png',
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
    algolia: {
      apiKey: '0b048d550c237f1098bcba9c82def19a',
      indexName: 'activeworkflow',
    },
    prism: {
      additionalLanguages: ['ruby'],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Automatic Mode Labs Logo',
        src: 'img/AML-logo.svg',
        href: 'https://www.automaticmode.com',
      },
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
          showReadingTime: false,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          feedOptions: {
            type: null
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
