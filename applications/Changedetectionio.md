# Changedetection.io

![Logo](images/Changedetectionio.png)

## Description
Changedetection.io provides free, open\-source web page monitoring, notification and change detection.

## Image
linuxserver/changedetection.io:latest

## Categories
- Uncategorized Services

## Ports
- 5000:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/changedetection.io |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| BASE_URL | BASE_URL | `````` | ```Specify the full URL (including protocol) when running behind a reverse proxy``` |
| PLAYWRIGHT_DRIVER_URL | PLAYWRIGHT_DRIVER_URL | `````` | ```Specify the full URL to your chrome driver instance. See the [wiki](https://github.com/dgtlmoon/changedetection.io/wiki/Playwright-content-fetcher) for details.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.changedetection.io.rule | ```Host(`changedetection.io.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.changedetection.io.entrypoints | ```https``` |
| traefik.http.services.changedetection.io.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.changedetection.io.tls | ```true``` |
| traefik.http.routers.changedetection.io.tls.certresolver | ```default``` |
| traefik.http.routers.changedetection.io.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Changedetection.io``` |
| mafl.description | ```Changedetection.``` |
| mafl.link | ```https://changedetection.io.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/changedetection-icon.png``` |

