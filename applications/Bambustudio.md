# Bambustudio

![Logo](images/Bambustudio.png)

## Description
Bambu Studio Bambu Studio is an open\-source, cutting\-edge, feature\-rich slicing software. It contains project\-based workflows, systematically optimized slicing algorithms, and an easy\-to\-use graphical interface, bringing users an incredibly smooth printing experience.

## Image
linuxserver/bambustudio:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/bambustudio |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DARK_MODE | DARK_MODE | ```true``` | ```Set this to true to enable dark mode for Bambu Studio.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.bambustudio.rule | ```Host(`bambustudio.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.bambustudio.entrypoints | ```https``` |
| traefik.http.services.bambustudio.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.bambustudio.tls | ```true``` |
| traefik.http.routers.bambustudio.tls.certresolver | ```default``` |
| traefik.http.routers.bambustudio.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Bambustudio``` |
| mafl.description | ```Bambu Studio Bambu Studio is an open-source, cutting-edge, feature-rich slicing software.``` |
| mafl.link | ```https://bambustudio.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/bambustudio-logo.png``` |

