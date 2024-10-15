# Xbackbone

![Logo](images/Xbackbone.png)

## Description
Xbackbone is a simple, self\-hosted, lightweight PHP file manager that support the instant sharing tool ShareX and \*NIX systems. It supports uploading and displaying images, GIF, video, code, formatted text, and file downloading and uploading. Also have a web UI with multi user management, past uploads history and search support.

## Image
linuxserver/xbackbone:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/xbackbone |

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
| traefik.http.routers.xbackbone.rule | ```Host(`xbackbone.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.xbackbone.entrypoints | ```https``` |
| traefik.http.services.xbackbone.loadbalancer.server.port | ```80``` |
| traefik.http.routers.xbackbone.tls | ```true``` |
| traefik.http.routers.xbackbone.tls.certresolver | ```default``` |
| traefik.http.routers.xbackbone.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Xbackbone``` |
| mafl.description | ```Xbackbone is a simple, self-hosted, lightweight PHP file manager that support the instant sharing tool ShareX and *NIX systems.``` |
| mafl.link | ```https://xbackbone.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/SergiX44/XBackBone/master/docs/img/xbackbone.png``` |

