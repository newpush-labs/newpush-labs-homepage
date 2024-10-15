# Hishtory-server

![Logo](images/Hishtoryserver.png)

## Description
hiSHtory is a better shell history. It stores your shell history in context (what directory you ran the command in, whether it succeeded or failed, how long it took, etc). This is all stored locally and end\-to\-end encrypted for syncing to to all your other computers.

## Image
linuxserver/hishtory-server:latest

## Categories
- Uncategorized Services

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/hishtory-server |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| HISHTORY_POSTGRES_DB | HISHTORY_POSTGRES_DB | ```postgresql://${HISHTORY_DB_USER}:${HISHTORY_DB_PASS}@hishtory-db:5432/hishtory?sslmode=disable``` | ```Postgres DB [Connection URI](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING). Special characters must be [URL encoded](https://en.wikipedia.org/wiki/URL_encoding).``` |
| HISHTORY_SQLITE_DB | HISHTORY_SQLITE_DB | ```/config/hishtory.db``` | ```SQLite database path. Needs to be a mounted volume for persistence. Don't set at the same time as HISHTORY_POSTGRES_DB.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.hishtory-server.rule | ```Host(`hishtory-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.hishtory-server.entrypoints | ```https``` |
| traefik.http.services.hishtory-server.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.hishtory-server.tls | ```true``` |
| traefik.http.routers.hishtory-server.tls.certresolver | ```default``` |
| traefik.http.routers.hishtory-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Hishtory-server``` |
| mafl.description | ```hiSHtory is a better shell history.``` |
| mafl.link | ```https://hishtory-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/hishtory-server-icon.png``` |

