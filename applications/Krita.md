# Krita

![Logo](images/Krita.png)

## Description
Krita is a professional FREE and open source painting program. It is made by artists that want to see affordable art tools for everyone.

## Image
linuxserver/krita:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/krita |

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
| traefik.http.routers.krita.rule | ```Host(`krita.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.krita.entrypoints | ```https``` |
| traefik.http.services.krita.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.krita.tls | ```true``` |
| traefik.http.routers.krita.tls.certresolver | ```default``` |
| traefik.http.routers.krita.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Krita``` |
| mafl.description | ```Krita is a professional FREE and open source painting program.``` |
| mafl.link | ```https://krita.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/krita-logo.png``` |

