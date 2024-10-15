# Darktable

![Logo](images/Darktable.png)

## Description
darktable is an open source photography workflow application and raw developer. A virtual lighttable and darkroom for photographers. It manages your digital negatives in a database, lets you view them through a zoomable lighttable and enables you to develop raw images and enhance them.

## Image
linuxserver/darktable:latest

## Categories
- Productivity

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/darktable |

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
| traefik.http.routers.darktable.rule | ```Host(`darktable.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.darktable.entrypoints | ```https``` |
| traefik.http.services.darktable.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.darktable.tls | ```true``` |
| traefik.http.routers.darktable.tls.certresolver | ```default``` |
| traefik.http.routers.darktable.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Darktable``` |
| mafl.description | ```darktable is an open source photography workflow application and raw developer.``` |
| mafl.link | ```https://darktable.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Productivity``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/darktable-logo.png``` |

