# tvheadend

## Description
Tvheadend is a TV streaming server and recorder for Linux, FreeBSD and Android supporting DVB\-S, DVB\-S2, DVB\-C, DVB\-T, ATSC, ISDB\-T, IPTV, SAT\>IP and HDHomeRun as input sources. Tvheadend offers the HTTP (VLC, MPlayer), HTSP (Kodi, Movian) and SAT\>IP streaming. Multiple EPG sources are supported (over\-the\-air DVB and ATSC including OpenTV DVB extensions, XMLTV, PyXML).

## Image
linuxserver/tvheadend:latest

## Categories
- Video
- Other

## Ports
- 9981:9981/tcp
- 9982:9982/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/tvheadend |
| /recordings |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.tvheadend.rule | ```Host(`tvheadend.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.tvheadend.entrypoints | ```https``` |
| traefik.http.services.tvheadend.loadbalancer.server.port | ```9981``` |
| traefik.http.routers.tvheadend.tls | ```true``` |
| traefik.http.routers.tvheadend.tls.certresolver | ```default``` |
| traefik.http.routers.tvheadend.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Tvheadend``` |
| mafl.description | ```Tvheadend is a TV streaming server and recorder for Linux, FreeBSD and Android supporting DVB-S, DVB-S2, DVB-C, DVB-T, ATSC, ISDB-T, IPTV, SAT&gt;IP and HDHomeRun as input sources.``` |
| mafl.link | ```https://tvheadend.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Video``` |
| mafl.icon.url | ```http://i.imgur.com/zGSUAT4.png``` |

