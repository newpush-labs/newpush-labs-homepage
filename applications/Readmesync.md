# Readme-sync

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/readme\-sync for details.

## Image
linuxserver/readme-sync:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/readme-sync |

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
| traefik.http.routers.readme-sync.rule | ```Host(`readme-sync.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.readme-sync.entrypoints | ```https``` |
| traefik.http.services.readme-sync.loadbalancer.server.port | ```80``` |
| traefik.http.routers.readme-sync.tls | ```true``` |
| traefik.http.routers.readme-sync.tls.certresolver | ```default``` |
| traefik.http.routers.readme-sync.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Readme-sync``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://readme-sync.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

