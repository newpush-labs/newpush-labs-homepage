# Gimp

![Logo](images/Gimp.png)

## Description
GIMP is a free and open\-source raster graphics editor used for image manipulation (retouching) and image editing, free\-form drawing, transcoding between different image file formats, and more specialized tasks. It is extensible by means of plugins, and scriptable.

## Image
linuxserver/gimp:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/gimp |

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
| traefik.http.routers.gimp.rule | ```Host(`gimp.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.gimp.entrypoints | ```https``` |
| traefik.http.services.gimp.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.gimp.tls | ```true``` |
| traefik.http.routers.gimp.tls.certresolver | ```default``` |
| traefik.http.routers.gimp.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Gimp``` |
| mafl.description | ```GIMP is a free and open-source raster graphics editor used for image manipulation (retouching) and image editing, free-form drawing, transcoding between different image file formats, and more specialized tasks.``` |
| mafl.link | ```https://gimp.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/gimp-logo.png``` |

