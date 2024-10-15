# Wireshark

![Logo](images/Wireshark.png)

## Description
Wireshark is the world’s foremost and widely\-used network protocol analyzer. It lets you see what’s happening on your network at a microscopic level and is the de facto (and often de jure) standard across many commercial and non\-profit enterprises, government agencies, and educational institutions. Wireshark development thrives thanks to the volunteer contributions of networking experts around the globe and is the continuation of a project started by Gerald Combs in 1998\.

## Image
linuxserver/wireshark:latest

## Categories
- Managementutilityserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/wireshark |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.wireshark.rule | ```Host(`wireshark.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wireshark.entrypoints | ```https``` |
| traefik.http.services.wireshark.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.wireshark.tls | ```true``` |
| traefik.http.routers.wireshark.tls.certresolver | ```default``` |
| traefik.http.routers.wireshark.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wireshark``` |
| mafl.description | ```Wireshark is the world’s foremost and widely-used network protocol analyzer.``` |
| mafl.link | ```https://wireshark.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/wireshark-icon.png``` |

