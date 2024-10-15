# Snapdrop

![Logo](images/Snapdrop.png)

## Description
Snapdrop A local file sharing in your browser. Inspired by Apple's Airdrop.

## Image
linuxserver/snapdrop:latest

## Categories
- Familyappserver

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/snapdrop |

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
| traefik.http.routers.snapdrop.rule | ```Host(`snapdrop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.snapdrop.entrypoints | ```https``` |
| traefik.http.services.snapdrop.loadbalancer.server.port | ```80``` |
| traefik.http.routers.snapdrop.tls | ```true``` |
| traefik.http.routers.snapdrop.tls.certresolver | ```default``` |
| traefik.http.routers.snapdrop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Snapdrop``` |
| mafl.description | ```Snapdrop A local file sharing in your browser.``` |
| mafl.link | ```https://snapdrop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/RobinLinus/snapdrop/master/client/images/logo_transparent_512x512.png``` |

