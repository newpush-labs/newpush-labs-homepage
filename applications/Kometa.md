# Kometa

![Logo](images/Kometa.png)

## Description
Kometa is a powerful tool designed to give you complete control over your media libraries. With Kometa, you can take your customization to the next level, with granular control over metadata, collections, overlays, and much more.

## Image
linuxserver/kometa:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kometa |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| KOMETA_CONFIG | KOMETA_CONFIG | ```/config/config.yml``` | ```Specify a custom config file to use.``` |
| KOMETA_TIME | KOMETA_TIME | ```03:00``` | ```Comma-separated list of times to update each day. Format: `HH:MM`.``` |
| KOMETA_RUN | KOMETA_RUN | ```False``` | ```Set to `True` to run without the scheduler.``` |
| KOMETA_TEST | KOMETA_TEST | ```False``` | ```Set to `True` to run in debug mode with only collections that have `test: true`.``` |
| KOMETA_NO_MISSING | KOMETA_NO_MISSING | ```False``` | ```Set to `True` to run without any of the missing movie/show functions.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kometa.rule | ```Host(`kometa.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kometa.entrypoints | ```https``` |
| traefik.http.services.kometa.loadbalancer.server.port | ```80``` |
| traefik.http.routers.kometa.tls | ```true``` |
| traefik.http.routers.kometa.tls.certresolver | ```default``` |
| traefik.http.routers.kometa.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kometa``` |
| mafl.description | ```Kometa is a powerful tool designed to give you complete control over your media libraries.``` |
| mafl.link | ```https://kometa.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kometa-banner.png``` |

