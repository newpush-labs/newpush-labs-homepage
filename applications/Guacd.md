# Guacd

![Logo](images/Guacd.png)

## Description
Guacd \- Apache Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH. This container is only the backend server component needed to use The official or 3rd party HTML5 frontends.

## Image
linuxserver/guacd:latest

## Categories
- Uncategorized Services

## Ports
- 4822:4822/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.guacd.rule | ```Host(`guacd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.guacd.entrypoints | ```https``` |
| traefik.http.services.guacd.loadbalancer.server.port | ```4822``` |
| traefik.http.routers.guacd.tls | ```true``` |
| traefik.http.routers.guacd.tls.certresolver | ```default``` |
| traefik.http.routers.guacd.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Guacd``` |
| mafl.description | ```Guacd - Apache Guacamole is a clientless remote desktop gateway.``` |
| mafl.link | ```https://guacd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/guacd.png``` |

