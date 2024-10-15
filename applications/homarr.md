# homarr

![Logo](images/homarr.png)

## Description
Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://homarr.vercel.app/>  
**Official Docker Documentation:** <https://github.com/ajnart/homarr>  
  
  
This version is not secured and should only be used if you want Docker integration and you don't worry about users on your network.

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
| /var/run/docker.sock | /var/run/docker.sock |
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
| traefik.http.routers.homarr.rule | ```Host(`homarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.homarr.entrypoints | ```https``` |
| traefik.http.services.homarr.loadbalancer.server.port | ```7575``` |
| traefik.http.routers.homarr.tls | ```true``` |
| traefik.http.routers.homarr.tls.certresolver | ```default``` |
| traefik.http.routers.homarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Homarr``` |
| mafl.description | ```Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place.``` |
| mafl.link | ```https://homarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/homarr.png``` |

