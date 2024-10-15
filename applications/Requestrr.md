# Requestrr

![Logo](images/Requestrr.png)

## Description
Requestrr is a chatbot used to simplify using services like Sonarr/Radarr/Ombi via the use of chat.

## Image
linuxserver/requestrr:latest

## Categories
- Media

## Ports
- 4545:4545/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/requestrr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```America/Chicago``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.requestrr.rule | ```Host(`requestrr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.requestrr.entrypoints | ```https``` |
| traefik.http.services.requestrr.loadbalancer.server.port | ```4545``` |
| traefik.http.routers.requestrr.tls | ```true``` |
| traefik.http.routers.requestrr.tls.certresolver | ```default``` |
| traefik.http.routers.requestrr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Requestrr``` |
| mafl.description | ```Requestrr is a chatbot used to simplify using services like Sonarr/Radarr/Ombi via the use of chat.``` |
| mafl.link | ```https://requestrr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Media``` |
| mafl.icon.url | ```https://github.com/darkalfx/requestrr/raw/master/Logos/requestrr_discord_Icon_512.png``` |

