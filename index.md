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
      link: /get-started
    - theme: alt
      text: Learn More
      link: /learn-more


features:
  - title: Single Sign-On (SSO)
    details: Out of the box SSO integration with Casdoor for a unified login experience.
    icon: 
      src: /images/apps/casbin.svg

  - title: Ingress Controller
    details: Traefik on steroids, with https provisioning and authentication middleware.
    icon:
      src: /images/apps/traefik_proxy.svg

  - title: Monitoring
    details: Monitor and visualize your lab environment's performance and metrics with built-in Grafana dashboards and Loki for log aggregation and analysis.
    icon:
      src: /images/apps/grafana.svg

  - title: Application Templates
    details: Utilize pre-configured Portainer templates to quickly deploy and manage containerized applications.
    icon:
      src: /images/apps/portainer.svg

  - title: Slick web UI
    details: Easily launch and manage your lab environment through an intuitive web interface.
    icon:
      src: /images/apps/mafl.svg

  - title: Web-Based Terminal
    details: Access your lab environment securely via a web-based terminal for SSH.
    icon:
      src: /images/apps/xtermjs.png

  - title: Modular and Extensible
    details: Customize and extend the lab environment to suit your specific needs.
    icon:
      src: /images/apps/dockge.svg

  - title: Under the Hood
    details: Define and manage your lab environment using Ansible and ensuring consistency, reproducibility, and scalability.
    icon:
      src: /images/apps/ansible.svg

---
