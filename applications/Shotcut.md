# Shotcut

![Logo](images/Shotcut.png)

## Description
Shotcut is a free, open source, cross\-platform video editor.

## Image
linuxserver/shotcut:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/shotcut |

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
| traefik.http.routers.shotcut.rule | ```Host(`shotcut.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.shotcut.entrypoints | ```https``` |
| traefik.http.services.shotcut.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.shotcut.tls | ```true``` |
| traefik.http.routers.shotcut.tls.certresolver | ```default``` |
| traefik.http.routers.shotcut.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Shotcut``` |
| mafl.description | ```Shotcut is a free, open source, cross-platform video editor.``` |
| mafl.link | ```https://shotcut.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/shotcut-logo.png``` |

