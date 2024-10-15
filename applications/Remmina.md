# Remmina

![Logo](images/Remmina.png)

## Description
Remmina is a remote desktop client written in GTK, aiming to be useful for system administrators and travellers, who need to work with lots of remote computers in front of either large or tiny screens. Remmina supports multiple network protocols, in an integrated and consistent user interface. Currently RDP, VNC, SPICE, SSH and EXEC are supported.

## Image
linuxserver/remmina:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/remmina |

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
| traefik.http.routers.remmina.rule | ```Host(`remmina.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.remmina.entrypoints | ```https``` |
| traefik.http.services.remmina.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.remmina.tls | ```true``` |
| traefik.http.routers.remmina.tls.certresolver | ```default``` |
| traefik.http.routers.remmina.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Remmina``` |
| mafl.description | ```Remmina is a remote desktop client written in GTK, aiming to be useful for system administrators and travellers, who need to work with lots of remote computers in front of either large or tiny screens.``` |
| mafl.link | ```https://remmina.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/remmina-icon.png``` |

