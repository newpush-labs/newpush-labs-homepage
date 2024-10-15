# Inkscape

![Logo](images/Inkscape.png)

## Description
Inkscape is professional quality vector graphics software which runs on Linux, Mac OS X and Windows desktop computers.

## Image
linuxserver/inkscape:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/inkscape |

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
| traefik.http.routers.inkscape.rule | ```Host(`inkscape.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.inkscape.entrypoints | ```https``` |
| traefik.http.services.inkscape.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.inkscape.tls | ```true``` |
| traefik.http.routers.inkscape.tls.certresolver | ```default``` |
| traefik.http.routers.inkscape.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Inkscape``` |
| mafl.description | ```Inkscape is professional quality vector graphics software which runs on Linux, Mac OS X and Windows desktop computers.``` |
| mafl.link | ```https://inkscape.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/inkscape-logo.png``` |

