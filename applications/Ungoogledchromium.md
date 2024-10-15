# Ungoogled-chromium

![Logo](images/Ungoogledchromium.png)

## Description
Ungoogled Chromium is Google Chromium, sans dependency on Google web services.

## Image
linuxserver/ungoogled-chromium:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ungoogled-chromium |

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
| traefik.http.routers.ungoogled-chromium.rule | ```Host(`ungoogled-chromium.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ungoogled-chromium.entrypoints | ```https``` |
| traefik.http.services.ungoogled-chromium.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.ungoogled-chromium.tls | ```true``` |
| traefik.http.routers.ungoogled-chromium.tls.certresolver | ```default``` |
| traefik.http.routers.ungoogled-chromium.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ungoogled-chromium``` |
| mafl.description | ```Ungoogled Chromium is Google Chromium, sans dependency on Google web services.``` |
| mafl.link | ```https://ungoogled-chromium.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ungoogled-chromium-logo.png``` |

