# Steamos

![Logo](images/Steamos.png)

## Description
SteamOS is an Arch based Linux distribution made by Valve Software. This container is a vanilla Arch install with Steam repositories added for software support. This container will only work with modern AMD/Intel GPUs on a real Linux Host

## Image
linuxserver/steamos:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp
- 27031-27036:27031-27036/udp
- 27031-27036:27031-27036
- 47984-47990:47984-47990
- 48010-48010:48010-48010
- 47998-48000:47998-48000/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/steamos/config |
| /dev/input | /dev/input |
| /run/udev/data | /run/udev/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DRINODE | DRINODE | ```/dev/dri/renderD128``` | ```Specify the render device (GPU) for the contianer to use.``` |
| HOST_IP | HOST_IP | ```192.168.100.10``` | ```Specify the IP of the host, needed for LAN Remote Play.``` |
| STARTUP | STARTUP | ```KDE``` | ```KDE to boot into desktop mode, BIGPICTURE to boot into gamescope.``` |
| RESOLUTION | RESOLUTION | ```1920x1080``` | ```When booting into BIGPICTURE mode the screen resolution will be bound to this value.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.steamos.rule | ```Host(`steamos.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.steamos.entrypoints | ```https``` |
| traefik.http.services.steamos.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.steamos.tls | ```true``` |
| traefik.http.routers.steamos.tls.certresolver | ```default``` |
| traefik.http.routers.steamos.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Steamos``` |
| mafl.description | ```SteamOS is an Arch based Linux distribution made by Valve Software.``` |
| mafl.link | ```https://steamos.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/steamos-logo.png``` |

