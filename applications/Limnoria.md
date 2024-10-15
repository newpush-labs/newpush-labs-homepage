# Limnoria

![Logo](images/Limnoria.png)

## Description
Limnoria A robust, full\-featured, and user/programmer\-friendly Python IRC bot, with many existing plugins. Successor of the well\-known Supybot.

## Image
linuxserver/limnoria:latest

## Categories
- Codeserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/limnoria |

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
| traefik.http.routers.limnoria.rule | ```Host(`limnoria.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.limnoria.entrypoints | ```https``` |
| traefik.http.services.limnoria.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.limnoria.tls | ```true``` |
| traefik.http.routers.limnoria.tls.certresolver | ```default``` |
| traefik.http.routers.limnoria.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Limnoria``` |
| mafl.description | ```Limnoria A robust, full-featured, and user/programmer-friendly Python IRC bot, with many existing plugins.``` |
| mafl.link | ```https://limnoria.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Codeserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-limnoria/master/logo.png``` |

