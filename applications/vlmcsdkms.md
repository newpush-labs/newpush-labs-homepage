# vlmcsd-kms

![Logo](images/vlmcsdkms.png)

## Description
This is a replacement for Microsoft's KMS server.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/mikolatero/vlmcsd>  
**Official Docker Documentation:** [https://github.com/mikolatero/docker\-vlmcsd](https://github.com/mikolatero/docker-vlmcsd)  
  
  


## Image
mikolatero/vlmcsd:latest

## Categories
- Other
- Tools

## Ports
- 1688:1688/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.vlmcsd-kms.rule | ```Host(`vlmcsd-kms.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.vlmcsd-kms.entrypoints | ```https``` |
| traefik.http.services.vlmcsd-kms.loadbalancer.server.port | ```1688``` |
| traefik.http.routers.vlmcsd-kms.tls | ```true``` |
| traefik.http.routers.vlmcsd-kms.tls.certresolver | ```default``` |
| traefik.http.routers.vlmcsd-kms.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vlmcsd - KMS``` |
| mafl.description | ```This is a replacement for Microsoft's KMS server.``` |
| mafl.link | ```https://vlmcsd-kms.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/vlmcsd.png``` |

