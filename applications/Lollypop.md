# Lollypop

![Logo](images/Lollypop.png)

## Description
Lollypop is a lightweight modern music player designed to work excellently on the GNOME desktop environment.

## Image
linuxserver/lollypop:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/lollypop |

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
| traefik.http.routers.lollypop.rule | ```Host(`lollypop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.lollypop.entrypoints | ```https``` |
| traefik.http.services.lollypop.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.lollypop.tls | ```true``` |
| traefik.http.routers.lollypop.tls.certresolver | ```default``` |
| traefik.http.routers.lollypop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Lollypop``` |
| mafl.description | ```Lollypop is a lightweight modern music player designed to work excellently on the GNOME desktop environment.``` |
| mafl.link | ```https://lollypop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/lollypop-icon.png``` |

