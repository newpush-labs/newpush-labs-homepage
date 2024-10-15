# Zotero

![Logo](images/Zotero.png)

## Description
Zotero is a free, easy\-to\-use tool to help you collect, organize, annotate, cite, and share research.

## Image
linuxserver/zotero:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/zotero |

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
| traefik.http.routers.zotero.rule | ```Host(`zotero.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.zotero.entrypoints | ```https``` |
| traefik.http.services.zotero.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.zotero.tls | ```true``` |
| traefik.http.routers.zotero.tls.certresolver | ```default``` |
| traefik.http.routers.zotero.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Zotero``` |
| mafl.description | ```Zotero is a free, easy-to-use tool to help you collect, organize, annotate, cite, and share research.``` |
| mafl.link | ```https://zotero.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/zotero-icon.png``` |

