# iobroker

![Logo](images/iobroker.png)

## Description
IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: adapters) ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/buanet/ioBroker.docker>  
**Official Docker Documentation:** <https://github.com/buanet/ioBroker.docker>  
  
  


## Image
buanet/iobroker:latest

## Categories
- Homeautomation

## Ports
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/iobroker | /opt/appdata/iobrokerdata |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.iobroker.rule | ```Host(`iobroker.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.iobroker.entrypoints | ```https``` |
| traefik.http.services.iobroker.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.iobroker.tls | ```true``` |
| traefik.http.routers.iobroker.tls.certresolver | ```default``` |
| traefik.http.routers.iobroker.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```iobroker``` |
| mafl.description | ```IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures.``` |
| mafl.link | ```https://iobroker.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Homeautomation``` |
| mafl.icon.url | ```https://github.com/buanet/ioBroker.docker/raw/main/docs/img/iobroker_logo.png``` |

