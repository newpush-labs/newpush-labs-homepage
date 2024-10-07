import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NewPush Labs",
  description: "Experience the trending tech stacks with ease",
  base: '/newpush-labs-homepage/',
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
    logo: '/assets/images/np_labs_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Tailscale Exit Node in GCP', link: '/guides/tailscale-exit-node-in-gcp' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    public: {
      site: {
        base: '/newpush-labs-homepage/',
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/newpush-labs/newpush-labs' }
    ]
  }
})
