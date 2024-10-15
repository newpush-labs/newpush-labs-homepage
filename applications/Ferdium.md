# Ferdium

![Logo](images/Ferdium.png)

## Description
Ferdium is a desktop app that helps you organize how you use your favourite apps by combining them into one application.

## Image
linuxserver/ferdium:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ferdium |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ferdium.rule | ```Host(`ferdium.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ferdium.entrypoints | ```https``` |
| traefik.http.services.ferdium.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.ferdium.tls | ```true``` |
| traefik.http.routers.ferdium.tls.certresolver | ```default``` |
| traefik.http.routers.ferdium.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ferdium``` |
| mafl.description | ```Ferdium is a desktop app that helps you organize how you use your favourite apps by combining them into one application.``` |
| mafl.link | ```https://ferdium.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ferdium-logo.png``` |

