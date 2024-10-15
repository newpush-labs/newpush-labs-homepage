# red_endlessh

## Description
SSH tarpit that slowly sends an endless banner

## Image
d3lta/endlessh-docker

## Categories
- Deception

## Ports
- 2223:22/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_endlessh.rule | ```Host(`red_endlessh.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_endlessh.entrypoints | ```https``` |
| traefik.http.services.red_endlessh.loadbalancer.server.port | ```22``` |
| traefik.http.routers.red_endlessh.tls | ```true``` |
| traefik.http.routers.red_endlessh.tls.certresolver | ```default``` |
| traefik.http.routers.red_endlessh.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Endlessh tarpit``` |
| mafl.description | ```SSH tarpit that slowly sends an endless banner``` |
| mafl.link | ```https://red_endlessh.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Deception``` |
| mafl.icon.url | ```https://i.imgur.com/lsGCqxD.png``` |

