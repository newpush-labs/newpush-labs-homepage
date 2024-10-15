# Unrar

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/unrar for details.

## Image
linuxserver/unrar:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/unrar |

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
| traefik.http.routers.unrar.rule | ```Host(`unrar.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.unrar.entrypoints | ```https``` |
| traefik.http.services.unrar.loadbalancer.server.port | ```80``` |
| traefik.http.routers.unrar.tls | ```true``` |
| traefik.http.routers.unrar.tls.certresolver | ```default``` |
| traefik.http.routers.unrar.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Unrar``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://unrar.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

