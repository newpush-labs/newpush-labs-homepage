# n8n

![Logo](images/n8n.png)

## Description
n8n allows you to build flexible workflows focused on deep data integration.

## Image
docker.n8n.io/n8nio/n8n:latest

## Categories
- Networkother
- Tools

## Ports
- 5678/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /home/node/.n8n | /opt/appdata/n8n |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| GENERIC_TIMEZONE | GENERIC_TIMEZONE | ```America/Los_Angeles``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.n8n.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.n8n.entrypoints | ```https``` |
| traefik.http.routers.n8n.tls.certresolver | ```default``` |
| traefik.http.routers.n8n.rule | ```Host(`n8n.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.n8n.tls | ```true``` |
| traefik.http.routers.n8n.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```n8n``` |
| mafl.description | ```n8n allows you to build flexible workflows focused on deep data integration.``` |
| mafl.link | ```https://n8n.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Networkother``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/n8n.png``` |

