# Build-agent

## Description
This container needs special attention. Please check https://hub.docker.com/r/linuxserver/build\-agent for details.

## Image
linuxserver/build-agent:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/build-agent |

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
| traefik.http.routers.build-agent.rule | ```Host(`build-agent.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.build-agent.entrypoints | ```https``` |
| traefik.http.services.build-agent.loadbalancer.server.port | ```80``` |
| traefik.http.routers.build-agent.tls | ```true``` |
| traefik.http.routers.build-agent.tls.certresolver | ```default``` |
| traefik.http.routers.build-agent.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Build-agent``` |
| mafl.description | ```This container needs special attention.``` |
| mafl.link | ```https://build-agent.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

