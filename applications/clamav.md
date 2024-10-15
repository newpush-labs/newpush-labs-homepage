# clamav

## Description
ClamAV® is an open source antivirus engine for detecting trojans, viruses, malware \& other malicious threats.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://docs.clamav.net/>  
**Official Docker Documentation:** [https://hub.docker.com/r/mkodockx/docker\-clamav](https://hub.docker.com/r/mkodockx/docker-clamav)  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_clamav.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_clamav.sh \| bash

  
  


## Image
mkodockx/docker-clamav:alpine

## Categories
- Other
- Anitvirus

## Ports
- 3310:3310/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/timezone | /etc/timezone |
| /etc/localtime | /etc/localtime |
| /etc/clamav | /opt/appdata/clamav/config |
| /var/lib/clamav | /opt/appdata/clamav/virus_definitions |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.clamav.rule | ```Host(`clamav.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.clamav.entrypoints | ```https``` |
| traefik.http.services.clamav.loadbalancer.server.port | ```3310``` |
| traefik.http.routers.clamav.tls | ```true``` |
| traefik.http.routers.clamav.tls.certresolver | ```default``` |
| traefik.http.routers.clamav.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Clamav``` |
| mafl.description | ```ClamAV® is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.``` |
| mafl.link | ```https://clamav.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```http://www.clamav.net/assets/clamav-trademark.png``` |

