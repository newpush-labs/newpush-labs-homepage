# OpenSpeedTest

![Logo](images/OpenSpeedTest.png)

## Description
Free \& Open\-Source HTML5 Network Performance Estimation Tool

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/openspeedtest/latest>  
**Official Docker Documentation:** [https://github.com/openspeedtest/Speed\-Test](https://github.com/openspeedtest/Speed-Test)  
  
  


## Image
openspeedtest/latest

## Categories
- Tools

## Ports
- 30000:3000/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.openspeedtest.rule | ```Host(`openspeedtest.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.openspeedtest.entrypoints | ```https``` |
| traefik.http.services.openspeedtest.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.openspeedtest.tls | ```true``` |
| traefik.http.routers.openspeedtest.tls.certresolver | ```default``` |
| traefik.http.routers.openspeedtest.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```OpenSpeedTest``` |
| mafl.description | ```Free & Open-Source HTML5 Network Performance Estimation Tool``` |
| mafl.link | ```https://openspeedtest.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/openspeedtest/Speed-Test/main/assets/images/icons/android-chrome-192x192.png``` |

