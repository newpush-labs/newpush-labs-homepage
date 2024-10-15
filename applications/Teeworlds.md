# Teeworlds

![Logo](images/Teeworlds.png)

## Description
Server for Teeworlds

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://hub.docker.com/r/r3aper/teeworlds\-server](https://hub.docker.com/r/r3aper/teeworlds-server)  
  
  


## Image
r3aper/teeworlds-server:latest

## Categories
- Games

## Ports
- 8303/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/teeworlds/config |
| /data | /opt/appdata/teeworlds/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.teeworlds.rule | ```Host(`teeworlds.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.teeworlds.entrypoints | ```https``` |
| traefik.http.services.teeworlds.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.teeworlds.tls | ```true``` |
| traefik.http.routers.teeworlds.tls.certresolver | ```default``` |
| traefik.http.routers.teeworlds.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Teeworlds``` |
| mafl.description | ```Server for Teeworlds``` |
| mafl.link | ```https://teeworlds.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Games``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/Teeworlds.png``` |

