# Librewolf

![Logo](images/Librewolf.png)

## Description
LibreWolf is a custom and independent version of Firefox, with the primary goals of privacy, security and user freedom. LibreWolf also aims to remove all the telemetry, data collection and annoyances, as well as disabling anti\-freedom features like DRM.

## Image
linuxserver/librewolf:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/librewolf |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| LIBREWOLF_CLI | LIBREWOLF_CLI | ```https://www.linuxserver.io/``` | ```Specify one or multiple LibreWolf CLI flags, this string will be passed to the application in full.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.librewolf.rule | ```Host(`librewolf.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.librewolf.entrypoints | ```https``` |
| traefik.http.services.librewolf.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.librewolf.tls | ```true``` |
| traefik.http.routers.librewolf.tls.certresolver | ```default``` |
| traefik.http.routers.librewolf.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Librewolf``` |
| mafl.description | ```LibreWolf is a custom and independent version of Firefox, with the primary goals of privacy, security and user freedom.``` |
| mafl.link | ```https://librewolf.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/librewolf-logo.png``` |

