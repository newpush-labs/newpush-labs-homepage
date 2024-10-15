# Opera

![Logo](images/Opera.png)

## Description
Opera is a multi\-platform web browser developed by its namesake company Opera. The browser is based on Chromium, but distinguishes itself from other Chromium\-based browsers (Chrome, Edge, etc.) through its user interface and other features.

## Image
linuxserver/opera:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/opera |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| OPERA_CLI | OPERA_CLI | ```https://www.linuxserver.io/``` | ```Specify one or multiple Chromium CLI flags, this string will be passed to the application in full.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.opera.rule | ```Host(`opera.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.opera.entrypoints | ```https``` |
| traefik.http.services.opera.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.opera.tls | ```true``` |
| traefik.http.routers.opera.tls.certresolver | ```default``` |
| traefik.http.routers.opera.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Opera``` |
| mafl.description | ```Opera is a multi-platform web browser developed by its namesake company Opera.``` |
| mafl.link | ```https://opera.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/opera-icon.png``` |

