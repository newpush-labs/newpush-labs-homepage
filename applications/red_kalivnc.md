# red_kali-vnc

## Description
Kali Docker container with minimal LXDE

## Notes
From your web browser: http://your\-docker\-machine\-ip:6080

## Image
jgamblin/kalibrowser-lxde

## Categories
- Offensive
- Bare
- Utils

## Ports
- 6080:6080/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_kali-vnc.rule | ```Host(`red_kali-vnc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_kali-vnc.entrypoints | ```https``` |
| traefik.http.services.red_kali-vnc.loadbalancer.server.port | ```6080``` |
| traefik.http.routers.red_kali-vnc.tls | ```true``` |
| traefik.http.routers.red_kali-vnc.tls.certresolver | ```default``` |
| traefik.http.routers.red_kali-vnc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kali Web noVNC + LXDE``` |
| mafl.description | ```Kali Docker container with minimal LXDE``` |
| mafl.link | ```https://red_kali-vnc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/tmLEP0b.jpg``` |

