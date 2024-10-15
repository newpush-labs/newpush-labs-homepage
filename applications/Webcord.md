# Webcord

![Logo](images/Webcord.png)

## Description
WebCord can be summarized as a pack of security and privacy hardenings, Discord features reimplementations, Electron / Chromium / Discord bugs workarounds, stylesheets, internal pages and wrapped https://discord.com page, designed to conform with ToS as much as it is possible (or hide the changes that might violate it from Discord's eyes).

## Image
linuxserver/webcord:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/webcord |

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
| traefik.http.routers.webcord.rule | ```Host(`webcord.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.webcord.entrypoints | ```https``` |
| traefik.http.services.webcord.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.webcord.tls | ```true``` |
| traefik.http.routers.webcord.tls.certresolver | ```default``` |
| traefik.http.routers.webcord.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Webcord``` |
| mafl.description | ```WebCord can be summarized as a pack of security and privacy hardenings, Discord features reimplementations, Electron / Chromium / Discord bugs workarounds, stylesheets, internal pages and wrapped https://discord.``` |
| mafl.link | ```https://webcord.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/webcord-icon.png``` |

