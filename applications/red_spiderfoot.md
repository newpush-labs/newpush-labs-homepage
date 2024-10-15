# red_spiderfoot

## Description
SpiderFoot automates OSINT to find out everything possible about your target.

## Notes
In your browser, head over to https://your\-docker\-machine\-ip:5001

## Image
combro2k/alpine-spiderfoot

## Categories
- Offensive
- Osint

## Ports
- 5001:5001/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_spiderfoot.rule | ```Host(`red_spiderfoot.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_spiderfoot.entrypoints | ```https``` |
| traefik.http.services.red_spiderfoot.loadbalancer.server.port | ```5001``` |
| traefik.http.routers.red_spiderfoot.tls | ```true``` |
| traefik.http.routers.red_spiderfoot.tls.certresolver | ```default``` |
| traefik.http.routers.red_spiderfoot.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Spiderfoot``` |
| mafl.description | ```SpiderFoot automates OSINT to find out everything possible about your target.``` |
| mafl.link | ```https://red_spiderfoot.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/4lffWWS.png``` |

