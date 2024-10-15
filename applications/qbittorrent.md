# qbittorrent

![Logo](images/qbittorrent.png)

## Description
The qBittorrent project aims to provide an open\-source software alternative to µTorrent. qBittorrent is based on the Qt toolkit and libtorrent\-rasterbar library.

## Image
linuxserver/qbittorrent:latest

## Categories
- Torrentserver

## Ports
- 6881:6881/tcp
- 6881:6881/udp
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/qbittorrent |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.qbittorrent.rule | ```Host(`qbittorrent.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.qbittorrent.entrypoints | ```https``` |
| traefik.http.services.qbittorrent.loadbalancer.server.port | ```6881``` |
| traefik.http.routers.qbittorrent.tls | ```true``` |
| traefik.http.routers.qbittorrent.tls.certresolver | ```default``` |
| traefik.http.routers.qbittorrent.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```qBittorrent``` |
| mafl.description | ```The qBittorrent project aims to provide an open-source software alternative to µTorrent.``` |
| mafl.link | ```https://qbittorrent.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Torrentserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/qbittorrent-icon.png``` |

