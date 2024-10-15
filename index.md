---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "newpush® labs"
  text: "Experience, test, and learn the trending tech stacks with ease"
  tagline: Discover the future of technology
  image:
    src: /images/labs_transparent.png
    alt: newpush labs
  actions:
    - theme: brand
      text: Get Started
      link: /guides/get-started
    - theme: alt
      text: View Our Pitch Deck
      link: https://newpush-labs.github.io/newpush-labs-pitchdeck/1
    - theme: alt
      text: Learn More
      link: /learn-more

features:
  - title: Single Sign-On (SSO)
    details: Out of the box SSO integration with Casdoor for a unified login experience.
    icon: 
      src: /images/apps/casbin.svg
    link: /reference/components/casdoor.html
    linkText: Your own identity provider

  - title: Ingress Controller
    details: Traefik on steroids, with SSL certificate provisioning and authentication middleware with a bunch of goodies.
    icon:
      src: /images/apps/traefik_proxy.svg
    link: /reference/components/ingress-controller.html
    linkText: View traefik configuration

  - title: Monitoring
    details: Monitor and visualize your lab environment's performance and metrics with built-in Grafana dashboards and Loki for log aggregation and analysis.
    icon:
      src: /images/apps/grafana.svg
    link: /reference/components/monitoring.html
    linkText: Understand your metrics

  - title: Application Templates
    details: Utilize pre-configured Portainer templates to quickly deploy and manage containerized applications.
    icon:
      src: /images/apps/portainer.svg
    link: /reference/components/application-templates.html
    linkText: Browse the applications

  - title: Slick web UI
    details: Easily launch and manage your lab environment through an intuitive web interface even on your mobile.
    icon:
      src: /images/apps/mafl.svg
    link: /reference/components/web-ui.html
    linkText: Launch your apps instantly

  - title: Web-Based Terminal
    details: Access your lab environment securely via a web-based terminal for SSH.
    icon:
      src: /images/apps/xtermjs.png
    link: /reference/components/web-terminal.html
    linkText: Access servers sshwiftly 
    
  - title: Modular and Extensible
    details: Customize and extend the lab environment to suit your specific needs.
    icon:
      src: /images/apps/dockge.svg
    link: /reference/components/lab-stacks.html
    linkText: Extend your lab with stacks

  - title: Under the Hood
    details: Define and manage your lab environment using Ansible and ensuring consistency, reproducibility, and scalability.
    icon:
      src: /images/apps/ansible.svg
    link: /reference/components/infrastructure-as-code.html
    linkText: Learn about provisioning
---

##  Welcome to newpush labs 
Newpush labs offers an out-of-the-box solution that lets you effortlessly explore trending open-source stacks without the hassle of configuring self-hosted versions of the latest tools. Our lab environment is built for production readiness, allowing you to practice and hone your skills in a secure and controlled setting.
