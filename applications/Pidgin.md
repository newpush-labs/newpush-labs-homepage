# Pidgin

![Logo](images/Pidgin.png)

## Description
Pidgin is a chat program which lets you log into accounts on multiple chat networks simultaneously. This means that you can be chatting with friends on XMPP and sitting in an IRC channel at the same time.

## Image
linuxserver/pidgin:latest

## Categories
- Chatserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pidgin |

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
| traefik.http.routers.pidgin.rule | ```Host(`pidgin.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pidgin.entrypoints | ```https``` |
| traefik.http.services.pidgin.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.pidgin.tls | ```true``` |
| traefik.http.routers.pidgin.tls.certresolver | ```default``` |
| traefik.http.routers.pidgin.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pidgin``` |
| mafl.description | ```Pidgin is a chat program which lets you log into accounts on multiple chat networks simultaneously.``` |
| mafl.link | ```https://pidgin.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Chatserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pidgin-logo.png``` |

