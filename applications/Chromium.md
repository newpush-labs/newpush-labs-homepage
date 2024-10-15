# Chromium

![Logo](images/Chromium.png)

## Description
Chromium is an open\-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web.

## Image
linuxserver/chromium:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/chromium |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| CHROME_CLI | CHROME_CLI | ```https://www.linuxserver.io/``` | ```Specify one or multiple Chromium CLI flags, this string will be passed to the application in full.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.chromium.rule | ```Host(`chromium.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.chromium.entrypoints | ```https``` |
| traefik.http.services.chromium.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.chromium.tls | ```true``` |
| traefik.http.routers.chromium.tls.certresolver | ```default``` |
| traefik.http.routers.chromium.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Chromium``` |
| mafl.description | ```Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web.``` |
| mafl.link | ```https://chromium.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/chromium-logo.png``` |

