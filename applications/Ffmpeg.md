# Ffmpeg

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/ffmpeg for details.

## Image
linuxserver/ffmpeg:latest

## Categories
- Mediaserver

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ffmpeg |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ffmpeg.rule | ```Host(`ffmpeg.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ffmpeg.entrypoints | ```https``` |
| traefik.http.services.ffmpeg.loadbalancer.server.port | ```80``` |
| traefik.http.routers.ffmpeg.tls | ```true``` |
| traefik.http.routers.ffmpeg.tls.certresolver | ```default``` |
| traefik.http.routers.ffmpeg.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ffmpeg``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://ffmpeg.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | `````` |

