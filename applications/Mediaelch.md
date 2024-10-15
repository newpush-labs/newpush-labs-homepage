# Mediaelch

![Logo](images/Mediaelch.png)

## Description
MediaElch is a MediaManager for Kodi. Information about Movies, TV Shows, Concerts and Music are stored as nfo files. Fanarts are downloaded automatically from fanart.tv. Using the nfo generator, MediaElch can be used with other MediaCenters as well.

## Image
linuxserver/mediaelch:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mediaelch |

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
| traefik.http.routers.mediaelch.rule | ```Host(`mediaelch.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mediaelch.entrypoints | ```https``` |
| traefik.http.services.mediaelch.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.mediaelch.tls | ```true``` |
| traefik.http.routers.mediaelch.tls.certresolver | ```default``` |
| traefik.http.routers.mediaelch.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mediaelch``` |
| mafl.description | ```MediaElch is a MediaManager for Kodi.``` |
| mafl.link | ```https://mediaelch.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mediaelch-logo.png``` |

