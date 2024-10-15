# Pixapop

![Logo](images/Pixapop.png)

## Description
Pixapop is an open\-source single page application to view your photos in the easiest way possible.

## Image
linuxserver/pixapop:latest

## Categories
- Photos

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pixapop/config |
| /photos | /opt/appdata/pixapop/photos |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| APP_USERNAME | APP_USERNAME | ```admin``` | ```Specify a username to enable authentication.``` |
| APP_PASSWORD | APP_PASSWORD | ```admin``` | ```Specify a password to enable authentication.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pixapop.rule | ```Host(`pixapop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pixapop.entrypoints | ```https``` |
| traefik.http.services.pixapop.loadbalancer.server.port | ```80``` |
| traefik.http.routers.pixapop.tls | ```true``` |
| traefik.http.routers.pixapop.tls.certresolver | ```default``` |
| traefik.http.routers.pixapop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pixapop``` |
| mafl.description | ```Pixapop is an open-source single page application to view your photos in the easiest way possible.``` |
| mafl.link | ```https://pixapop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photos``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pixapop.png``` |

