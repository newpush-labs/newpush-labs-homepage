# dradis

![Logo](images/dradis.png)

## Description
Dradis Framework: Collaboration and reporting for IT Security teams http://dradisframework.org

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://dradisframework.com/>  
**Official Docker Documentation:** [https://github.com/raesene/dockerized\-security\-tools](https://github.com/raesene/dockerized-security-tools)  
  
  


## Image
raesene/dradis:latest

## Categories
- Security

## Ports
- 3100:3000/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.dradis.rule | ```Host(`dradis.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.dradis.entrypoints | ```https``` |
| traefik.http.services.dradis.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.dradis.tls | ```true``` |
| traefik.http.routers.dradis.tls.certresolver | ```default``` |
| traefik.http.routers.dradis.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Dradis``` |
| mafl.description | ```Dradis Framework: Collaboration and reporting for IT Security teams http://dradisframework.``` |
| mafl.link | ```https://dradis.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Security``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/dradis-logo.png``` |

