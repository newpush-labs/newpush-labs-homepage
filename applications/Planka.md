# Planka

![Logo](images/Planka.png)

## Description
Planka is an elegant open source project tracking tool.

## Image
linuxserver/planka:latest

## Categories
- Uncategorized Services

## Ports
- 1337:1337/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/planka |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| BASE_URL | BASE_URL | ```https://planka.example.com``` | ```The URL you will use to access planka including protocol, and port if not 80/443.``` |
| DATABASE_URL | DATABASE_URL | ```postgresql://user:password@planka-db:5432/planka``` | ```Postgres database URL. Special characters must be [url encoded](https://en.wikipedia.org/wiki/Percent-encoding).``` |
| DEFAULT_ADMIN_EMAIL | DEFAULT_ADMIN_EMAIL | ```demo@demo.demo``` | ```Email address for default user.``` |
| DEFAULT_ADMIN_USERNAME | DEFAULT_ADMIN_USERNAME | ```demo``` | ```Username for default user.``` |
| DEFAULT_ADMIN_PASSWORD | DEFAULT_ADMIN_PASSWORD | ```demo``` | ```Password for default user.``` |
| DEFAULT_ADMIN_NAME | DEFAULT_ADMIN_NAME | ```Demo User``` | ```Display name for default user.``` |
| SECRET_KEY | SECRET_KEY | ```notasecretkey``` | ```Session encryption key, recommended 32-64 character alphanumeric.``` |
| TRUST_PROXY | TRUST_PROXY | ```0``` | ```Set to `1` to trust upstream proxies if reverse proxying.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.planka.rule | ```Host(`planka.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.planka.entrypoints | ```https``` |
| traefik.http.services.planka.loadbalancer.server.port | ```1337``` |
| traefik.http.routers.planka.tls | ```true``` |
| traefik.http.routers.planka.tls.certresolver | ```default``` |
| traefik.http.routers.planka.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Planka``` |
| mafl.description | ```Planka is an elegant open source project tracking tool.``` |
| mafl.link | ```https://planka.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/planka-logo.png``` |

