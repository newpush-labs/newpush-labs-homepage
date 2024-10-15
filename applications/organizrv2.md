# organizr-v2

![Logo](images/organizrv2.png)

## Description
Organizr allows you to setup Tabs that will be loaded all in one webpage. You can then work on your server with ease.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://organizr.app/>  
**Official Docker Documentation:** <https://hub.docker.com/r/organizr/organizr>  
  
  


## Image
organizr/organizr:latest

## Categories
- Other
- Tools

## Ports
- 7171:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/organizr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.organizr-v2.rule | ```Host(`organizr-v2.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.organizr-v2.entrypoints | ```https``` |
| traefik.http.services.organizr-v2.loadbalancer.server.port | ```80``` |
| traefik.http.routers.organizr-v2.tls | ```true``` |
| traefik.http.routers.organizr-v2.tls.certresolver | ```default``` |
| traefik.http.routers.organizr-v2.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Organizr v2``` |
| mafl.description | ```Organizr allows you to setup Tabs that will be loaded all in one webpage.``` |
| mafl.link | ```https://organizr-v2.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/organizr-icon.png``` |

