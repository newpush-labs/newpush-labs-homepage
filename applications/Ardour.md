# Ardour

![Logo](images/Ardour.png)

## Description
Ardour is an open source, collaborative effort of a worldwide team including musicians, programmers, and professional recording engineers.

## Image
linuxserver/ardour:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ardour |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| SUBFOLDER | SUBFOLDER | ```/``` | ```Specify a subfolder to use with reverse proxies, IE `/subfolder/```` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ardour.rule | ```Host(`ardour.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ardour.entrypoints | ```https``` |
| traefik.http.services.ardour.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.ardour.tls | ```true``` |
| traefik.http.routers.ardour.tls.certresolver | ```default``` |
| traefik.http.routers.ardour.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ardour``` |
| mafl.description | ```Ardour is an open source, collaborative effort of a worldwide team including musicians, programmers, and professional recording engineers.``` |
| mafl.link | ```https://ardour.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ardour-logo.png``` |

