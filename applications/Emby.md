# Emby

![Logo](images/Emby.png)

## Description
Emby organizes video, music, live TV, and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices. This container is packaged as a standalone emby Media Server.

## Image
linuxserver/emby:latest

## Categories
- Mediaserver

## Ports
- 8096:8096/tcp
- 8920:8920/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/emby |
| /data/tvshows | /appdata/tv |
| /data/movies | /appdata/movies |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| TZ | TZ | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.emby.rule | ```Host(`emby.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.emby.entrypoints | ```https``` |
| traefik.http.services.emby.loadbalancer.server.port | ```8096``` |
| traefik.http.routers.emby.tls | ```true``` |
| traefik.http.routers.emby.tls.certresolver | ```default``` |
| traefik.http.routers.emby.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Emby``` |
| mafl.description | ```Emby organizes video, music, live TV, and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices.``` |
| mafl.link | ```https://emby.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/emby.png``` |

