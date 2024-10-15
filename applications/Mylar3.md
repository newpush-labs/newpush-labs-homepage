# Mylar3

![Logo](images/Mylar3.png)

## Description
Mylar3 is an automated Comic Book downloader (cbr/cbz) for use with NZB and torrents written in python. It supports SABnzbd, NZBGET, and many torrent clients in addition to DDL.

## Image
linuxserver/mylar3:latest

## Categories
- Uncategorized Services

## Ports
- 8090:8090/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mylar3/config |
| /comics | /opt/appdata/mylar3/comics |
| /downloads | /opt/appdata/mylar3/downloads |

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
| traefik.http.routers.mylar3.rule | ```Host(`mylar3.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mylar3.entrypoints | ```https``` |
| traefik.http.services.mylar3.loadbalancer.server.port | ```8090``` |
| traefik.http.routers.mylar3.tls | ```true``` |
| traefik.http.routers.mylar3.tls.certresolver | ```default``` |
| traefik.http.routers.mylar3.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mylar3``` |
| mafl.description | ```Mylar3 is an automated Comic Book downloader (cbr/cbz) for use with NZB and torrents written in python.``` |
| mafl.link | ```https://mylar3.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mylar-icon.png``` |

