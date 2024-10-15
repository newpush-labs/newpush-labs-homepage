# Cura

![Logo](images/Cura.png)

## Description
UltiMaker Cura is free, easy\-to\-use 3D printing software trusted by millions of users. Fine\-tune your 3D model with 400\+ settings for the best slicing and printing results.

## Image
linuxserver/cura:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/cura |

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
| traefik.http.routers.cura.rule | ```Host(`cura.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cura.entrypoints | ```https``` |
| traefik.http.services.cura.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.cura.tls | ```true``` |
| traefik.http.routers.cura.tls.certresolver | ```default``` |
| traefik.http.routers.cura.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cura``` |
| mafl.description | ```UltiMaker Cura is free, easy-to-use 3D printing software trusted by millions of users.``` |
| mafl.link | ```https://cura.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/cura-logo.png``` |

