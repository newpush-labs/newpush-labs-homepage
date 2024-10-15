# Orcaslicer

![Logo](images/Orcaslicer.png)

## Description
Orca Slicer is an open source slicer for FDM printers. OrcaSlicer is fork of Bambu Studio, it was previously known as BambuStudio\-SoftFever, Bambu Studio is forked from PrusaSlicer by Prusa Research, which is from Slic3r by Alessandro Ranellucci and the RepRap community

## Image
linuxserver/orcaslicer:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/orcaslicer |

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
| traefik.http.routers.orcaslicer.rule | ```Host(`orcaslicer.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.orcaslicer.entrypoints | ```https``` |
| traefik.http.services.orcaslicer.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.orcaslicer.tls | ```true``` |
| traefik.http.routers.orcaslicer.tls.certresolver | ```default``` |
| traefik.http.routers.orcaslicer.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Orcaslicer``` |
| mafl.description | ```Orca Slicer is an open source slicer for FDM printers.``` |
| mafl.link | ```https://orcaslicer.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/orcaslicer-logo.png``` |

