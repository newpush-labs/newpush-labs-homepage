# Rdesktop

![Logo](images/Rdesktop.png)

## Description
Rdesktop \- Ubuntu based containers containing full desktop environments in officially supported flavors accessible via RDP.

## Image
linuxserver/rdesktop:latest

## Categories
- Managementutilityserver

## Ports
- 3389:3389/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |
| /config | /opt/appdata/rdesktop/config |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.rdesktop.rule | ```Host(`rdesktop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.rdesktop.entrypoints | ```https``` |
| traefik.http.services.rdesktop.loadbalancer.server.port | ```3389``` |
| traefik.http.routers.rdesktop.tls | ```true``` |
| traefik.http.routers.rdesktop.tls.certresolver | ```default``` |
| traefik.http.routers.rdesktop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Rdesktop``` |
| mafl.description | ```Rdesktop - Ubuntu based containers containing full desktop environments in officially supported flavors accessible via RDP.``` |
| mafl.link | ```https://rdesktop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rdesktop.png``` |

