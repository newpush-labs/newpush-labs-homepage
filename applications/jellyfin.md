# jellyfin

![Logo](images/jellyfin.png)

## Description
Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media. It is an alternative to the proprietary Emby and Plex, to provide media from a dedicated server to end\-user devices via multiple apps.

## Image
linuxserver/jellyfin:latest

## Categories
- Mediaserver

## Ports
- 8096:8096/tcp
- 8920:8920/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/jellyfin |
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
| traefik.http.routers.jellyfin.rule | ```Host(`jellyfin.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.jellyfin.entrypoints | ```https``` |
| traefik.http.services.jellyfin.loadbalancer.server.port | ```8096``` |
| traefik.http.routers.jellyfin.tls | ```true``` |
| traefik.http.routers.jellyfin.tls.certresolver | ```default``` |
| traefik.http.routers.jellyfin.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Jellyfin``` |
| mafl.description | ```Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media.``` |
| mafl.link | ```https://jellyfin.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/jellyfin.png``` |

