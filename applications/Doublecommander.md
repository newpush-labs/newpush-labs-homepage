# Doublecommander

![Logo](images/Doublecommander.png)

## Description
Double Commander is a free cross platform open source file manager with two panels side by side. It is inspired by Total Commander and features some new ideas.

## Image
linuxserver/doublecommander:latest

## Categories
- Filemanagement

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/doublecommander/config |
| /data | /opt/appdata/doublecommander/data |

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
| traefik.http.routers.doublecommander.rule | ```Host(`doublecommander.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.doublecommander.entrypoints | ```https``` |
| traefik.http.services.doublecommander.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.doublecommander.tls | ```true``` |
| traefik.http.routers.doublecommander.tls.certresolver | ```default``` |
| traefik.http.routers.doublecommander.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Doublecommander``` |
| mafl.description | ```Double Commander is a free cross platform open source file manager with two panels side by side.``` |
| mafl.link | ```https://doublecommander.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Filemanagement``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/doublecommander-icon.png``` |

