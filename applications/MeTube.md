# MeTube

![Logo](images/MeTube.png)

## Description
Web GUI for youtube\-dl (using the yt\-dlp fork) with playlist support. Allows you to download videos from YouTube and dozens of other sites (https://github.com/yt\-dlp/yt\-dlp/blob/master/supportedsites.md)

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/alexta69/metube>  
**Official Docker Documentation:** <https://github.com/alexta69/metube>  
  
  


## Image
alexta69/metube:latest

## Categories
- Downloader

## Ports
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.metube.rule | ```Host(`metube.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.metube.entrypoints | ```https``` |
| traefik.http.services.metube.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.metube.tls | ```true``` |
| traefik.http.routers.metube.tls.certresolver | ```default``` |
| traefik.http.routers.metube.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```MeTube``` |
| mafl.description | ```Web GUI for youtube-dl (using the yt-dlp fork) with playlist support.``` |
| mafl.link | ```https://metube.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloader``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/metube.png``` |

