# Series-troxide

![Logo](images/Seriestroxide.png)

## Description
Series Troxide a Simple and Modern Series Tracker

## Image
linuxserver/series-troxide:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/series-troxide |

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
| traefik.http.routers.series-troxide.rule | ```Host(`series-troxide.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.series-troxide.entrypoints | ```https``` |
| traefik.http.services.series-troxide.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.series-troxide.tls | ```true``` |
| traefik.http.routers.series-troxide.tls.certresolver | ```default``` |
| traefik.http.routers.series-troxide.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Series-troxide``` |
| mafl.description | ```Series Troxide a Simple and Modern Series Tracker``` |
| mafl.link | ```https://series-troxide.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/series-troxide-logo.png``` |

