# Digikam

![Logo](images/Digikam.png)

## Description
digiKam: Professional Photo Management with the Power of Open Source

## Image
linuxserver/digikam:latest

## Categories
- Photography

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/digikam |

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
| traefik.http.routers.digikam.rule | ```Host(`digikam.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.digikam.entrypoints | ```https``` |
| traefik.http.services.digikam.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.digikam.tls | ```true``` |
| traefik.http.routers.digikam.tls.certresolver | ```default``` |
| traefik.http.routers.digikam.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Digikam``` |
| mafl.description | ```digiKam: Professional Photo Management with the Power of Open Source``` |
| mafl.link | ```https://digikam.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photography``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/digikam.png``` |

