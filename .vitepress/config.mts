import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "NewPush Labs",
  description: "Experience the trending tech stacks with ease",
  base: '/',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/images/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/images/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/images/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/np_labs_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Applications', link: '/applications/' },
    ],
    public: {
      site: {
        base: '/',
      }
    },
    outline: {
      level: [2, 6]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/newpush-labs/newpush-labs' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/newpush/' },
    ],
    search: {
      provider: 'local' 
    },
    footer: {
      message: 'Licensed under the MIT License. Free for all use cases. For enterprise or academic support, please reach out to us.',
      copyright: 'Copyright © 2024 - newpush labs - All rights reserved.'
    },
    editLink: {
      pattern: 'https://github.com/newpush-labs/newpush-labs-homepage/edit/main/:path',
      text: 'Edit this page on GitHub'
    }, 

    sidebar: generateSidebar([
      {
        documentRootPath: '.',
        scanStartPath: 'guides',
        basePath: '/guides/',
        resolvePath: '/guides/',
        useTitleFromFileHeading: true,
        underscoreToSpace: true,
        capitalizeFirst: true,
        useFolderTitleFromIndexFile: true,
        excludeFiles: ['do-not-include.md'],
        sortMenusByFrontmatterOrder: true,
        useTitleFromFrontmatter: true
      },
      {
        documentRootPath: '.',
        scanStartPath: 'reference',
        resolvePath: '/reference/',
        // useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useTitleFromFileHeading: true,
        underscoreToSpace: true,
        capitalizeFirst: true,
        sortMenusByFrontmatterOrder: true,
        useTitleFromFrontmatter: true

      },
      {
        documentRootPath: '.',
        scanStartPath: 'applications',
        resolvePath: '/applications/',
        // useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useTitleFromFileHeading: true,
        underscoreToSpace: true,
        capitalizeFirst: true,
        sortMenusByFrontmatterOrder: true,
        useTitleFromFrontmatter: true

      }
    ]),

  }
})
