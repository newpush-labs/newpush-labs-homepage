# minisatip

![Logo](images/minisatip.png)

## Description
Minisatip is a multi\-threaded satip server version 1\.2 that runs under Linux and it was tested with DVB\-S, DVB\-S2, DVB\-T, DVB\-T2, DVB\-C, DVB\-C2, ATSC and ISDB\-T cards. The application is designed to stream the requested data to multiple clients (even with one dvb card) at the same time while opening different pids.

## Image
linuxserver/minisatip:latest

## Categories
- Video
- Other
- Tools

## Ports
- 8875:8875/tcp
- 554:554/tcp
- 1900:1900/udp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.minisatip.rule | ```Host(`minisatip.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.minisatip.entrypoints | ```https``` |
| traefik.http.services.minisatip.loadbalancer.server.port | ```8875``` |
| traefik.http.routers.minisatip.tls | ```true``` |
| traefik.http.routers.minisatip.tls.certresolver | ```default``` |
| traefik.http.routers.minisatip.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Minisatip``` |
| mafl.description | ```Minisatip is a multi-threaded satip server version 1.``` |
| mafl.link | ```https://minisatip.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Video``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/minisatip-icon.png``` |

