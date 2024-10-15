# homarr-secured

![Logo](images/homarrsecured.png)

## Description
Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://homarr.vercel.app/>  
**Official Docker Documentation:** <https://github.com/ajnart/homarr>  
  
  
This version does not allow for interaction with the docker environment for security purposes.

## Image
ghcr.io/ajnart/homarr:latest

## Categories
- Tools
- Web
- Other

## Ports
- 7575:7575/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data/configs | /opt/appdata/homarr/configs |
| /app/public/icons | /opt/appdata/homarr/icons |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.homarr-secured.rule | ```Host(`homarr-secured.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.homarr-secured.entrypoints | ```https``` |
| traefik.http.services.homarr-secured.loadbalancer.server.port | ```7575``` |
| traefik.http.routers.homarr-secured.tls | ```true``` |
| traefik.http.routers.homarr-secured.tls.certresolver | ```default``` |
| traefik.http.routers.homarr-secured.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Homarr-Secured``` |
| mafl.description | ```Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place.``` |
| mafl.link | ```https://homarr-secured.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/homarr.png``` |

