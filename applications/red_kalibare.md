# red_kali-bare

## Description
Official Kali container. Install desired metapackages

## Notes
Packages can be installed using Kali Metapackages. Use either docker attach  by CLI (best) or the web terminal. Port 4444 is open by default for reverse callback payloads.

## Image
kalilinux/kali-linux-docker

## Categories
- Offensive
- Bare

## Ports
- 4444:4444/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_kali-bare.rule | ```Host(`red_kali-bare.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_kali-bare.entrypoints | ```https``` |
| traefik.http.services.red_kali-bare.loadbalancer.server.port | ```4444``` |
| traefik.http.routers.red_kali-bare.tls | ```true``` |
| traefik.http.routers.red_kali-bare.tls.certresolver | ```default``` |
| traefik.http.routers.red_kali-bare.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kali - Bare``` |
| mafl.description | ```Official Kali container.``` |
| mafl.link | ```https://red_kali-bare.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/tmLEP0b.jpg``` |

