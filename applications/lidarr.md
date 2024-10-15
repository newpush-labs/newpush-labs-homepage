# lidarr

![Logo](images/lidarr.png)

## Description
Lidarr is a music collection manager for Usenet and BitTorrent users.

## Image
hotio/lidarr:release

## Categories
- Usenetserver

## Ports
- 8686:8686/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/lidarr |
| /downloads | /appdata/downloads |
| /music | /appdata/music |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.lidarr.rule | ```Host(`lidarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.lidarr.entrypoints | ```https``` |
| traefik.http.services.lidarr.loadbalancer.server.port | ```8686``` |
| traefik.http.routers.lidarr.tls | ```true``` |
| traefik.http.routers.lidarr.tls.certresolver | ```default``` |
| traefik.http.routers.lidarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Lidarr``` |
| mafl.description | ```Lidarr is a music collection manager for Usenet and BitTorrent users.``` |
| mafl.link | ```https://lidarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/lidarr.png``` |

