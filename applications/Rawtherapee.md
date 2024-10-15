# Rawtherapee

![Logo](images/Rawtherapee.png)

## Description
RawTherapee is a free, cross\-platform raw image processing program!

## Image
linuxserver/rawtherapee:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/rawtherapee |

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
| traefik.http.routers.rawtherapee.rule | ```Host(`rawtherapee.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.rawtherapee.entrypoints | ```https``` |
| traefik.http.services.rawtherapee.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.rawtherapee.tls | ```true``` |
| traefik.http.routers.rawtherapee.tls.certresolver | ```default``` |
| traefik.http.routers.rawtherapee.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Rawtherapee``` |
| mafl.description | ```RawTherapee is a free, cross-platform raw image processing program!``` |
| mafl.link | ```https://rawtherapee.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rawtherapee-logo.png``` |

