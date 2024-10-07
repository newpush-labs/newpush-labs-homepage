import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NewPush Labs",
  description: "Experience the trending tech stacks with ease",
  base: '/newpush-labs-homepage/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
      // { text: 'Learn More', link: '/learn-more' },
      // { text: 'Get Started', link: '/get-started' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
