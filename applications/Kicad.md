# Kicad

![Logo](images/Kicad.png)

## Description
KiCad \- A Cross Platform and Open Source Electronics Design Automation Suite.

## Image
linuxserver/kicad:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kicad |

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
| traefik.http.routers.kicad.rule | ```Host(`kicad.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kicad.entrypoints | ```https``` |
| traefik.http.services.kicad.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.kicad.tls | ```true``` |
| traefik.http.routers.kicad.tls.certresolver | ```default``` |
| traefik.http.routers.kicad.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kicad``` |
| mafl.description | ```KiCad - A Cross Platform and Open Source Electronics Design Automation Suite.``` |
| mafl.link | ```https://kicad.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kicad-logo.png``` |

