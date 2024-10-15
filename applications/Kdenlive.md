# Kdenlive

![Logo](images/Kdenlive.png)

## Description
Kdenlive is a powerful free and open source cross\-platform video editing program made by the KDE community. Feature rich and production ready.

## Image
linuxserver/kdenlive:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kdenlive |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| SUBFOLDER | SUBFOLDER | ```/``` | ```Specify a subfolder to use with reverse proxies, IE `/subfolder/```` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kdenlive.rule | ```Host(`kdenlive.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kdenlive.entrypoints | ```https``` |
| traefik.http.services.kdenlive.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.kdenlive.tls | ```true``` |
| traefik.http.routers.kdenlive.tls.certresolver | ```default``` |
| traefik.http.routers.kdenlive.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kdenlive``` |
| mafl.description | ```Kdenlive is a powerful free and open source cross-platform video editing program made by the KDE community.``` |
| mafl.link | ```https://kdenlive.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kdenlive-logo.png``` |

