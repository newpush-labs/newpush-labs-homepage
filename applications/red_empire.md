# red_empire

## Description
Pure Python \& PowerShell post\-exploitation

## Notes
Port 5555 opened for reverse callbacks

## Image
empireproject/empire

## Categories
- Offensive

## Ports
- 5555:5555/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.frontend.rule | ```PathPrefixStrip:/empire``` |
| traefik.port | ```5555``` |
| traefik.enable | ```true``` |
| traefik.http.routers.red_empire.rule | ```Host(`red_empire.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_empire.entrypoints | ```https``` |
| traefik.http.services.red_empire.loadbalancer.server.port | ```5555``` |
| traefik.http.routers.red_empire.tls | ```true``` |
| traefik.http.routers.red_empire.tls.certresolver | ```default``` |
| traefik.http.routers.red_empire.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Empire``` |
| mafl.description | ```Pure Python & PowerShell post-exploitation``` |
| mafl.link | ```https://red_empire.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/XvtOqFp.png``` |

