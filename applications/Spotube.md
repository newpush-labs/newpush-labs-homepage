# Spotube

![Logo](images/Spotube.png)

## Description
Spotube is an open source, cross\-platform Spotify client compatible across multiple platforms utilizing Spotify's data API and YouTube, Piped.video or JioSaavn as an audio source, eliminating the need for Spotify Premium

## Image
linuxserver/spotube:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/spotube |

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
| traefik.http.routers.spotube.rule | ```Host(`spotube.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.spotube.entrypoints | ```https``` |
| traefik.http.services.spotube.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.spotube.tls | ```true``` |
| traefik.http.routers.spotube.tls.certresolver | ```default``` |
| traefik.http.routers.spotube.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Spotube``` |
| mafl.description | ```Spotube is an open source, cross-platform Spotify client compatible across multiple platforms utilizing Spotify's data API and YouTube, Piped.``` |
| mafl.link | ```https://spotube.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/spotube-logo.png``` |

