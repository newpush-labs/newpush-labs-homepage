# Wikijs

![Logo](images/Wikijs.png)

## Description
Wikijs A modern, lightweight and powerful wiki app built on NodeJS.

## Image
linuxserver/wikijs:latest

## Categories
- Notesserver

## Ports
- 3100:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/wikijs |
| /data | /opt/appdata/wikijs/data |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.wikijs.rule | ```Host(`wikijs.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wikijs.entrypoints | ```https``` |
| traefik.http.services.wikijs.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.wikijs.tls | ```true``` |
| traefik.http.routers.wikijs.tls.certresolver | ```default``` |
| traefik.http.routers.wikijs.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wikijs``` |
| mafl.description | ```Wikijs A modern, lightweight and powerful wiki app built on NodeJS.``` |
| mafl.link | ```https://wikijs.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Notesserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/wikijs.png``` |

