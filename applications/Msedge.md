# Msedge

![Logo](images/Msedge.png)

## Description
Microsoft Edge is a cross\-platform web browser developed by Microsoft and based on Chromium.

## Image
linuxserver/msedge:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/msedge |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| EDGE_CLI | EDGE_CLI | ```https://www.linuxserver.io/``` | ```Specify one or multiple Chromium CLI flags, this string will be passed to the application in full.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.msedge.rule | ```Host(`msedge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.msedge.entrypoints | ```https``` |
| traefik.http.services.msedge.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.msedge.tls | ```true``` |
| traefik.http.routers.msedge.tls.certresolver | ```default``` |
| traefik.http.routers.msedge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Msedge``` |
| mafl.description | ```Microsoft Edge is a cross-platform web browser developed by Microsoft and based on Chromium.``` |
| mafl.link | ```https://msedge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/edge-logo.png``` |

