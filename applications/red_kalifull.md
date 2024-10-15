# red_kali-full

## Description
Non\-Official Kali container with kali\-linux\-full metapackage installed, built every night

## Image
booyaabes/kali-linux-full

## Categories
- Offensive
- Stack

## Ports
- 4444:4444/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_kali-full.rule | ```Host(`red_kali-full.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_kali-full.entrypoints | ```https``` |
| traefik.http.services.red_kali-full.loadbalancer.server.port | ```4444``` |
| traefik.http.routers.red_kali-full.tls | ```true``` |
| traefik.http.routers.red_kali-full.tls.certresolver | ```default``` |
| traefik.http.routers.red_kali-full.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kali - Full``` |
| mafl.description | ```Non-Official Kali container with kali-linux-full metapackage installed, built every night``` |
| mafl.link | ```https://red_kali-full.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/kcOdowg.jpg``` |

