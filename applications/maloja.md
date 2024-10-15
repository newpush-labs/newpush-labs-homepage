# maloja

![Logo](images/maloja.png)

## Description
Simple self\-hosted music scrobble database to create personal listening statistics. No recommendations, no social network, no nonsense.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/krateng/maloja>  
**Official Docker Documentation:** <https://github.com/krateng/maloja/blob/master/README.md>  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_maloja.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_maloja.sh \| bash

  
  


## Image
krateng/maloja:latest

## Categories
- Music

## Ports
- 42010:42010/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/maloja/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| MALOJA_FORCE_PASSWORD | MALOJA_FORCE_PASSWORD | ```malojapassword``` | `````` |
| MALOJA_DATA_DIRECTORY | MALOJA_DATA_DIRECTORY | ```/data``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.maloja.rule | ```Host(`maloja.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.maloja.entrypoints | ```https``` |
| traefik.http.services.maloja.loadbalancer.server.port | ```42010``` |
| traefik.http.routers.maloja.tls | ```true``` |
| traefik.http.routers.maloja.tls.certresolver | ```default``` |
| traefik.http.routers.maloja.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Maloja``` |
| mafl.description | ```Simple self-hosted music scrobble database to create personal listening statistics.``` |
| mafl.link | ```https://maloja.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Music``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/maloja.png``` |

