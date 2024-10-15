# alpine-xfce4-novnc

![Logo](images/alpinexfce4novnc.png)

## Description
Alpine xfce4 novnc

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/novaspirit/Alpine_xfce4_noVNC>  
**Official Docker Documentation:** <https://github.com/novaspirit/Alpine_xfce4_noVNC>  
  
  
Default username/password will be alpine/alpine.

## Image
novaspirit/alpine_xfce4_novnc:latest

## Categories
- Other
- Tools

## Ports
- 6080:6080/tcp
- 56780:56780/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /home/alpine/downloads | /opt/appdata/alpine-xfce4-novnc/home/alpine/downloads |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.alpine-xfce4-novnc.rule | ```Host(`alpine-xfce4-novnc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.alpine-xfce4-novnc.entrypoints | ```https``` |
| traefik.http.services.alpine-xfce4-novnc.loadbalancer.server.port | ```6080``` |
| traefik.http.routers.alpine-xfce4-novnc.tls | ```true``` |
| traefik.http.routers.alpine-xfce4-novnc.tls.certresolver | ```default``` |
| traefik.http.routers.alpine-xfce4-novnc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Alpine Xfce4 noVNC``` |
| mafl.description | ```Alpine xfce4 novnc``` |
| mafl.link | ```https://alpine-xfce4-novnc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/novnc.png``` |

