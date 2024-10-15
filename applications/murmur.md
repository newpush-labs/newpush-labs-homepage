# murmur

![Logo](images/murmur.png)

## Description
Mumble is a voicechat program for gamers written on top of Qt and Opus. Murmur is the server backend for Mumble.

## Image
goofball222/murmur:latest

## Categories
- Chatserver

## Ports
- 64738:64738/tcp
- 64738:64738/udp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/localtime | /etc/localtime:ro |
| /opt/murmur/config | /appdata/files/config/murmur |
| /opt/murmur/data | /appdata/files/murmur/data |
| /opt/murmur/log | /appdata/files/murmur/log |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| TZ | TZ | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.murmur.rule | ```Host(`murmur.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.murmur.entrypoints | ```https``` |
| traefik.http.services.murmur.loadbalancer.server.port | ```64738``` |
| traefik.http.routers.murmur.tls | ```true``` |
| traefik.http.routers.murmur.tls.certresolver | ```default``` |
| traefik.http.routers.murmur.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Murmur``` |
| mafl.description | ```Mumble is a voicechat program for gamers written on top of Qt and Opus.``` |
| mafl.link | ```https://murmur.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Chatserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/Mumble-logo.png``` |

