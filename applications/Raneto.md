# Raneto

![Logo](images/Raneto.png)

## Description
Raneto \- is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase.

## Image
linuxserver/raneto:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/raneto |

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
| traefik.http.routers.raneto.rule | ```Host(`raneto.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.raneto.entrypoints | ```https``` |
| traefik.http.services.raneto.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.raneto.tls | ```true``` |
| traefik.http.routers.raneto.tls.certresolver | ```default``` |
| traefik.http.routers.raneto.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Raneto``` |
| mafl.description | ```Raneto - is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase.``` |
| mafl.link | ```https://raneto.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/gilbitron/Raneto/master/logo/logo_readme.png``` |

