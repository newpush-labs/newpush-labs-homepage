# privatebin

![Logo](images/privatebin.png)

## Description
PrivateBin is a minimalist, open source online pastebin where the server has zero knowledge of pasted data!
 

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://privatebin.info/>  
**Official Docker Documentation:** [https://hub.docker.com/r/privatebin/nginx\-fpm\-alpine](https://hub.docker.com/r/privatebin/nginx-fpm-alpine)  
  
  


## Image
privatebin/nginx-fpm-alpine:latest

## Categories
- Cloud
- Productivity
- Tools
- Web

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /srv/data | /opt/appdata/privatebin |
| /srv/cfg | /opt/appdata/privatebin |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.privatebin.rule | ```Host(`privatebin.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.privatebin.entrypoints | ```https``` |
| traefik.http.services.privatebin.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.privatebin.tls | ```true``` |
| traefik.http.routers.privatebin.tls.certresolver | ```default``` |
| traefik.http.routers.privatebin.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```PrivateBin``` |
| mafl.description | ```PrivateBin is a minimalist, open source online pastebin where the server has zero knowledge of pasted data!``` |
| mafl.link | ```https://privatebin.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Cloud``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/privatebin.png``` |

