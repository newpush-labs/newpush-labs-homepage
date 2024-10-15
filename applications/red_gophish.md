# red_gophish

## Description
Open\-Source Phishing Toolkit

## Notes
In your browser, head over to https://your\-docker\-machine\-ip:3333\. Don't forget the S in https. Default credentials: admin/gophish

## Image
matteoggl/gophish

## Categories
- Offensive
- Phishing

## Ports
- 3333:3333/tcp
- 8083:80/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_gophish.rule | ```Host(`red_gophish.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_gophish.entrypoints | ```https``` |
| traefik.http.services.red_gophish.loadbalancer.server.port | ```3333``` |
| traefik.http.routers.red_gophish.tls | ```true``` |
| traefik.http.routers.red_gophish.tls.certresolver | ```default``` |
| traefik.http.routers.red_gophish.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```GoPhish``` |
| mafl.description | ```Open-Source Phishing Toolkit``` |
| mafl.link | ```https://red_gophish.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/l21Rn2v.png``` |

