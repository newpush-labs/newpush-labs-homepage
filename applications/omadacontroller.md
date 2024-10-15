# omada-controller

![Logo](images/omadacontroller.png)

## Description
TP\-Link Omada is a software\-defined network solution. The EAP Controller is used to manage multiple EAPs. Raspberry Pi 1 and Zero are not supported.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://www.tp\-link.com/us/business\-networking/omada\-sdn\-controller/](https://www.tp-link.com/us/business-networking/omada-sdn-controller/)  
**Official Docker Documentation:** [https://hub.docker.com/r/mbentley/omada\-controller](https://hub.docker.com/r/mbentley/omada-controller)  
  
  


## Image
mbentley/omada-controller:latest

## Categories
- Management
- Tools

## Ports
- 8088:8088/tcp
- 8043:8043/tcp
- 27001:27001/udp
- 27002:27002/tcp
- 29810:29810/udp
- 29811:29811/tcp
- 29812:29812/tcp
- 29813:29813/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/omada |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.omada-controller.rule | ```Host(`omada-controller.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.omada-controller.entrypoints | ```https``` |
| traefik.http.services.omada-controller.loadbalancer.server.port | ```8088``` |
| traefik.http.routers.omada-controller.tls | ```true``` |
| traefik.http.routers.omada-controller.tls.certresolver | ```default``` |
| traefik.http.routers.omada-controller.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Omada EAP Controller``` |
| mafl.description | ```TP-Link Omada is a software-defined network solution.``` |
| mafl.link | ```https://omada-controller.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Management``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/omada.png``` |

