# traefik

![Logo](images/traefik.png)

## Description
Cloud\-Native Networking Stack That Just Works.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://doc.traefik.io/traefik/>  
**Official Docker Documentation:** [https://doc.traefik.io/traefik/getting\-started/install\-traefik/](https://doc.traefik.io/traefik/getting-started/install-traefik/)  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/traefik.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/traefik.sh \| bash

  
  
A simple and lightweight reverse proxy

## Image
traefik:latest

## Categories
- Proxy
- Security
- Tools

## Ports
- 80:80/tcp
- 443:443/tcp
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /traefik.yml | /opt/appdata/traefik/traefik.yml |
| /config.yml | /opt/appdata/traefik/config.yml |
| /acme.json | /opt/appdata/traefik/acme.json |
| /var/run/docker.sock | /var/run/docker.sock |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.traefik.rule | ```Host(`traefik.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.traefik.entrypoints | ```https``` |
| traefik.http.services.traefik.loadbalancer.server.port | ```80``` |
| traefik.http.routers.traefik.tls | ```true``` |
| traefik.http.routers.traefik.tls.certresolver | ```default``` |
| traefik.http.routers.traefik.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Traefik``` |
| mafl.description | ```Cloud-Native Networking Stack That Just Works.``` |
| mafl.link | ```https://traefik.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxy``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/traefik.png``` |

