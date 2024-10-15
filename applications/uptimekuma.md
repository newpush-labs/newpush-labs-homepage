# uptime-kuma

![Logo](images/uptimekuma.png)

## Description
It is a self\-hosted monitoring tool like Uptime Robot

## Image
louislam/uptime-kuma:latest

## Categories
- Taskserver

## Ports
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/uptimekuma |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.uptime-kuma.rule | ```Host(`uptime-kuma.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.uptime-kuma.entrypoints | ```https``` |
| traefik.http.services.uptime-kuma.loadbalancer.server.port | ```3001``` |
| traefik.http.routers.uptime-kuma.tls | ```true``` |
| traefik.http.routers.uptime-kuma.tls.certresolver | ```default``` |
| traefik.http.routers.uptime-kuma.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Uptime Kuma``` |
| mafl.description | ```It is a self-hosted monitoring tool like Uptime Robot``` |
| mafl.link | ```https://uptime-kuma.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://images.opencollective.com/uptime-kuma/29c5113/logo/256.png``` |

