# unmanic

![Logo](images/unmanic.png)

## Description
Unmanic is a simple tool for optimising your file library. You can use it to convert your files into a single, uniform format, manage file movements based on timestamps, or execute custom commands against a file based on its file size.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://docs.unmanic.app/>  
**Official Docker Documentation:** <https://docs.unmanic.app/docs/installation/docker>  
  
  


## Image
josh5/unmanic:latest

## Categories
- Tools

## Ports
- 8888:8888/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/unmanic/config |
| /library | /opt/appdata/unmanic/library |
| /tmp/unmanic | /opt/appdata/unmanic/tmp |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.unmanic.rule | ```Host(`unmanic.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.unmanic.entrypoints | ```https``` |
| traefik.http.services.unmanic.loadbalancer.server.port | ```8888``` |
| traefik.http.routers.unmanic.tls | ```true``` |
| traefik.http.routers.unmanic.tls.certresolver | ```default``` |
| traefik.http.routers.unmanic.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Unmanic``` |
| mafl.description | ```Unmanic is a simple tool for optimising your file library.``` |
| mafl.link | ```https://unmanic.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://docs.unmanic.app/img/icon.png``` |

