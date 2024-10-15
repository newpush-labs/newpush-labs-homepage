# Yq

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/yq for details.

## Image
linuxserver/yq:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/yq |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.yq.rule | ```Host(`yq.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.yq.entrypoints | ```https``` |
| traefik.http.services.yq.loadbalancer.server.port | ```80``` |
| traefik.http.routers.yq.tls | ```true``` |
| traefik.http.routers.yq.tls.certresolver | ```default``` |
| traefik.http.routers.yq.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Yq``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://yq.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

