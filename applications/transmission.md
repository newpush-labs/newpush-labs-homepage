# transmission

![Logo](images/transmission.png)

## Description
Transmission is designed for easy, powerful use. Transmission has the features you want from a BitTorrent client: encryption, a web interface, peer exchange, magnet links, DHT, µTP, UPnP and NAT\-PMP port forwarding, webseed support, watch directories, tracker editing, global and per\-torrent speed limits, and more.

## Image
linuxserver/transmission:latest

## Categories
- Torrentserver

## Ports
- 9091:9091/tcp
- 51413:51413/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/transmission |
| /downloads | /appdata/files/downloads |
| /watch |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.transmission.rule | ```Host(`transmission.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.transmission.entrypoints | ```https``` |
| traefik.http.services.transmission.loadbalancer.server.port | ```9091``` |
| traefik.http.routers.transmission.tls | ```true``` |
| traefik.http.routers.transmission.tls.certresolver | ```default``` |
| traefik.http.routers.transmission.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Transmission``` |
| mafl.description | ```Transmission is designed for easy, powerful use.``` |
| mafl.link | ```https://transmission.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Torrentserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/transmission-icon.png``` |

