# red_cowrie

## Description
SSH Honeypot that logs authentication attempts and interactions

## Image
cowrie/cowrie

## Categories
- Honeypot
- Deception

## Ports
- 2222:2222/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_cowrie.rule | ```Host(`red_cowrie.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_cowrie.entrypoints | ```https``` |
| traefik.http.services.red_cowrie.loadbalancer.server.port | ```2222``` |
| traefik.http.routers.red_cowrie.tls | ```true``` |
| traefik.http.routers.red_cowrie.tls.certresolver | ```default``` |
| traefik.http.routers.red_cowrie.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cowrie Honeypot``` |
| mafl.description | ```SSH Honeypot that logs authentication attempts and interactions``` |
| mafl.link | ```https://red_cowrie.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Honeypot``` |
| mafl.icon.url | ```https://i.imgur.com/GaYgbXo.png``` |

