# AriaNG

![Logo](images/AriaNG.png)

## Description
AriaNg is a modern web frontend making aria2 easier to use. AriaNg is written in pure html \& javascript, thus it does not need any compilers or runtime environment. You can just put AriaNg in your web server and open it in your browser. AriaNg uses responsive layout, and supports any desktop or mobile devices.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/hurlenko/aria2\-ariang\-docker](https://github.com/hurlenko/aria2-ariang-docker)  
**Official Docker Documentation:** [https://github.com/hurlenko/aria2\-ariang\-docker](https://github.com/hurlenko/aria2-ariang-docker)  
  
  


## Image
hurlenko/aria2-ariang:latest

## Categories
- Downloader

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /aria2/conf | /opt/appdata/ariang |
| /aria2/data | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| ARIA2RPCPORT | ARIA2RPCPORT | ```443``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ariang.rule | ```Host(`ariang.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ariang.entrypoints | ```https``` |
| traefik.http.services.ariang.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.ariang.tls | ```true``` |
| traefik.http.routers.ariang.tls.certresolver | ```default``` |
| traefik.http.routers.ariang.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```AriaNG``` |
| mafl.description | ```AriaNg is a modern web frontend making aria2 easier to use.``` |
| mafl.link | ```https://ariang.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloader``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/ariang.png``` |

