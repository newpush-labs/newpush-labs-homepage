# Libreoffice

![Logo](images/Libreoffice.png)

## Description
LibreOffice is a free and powerful office suite, and a successor to OpenOffice.org (commonly known as OpenOffice). Its clean interface and feature\-rich tools help you unleash your creativity and enhance your productivity.

## Image
linuxserver/libreoffice:latest

## Categories
- Familyappserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/libreoffice |

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
| traefik.http.routers.libreoffice.rule | ```Host(`libreoffice.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.libreoffice.entrypoints | ```https``` |
| traefik.http.services.libreoffice.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.libreoffice.tls | ```true``` |
| traefik.http.routers.libreoffice.tls.certresolver | ```default``` |
| traefik.http.routers.libreoffice.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Libreoffice``` |
| mafl.description | ```LibreOffice is a free and powerful office suite, and a successor to OpenOffice.``` |
| mafl.link | ```https://libreoffice.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/libreoffice-logo.png``` |

