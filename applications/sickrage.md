# sickrage

![Logo](images/sickrage.png)

## Description
Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

## Image
linuxserver/sickrage:latest

## Categories
- Downloaders
- Mediaappvideo

## Ports
- 8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/sickrage |
| /downloads | /opt/appdata/downloads/tvshows |
| /tv | /opt/appdata/tvshows |
| /blackhole | /appdata/temp/blackhole/tvshows |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.sickrage.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.sickrage.entrypoints | ```https``` |
| traefik.http.routers.sickrage.tls.certresolver | ```default``` |
| traefik.http.routers.sickrage.rule | ```Host(`sickrage.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sickrage.tls | ```true``` |
| traefik.http.routers.sickrage.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SickRage``` |
| mafl.description | ```Automatic Video Library Manager for TV Shows.``` |
| mafl.link | ```https://sickrage.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/sickrage-icon.png``` |

