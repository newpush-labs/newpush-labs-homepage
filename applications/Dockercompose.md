# Docker-compose

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/docker\-compose for details.

## Image
linuxserver/docker-compose:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/docker-compose |

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
| traefik.http.routers.docker-compose.rule | ```Host(`docker-compose.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.docker-compose.entrypoints | ```https``` |
| traefik.http.services.docker-compose.loadbalancer.server.port | ```80``` |
| traefik.http.routers.docker-compose.tls | ```true``` |
| traefik.http.routers.docker-compose.tls.certresolver | ```default``` |
| traefik.http.routers.docker-compose.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Docker-compose``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://docker-compose.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

