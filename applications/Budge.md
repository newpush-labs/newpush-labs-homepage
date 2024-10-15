# Budge

## Description
Budge is an open source 'budgeting with envelopes' personal finance app.

## Image
linuxserver/budge:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/budge |

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
| traefik.http.routers.budge.rule | ```Host(`budge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.budge.entrypoints | ```https``` |
| traefik.http.services.budge.loadbalancer.server.port | ```80``` |
| traefik.http.routers.budge.tls | ```true``` |
| traefik.http.routers.budge.tls.certresolver | ```default``` |
| traefik.http.routers.budge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Budge``` |
| mafl.description | ```Budge is an open source 'budgeting with envelopes' personal finance app.``` |
| mafl.link | ```https://budge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

