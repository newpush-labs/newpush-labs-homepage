# Freecad

![Logo](images/Freecad.png)

## Description
FreeCAD is a general\-purpose parametric 3D computer\-aided design (CAD) modeler and a building information modeling (BIM) software application with finite element method (FEM) support.

## Image
linuxserver/freecad:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/freecad |

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
| traefik.http.routers.freecad.rule | ```Host(`freecad.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.freecad.entrypoints | ```https``` |
| traefik.http.services.freecad.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.freecad.tls | ```true``` |
| traefik.http.routers.freecad.tls.certresolver | ```default``` |
| traefik.http.routers.freecad.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Freecad``` |
| mafl.description | ```FreeCAD is a general-purpose parametric 3D computer-aided design (CAD) modeler and a building information modeling (BIM) software application with finite element method (FEM) support.``` |
| mafl.link | ```https://freecad.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/freecad-logo.png``` |

