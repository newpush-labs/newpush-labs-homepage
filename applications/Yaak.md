# Yaak

![Logo](images/Yaak.png)

## Description
Yaak is a desktop API client for organizing and executing REST, GraphQL, and gRPC requests. It's built using Tauri, Rust, and ReactJS.

## Image
linuxserver/yaak:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/yaak |

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
| traefik.http.routers.yaak.rule | ```Host(`yaak.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.yaak.entrypoints | ```https``` |
| traefik.http.services.yaak.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.yaak.tls | ```true``` |
| traefik.http.routers.yaak.tls.certresolver | ```default``` |
| traefik.http.routers.yaak.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Yaak``` |
| mafl.description | ```Yaak is a desktop API client for organizing and executing REST, GraphQL, and gRPC requests.``` |
| mafl.link | ```https://yaak.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/yaak-logo.png``` |

