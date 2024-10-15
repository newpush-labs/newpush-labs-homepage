# Vscodium

![Logo](images/Vscodium.png)

## Description
VSCodium is a community\-driven, freely\-licensed binary distribution of Microsoft’s editor VS Code.

## Image
linuxserver/vscodium:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/vscodium |

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
| traefik.http.routers.vscodium.rule | ```Host(`vscodium.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.vscodium.entrypoints | ```https``` |
| traefik.http.services.vscodium.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.vscodium.tls | ```true``` |
| traefik.http.routers.vscodium.tls.certresolver | ```default``` |
| traefik.http.routers.vscodium.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vscodium``` |
| mafl.description | ```VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VS Code.``` |
| mafl.link | ```https://vscodium.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/vscodium-icon.png``` |

