# qflood

![Logo](images/qflood.svg)

## Description
A docker image with qBittorrent and the Flood UI, also optional WireGuard VPN support. See the official documentation for WireGuard VPN support at https://hotio.dev/containers/qflood/

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hotio.dev/containers/qflood/>  
**Official Docker Documentation:** <https://hotio.dev/containers/qflood/>  
  
  
The default qBittorrent username is admin and the default password is adminadmin.

## Image
hotio/qflood:latest

## Categories
- Downloaders

## Ports
- 3000:3000/tcp
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/qflood |
| /app/qBittorrent/downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| UMASK | UMASK | ```002``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |
| FLOOD_AUTH | FLOOD_AUTH | ```false``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.qflood.rule | ```Host(`qflood.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.qflood.entrypoints | ```https``` |
| traefik.http.services.qflood.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.qflood.tls | ```true``` |
| traefik.http.routers.qflood.tls.certresolver | ```default``` |
| traefik.http.routers.qflood.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```qFlood``` |
| mafl.description | ```A docker image with qBittorrent and the Flood UI, also optional WireGuard VPN support.``` |
| mafl.link | ```https://qflood.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/jesec/flood/master/flood.svg``` |

