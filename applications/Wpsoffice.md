# Wps-office

![Logo](images/Wpsoffice.png)

## Description
WPS Office is a lightweight, feature\-rich comprehensive office suite with high compatibility. As a handy and professional office software, WPS Office allows you to edit files in Writer, Presentation, Spreadsheet, and PDF to improve your work efficiency.

## Image
linuxserver/wps-office:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/wps-office |

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
| traefik.http.routers.wps-office.rule | ```Host(`wps-office.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wps-office.entrypoints | ```https``` |
| traefik.http.services.wps-office.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.wps-office.tls | ```true``` |
| traefik.http.routers.wps-office.tls.certresolver | ```default``` |
| traefik.http.routers.wps-office.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wps-office``` |
| mafl.description | ```WPS Office is a lightweight, feature-rich comprehensive office suite with high compatibility.``` |
| mafl.link | ```https://wps-office.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/wps-office-icon.png``` |

