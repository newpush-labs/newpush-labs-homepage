# nzbget

![Logo](images/nzbget.png)

## Description
NZBGet is a usenet downloader, written in C\+\+ and designed with performance in mind to achieve maximum download speed by using very little system resources. It supports all platforms including Windows, Mac, Linux and works on all devices including PC, NAS, WLAN routers and media players.

## Image
linuxserver/nzbget:latest

## Categories
- Usenetserver

## Ports
- 6789:6789/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/nzbget |
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
| traefik.http.routers.nzbget.rule | ```Host(`nzbget.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nzbget.entrypoints | ```https``` |
| traefik.http.services.nzbget.loadbalancer.server.port | ```6789``` |
| traefik.http.routers.nzbget.tls | ```true``` |
| traefik.http.routers.nzbget.tls.certresolver | ```default``` |
| traefik.http.routers.nzbget.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```NZBGet``` |
| mafl.description | ```NZBGet is a usenet downloader, written in C++ and designed with performance in mind to achieve maximum download speed by using very little system resources.``` |
| mafl.link | ```https://nzbget.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/nzbget-icon.png``` |

