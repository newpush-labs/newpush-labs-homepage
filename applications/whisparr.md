# whisparr

![Logo](images/whisparr.png)

## Description
Whisparr is an adult movie collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new movies and will interface with clients and indexers to grab, sort, and rename them. It can also be configured to automatically upgrade the quality of existing files in the library when a better quality format becomes available.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hotio.dev/>  
**Official Docker Documentation:** <https://wiki.servarr.com/en/whisparr>  
  
  


## Image
ghcr.io/hotio/whisparr:latest

## Categories
- Downloaders
- Video
- Adult

## Ports
- 6969:6969/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/whisparr |
| /dev/rtc | /dev/rtc |
| /Adult | /appdata/adult |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| TZ | TZ | ```America/Chicago``` | `````` |
| UMASK | UMASK | ```002``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.whisparr.rule | ```Host(`whisparr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.whisparr.entrypoints | ```https``` |
| traefik.http.services.whisparr.loadbalancer.server.port | ```6969``` |
| traefik.http.routers.whisparr.tls | ```true``` |
| traefik.http.routers.whisparr.tls.certresolver | ```default``` |
| traefik.http.routers.whisparr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Whisparr``` |
| mafl.description | ```Whisparr is an adult movie collection manager for Usenet and BitTorrent users.``` |
| mafl.link | ```https://whisparr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/whisparr-icon.png``` |

