---
order: 2
---

# Lab Specific Docker Labels

Several components of the lab are aware of Docker labels. For instance, you can configure the ingress controller (Traefik) using these labels, as it has been set up this way in Traefik. Additionally, when you install application templates from our repository in Portainer, these fields will be automatically populated.

## Traefik Labels

Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy. By using Traefik labels, you can configure how Traefik interacts with your Docker containers. These labels allow you to define routing rules, middleware, and other settings directly within your Docker Compose files.

### Example Traefik Labels

```docker
labels:
    - "traefik.enable=true"
    - "traefik.http.routers.webssh.rule=Host(`sshwifty.${DOMAIN}`)"
    - "traefik.http.routers.webssh.entrypoints=https"
    - "traefik.http.services.webssh.loadbalancer.server.port=8182"
    - "traefik.http.routers.webssh.service=webssh"
    - "traefik.http.routers.webssh.tls=true"
    - "traefik.http.routers.webssh.tls.certresolver=default"
    - "traefik.http.routers.webssh.middlewares=traefik-forward-auth"
```

## Mafl Labels

Mafl serves as the web UI for the lab environment. A dedicated container continuously polls for labels and updates the dashboard to display relevant icons.

### Example Mafl Labels

```docker
labels:
    - "mafl.enable=true"
    - "mafl.title=Sshwifty"
    - "mafl.description=Web based SSH client"
    - "mafl.tag=docker"
    - "mafl.group=Cloud"
    - "mafl.link=https://sshwifty.${DOMAIN}"
    - "mafl.icon.name=bi:terminal"
    - "mafl.icon.wrap=true"
    - "mafl.icon.color=#007acc"
    - "mafl.status.enabled=true"
    - "mafl.status.interval=60"
```

These labels are parsed by [mafl-service-discovery](https://github.com/newpush-labs/mafl-service-discovery) container.

## Watchtower Labels

Watchtower is a process for automating Docker container base image updates. By using Watchtower labels, you can control how Watchtower monitors and updates your Docker containers. These labels allow you to enable or disable Watchtower for specific containers and configure update intervals.

### Example Watchtower Labels

```docker
labels:
    - "com.centurylinklabs.watchtower.enable"
```