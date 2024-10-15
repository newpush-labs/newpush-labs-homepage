# NUT Server

![Logo](images/NUTServer.png)

## Description
The purpose of NUT Server is to monitor a UPS attached device

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://networkupstools.org>  
**Official Docker Documentation:** [https://hub.docker.com/r/instantlinux/nut\-upsd](https://hub.docker.com/r/instantlinux/nut-upsd)  
  
  


## Image
instantlinux/nut-upsd:latest

## Categories
- Other
- Tools

## Ports
- 3493:3493/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| SERIAL | SERIAL | ```none``` | `````` |
| NAME | NAME | ```none``` | `````` |
| VENDOR ID | VENDOR ID | ```none``` | `````` |
| API_PASSWORD | API_PASSWORD | ```none``` | `````` |
| DESCRIPTION | DESCRIPTION | ```none``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nutserver.rule | ```Host(`nutserver.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nutserver.entrypoints | ```https``` |
| traefik.http.services.nutserver.loadbalancer.server.port | ```3493``` |
| traefik.http.routers.nutserver.tls | ```true``` |
| traefik.http.routers.nutserver.tls.certresolver | ```default``` |
| traefik.http.routers.nutserver.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```NUT Server``` |
| mafl.description | ```The purpose of NUT Server is to monitor a UPS attached device``` |
| mafl.link | ```https://nutserver.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/nut-server.png``` |

