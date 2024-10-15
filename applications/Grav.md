# Grav

![Logo](images/Grav.png)

## Description
Grav is a Fast, Simple, and Flexible, file\-based Web\-platform.

## Image
linuxserver/grav:latest

## Categories
- Webplatform

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/grav |

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
| traefik.http.routers.grav.rule | ```Host(`grav.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.grav.entrypoints | ```https``` |
| traefik.http.services.grav.loadbalancer.server.port | ```80``` |
| traefik.http.routers.grav.tls | ```true``` |
| traefik.http.routers.grav.tls.certresolver | ```default``` |
| traefik.http.routers.grav.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Grav``` |
| mafl.description | ```Grav is a Fast, Simple, and Flexible, file-based Web-platform.``` |
| mafl.link | ```https://grav.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Webplatform``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/grav-logo.png``` |

