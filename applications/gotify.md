# gotify

![Logo](images/gotify.png)

## Description
A simple server for sending and receiving messages

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://gotify.net/>  
**Official Docker Documentation:** <https://gotify.net/docs/install>  
  
  
ARM7 Image. Documentation is Available [here](https://gotify.net/docs/index).

## Image
gotify/server-arm7:latest

## Categories
- Other
- Tools

## Ports
- 9008:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/gotify |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/New_York``` | `````` |
| GOTIFY_DEFAULTUSER_NAME | GOTIFY_DEFAULTUSER_NAME | ```admin``` | `````` |
| GOTIFY_DEFAULTUSER_PASS | GOTIFY_DEFAULTUSER_PASS | ```admin123``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.gotify.rule | ```Host(`gotify.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.gotify.entrypoints | ```https``` |
| traefik.http.services.gotify.loadbalancer.server.port | ```80``` |
| traefik.http.routers.gotify.tls | ```true``` |
| traefik.http.routers.gotify.tls.certresolver | ```default``` |
| traefik.http.routers.gotify.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Gotify``` |
| mafl.description | ```A simple server for sending and receiving messages``` |
| mafl.link | ```https://gotify.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/gotify.png``` |

