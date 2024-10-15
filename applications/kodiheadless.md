# kodi-headless

![Logo](images/kodiheadless.png)

## Description
Headless installation of Kodi™ (formerly known as XBMC™), to enable library updates.

## Image
linuxserver/kodi-headless:latest

## Categories
- Mediaserver

## Ports
- 8080/tcp
- 9777/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kodi |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kodi-headless.rule | ```Host(`kodi-headless.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kodi-headless.entrypoints | ```https``` |
| traefik.http.services.kodi-headless.loadbalancer.server.port | ```8096``` |
| traefik.http.routers.kodi-headless.tls | ```true``` |
| traefik.http.routers.kodi-headless.tls.certresolver | ```default``` |
| traefik.http.routers.kodi-headless.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kodi Headless``` |
| mafl.description | ```Headless installation of Kodi™ (formerly known as XBMC™), to enable library updates.``` |
| mafl.link | ```https://kodi-headless.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/kodi-icon.png``` |

