# Calligra

![Logo](images/Calligra.png)

## Description
Calligra is an office and graphic art suite by KDE. It is available for desktop PCs, tablet computers, and smartphones. It contains applications for word processing, spreadsheets, presentation, vector graphics, and editing databases.

## Image
linuxserver/calligra:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/calligra |

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
| traefik.http.routers.calligra.rule | ```Host(`calligra.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.calligra.entrypoints | ```https``` |
| traefik.http.services.calligra.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.calligra.tls | ```true``` |
| traefik.http.routers.calligra.tls.certresolver | ```default``` |
| traefik.http.routers.calligra.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Calligra``` |
| mafl.description | ```Calligra is an office and graphic art suite by KDE.``` |
| mafl.link | ```https://calligra.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/calligra-logo.png``` |

