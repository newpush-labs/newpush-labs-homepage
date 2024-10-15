# Pyload-ng

![Logo](images/Pyloadng.png)

## Description
pyLoad is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.

## Image
linuxserver/pyload-ng:latest

## Categories
- Uncategorized Services

## Ports
- 8000:8000/tcp
- 9666:9666/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pyload-ng/config |
| /downloads | /opt/appdata/pyload-ng/downloads |

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
| traefik.http.routers.pyload-ng.rule | ```Host(`pyload-ng.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pyload-ng.entrypoints | ```https``` |
| traefik.http.services.pyload-ng.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.pyload-ng.tls | ```true``` |
| traefik.http.routers.pyload-ng.tls.certresolver | ```default``` |
| traefik.http.routers.pyload-ng.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pyload-ng``` |
| mafl.description | ```pyLoad is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.``` |
| mafl.link | ```https://pyload-ng.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/pyload-logo.png``` |

