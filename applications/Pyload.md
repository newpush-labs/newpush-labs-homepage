# Pyload

![Logo](images/Pyload.png)

## Description
Pyload is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.

## Image
linuxserver/pyload:latest

## Categories
- Uncategorized Services

## Ports
- 8000:8000/tcp
- 7227:7227/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pyload/config |
| /downloads | /opt/appdata/pyload/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pyload.rule | ```Host(`pyload.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pyload.entrypoints | ```https``` |
| traefik.http.services.pyload.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.pyload.tls | ```true``` |
| traefik.http.routers.pyload.tls.certresolver | ```default``` |
| traefik.http.routers.pyload.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pyload``` |
| mafl.description | ```Pyload is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.``` |
| mafl.link | ```https://pyload.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pyload-icon.png``` |

