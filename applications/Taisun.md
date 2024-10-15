# Taisun

![Logo](images/Taisun.png)

## Description
Taisun is an application for a Docker enabled device with an emphasis on providing a web based interface for managing a single server. Taisun allows you to: \- Deploy and manage web based virtual desktops. \- Deploy Taisun specific stacks of applications \- Browse available images on popular Docker repositories \- Import a Docker project from any git repository and start developing on your choice of web based IDE or full Linux desktop \- Spinup a developer container based on popular frameworks and work from a web based IDE \- Single click remote server access to Taisun and your Docker applications

## Image
linuxserver/taisun:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.taisun.rule | ```Host(`taisun.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.taisun.entrypoints | ```https``` |
| traefik.http.services.taisun.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.taisun.tls | ```true``` |
| traefik.http.routers.taisun.tls.certresolver | ```default``` |
| traefik.http.routers.taisun.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Taisun``` |
| mafl.description | ```Taisun is an application for a Docker enabled device with an emphasis on providing a web based interface for managing a single server.``` |
| mafl.link | ```https://taisun.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Taisun-Docker/taisun/master/public/favicon/apple-icon-180x180.png``` |

