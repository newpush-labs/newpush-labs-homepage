# Audacity

![Logo](images/Audacity.png)

## Description
Audacity is an easy\-to\-use, multi\-track audio editor and recorder. Developed by a group of volunteers as open source.

## Image
linuxserver/audacity:latest

## Categories
- Tools

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/audacity |

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
| traefik.http.routers.audacity.rule | ```Host(`audacity.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.audacity.entrypoints | ```https``` |
| traefik.http.services.audacity.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.audacity.tls | ```true``` |
| traefik.http.routers.audacity.tls.certresolver | ```default``` |
| traefik.http.routers.audacity.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Audacity``` |
| mafl.description | ```Audacity is an easy-to-use, multi-track audio editor and recorder.``` |
| mafl.link | ```https://audacity.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/audacity-logo.png``` |

