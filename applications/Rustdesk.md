# Rustdesk

![Logo](images/Rustdesk.png)

## Description
RustDesk is a full\-featured open source remote control alternative for self\-hosting and security with minimal configuration.

## Image
linuxserver/rustdesk:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/rustdesk |

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
| traefik.http.routers.rustdesk.rule | ```Host(`rustdesk.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.rustdesk.entrypoints | ```https``` |
| traefik.http.services.rustdesk.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.rustdesk.tls | ```true``` |
| traefik.http.routers.rustdesk.tls.certresolver | ```default``` |
| traefik.http.routers.rustdesk.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Rustdesk``` |
| mafl.description | ```RustDesk is a full-featured open source remote control alternative for self-hosting and security with minimal configuration.``` |
| mafl.link | ```https://rustdesk.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rustdesk-logo.png``` |

