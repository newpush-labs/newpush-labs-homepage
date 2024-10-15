# CuraNoVNC

## Description
This is a super basic noVNC build using supervisor to serve Cura in your favorite web browser. 

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://hub.docker.com/r/mikeah/cura\-novnc](https://hub.docker.com/r/mikeah/cura-novnc)  
**Official Docker Documentation:** [https://github.com/helfrichmichael/cura\-novnc](https://github.com/helfrichmichael/cura-novnc)  
  
  


## Image
mikeah/cura-novnc

## Categories
- Tools

## Ports
- 9080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /configs |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.curanovnc.rule | ```Host(`curanovnc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.curanovnc.entrypoints | ```https``` |
| traefik.http.services.curanovnc.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.curanovnc.tls | ```true``` |
| traefik.http.routers.curanovnc.tls.certresolver | ```default``` |
| traefik.http.routers.curanovnc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cura-NoVNC``` |
| mafl.description | ```This is a super basic noVNC build using supervisor to serve Cura in your favorite web browser.``` |
| mafl.link | ```https://curanovnc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Logo_for_Cura_Software.png/120px-Logo_for_Cura_Software.png``` |

