# rutorrent

![Logo](images/rutorrent.png)

## Description
Popular torrent client with a webui for ease of use.

## Image
linuxserver/rutorrent:latest

## Categories
- Torrentserver

## Ports
- 80/tcp
- 51413:51413/tcp
- 6881:6881/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/rutorrent |
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
| traefik.http.routers.rutorrent.rule | ```Host(`rutorrent.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.rutorrent.entrypoints | ```https``` |
| traefik.http.services.rutorrent.loadbalancer.server.port | ```51413``` |
| traefik.http.routers.rutorrent.tls | ```true``` |
| traefik.http.routers.rutorrent.tls.certresolver | ```default``` |
| traefik.http.routers.rutorrent.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ruTorrent``` |
| mafl.description | ```Popular torrent client with a webui for ease of use.``` |
| mafl.link | ```https://rutorrent.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Torrentserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/beta-templates/master/lsiodev/img/rutorrent-icon.png``` |

