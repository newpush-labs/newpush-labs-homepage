# yacht

![Logo](images/yacht.png)

## Description
A web interface for managing docker containers with an emphasis on templating to provide 1 click deployments. Think of it like a decentralized app store for servers that anyone can make packages for.

## Image
selfhostedpro/yacht:latest

## Categories
- Dashboardserver

## Ports
- 8001:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | yacht |
| /var/run/docker.sock | /var/run/docker.sock |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.yacht.rule | ```Host(`yacht.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.yacht.entrypoints | ```https``` |
| traefik.http.services.yacht.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.yacht.tls | ```true``` |
| traefik.http.routers.yacht.tls.certresolver | ```default``` |
| traefik.http.routers.yacht.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Yacht``` |
| mafl.description | ```A web interface for managing docker containers with an emphasis on templating to provide 1 click deployments.``` |
| mafl.link | ```https://yacht.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/SelfhostedPro/Yacht/master/readme_media/Yacht_logo_1_dark.png``` |

