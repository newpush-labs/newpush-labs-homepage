# Manyfold

![Logo](images/Manyfold.png)

## Description
Manyfold is an open source, self\-hosted web application for managing a collection of 3D models, particularly focused on 3D printing.

## Image
linuxserver/manyfold:latest

## Categories
- Uncategorized Services

## Ports
- 3214:3214/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/manyfold/config |
| /libraries | /opt/appdata/manyfold/libraries |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DATABASE_URL | DATABASE_URL | `````` | ```Database connection URL. For sqlite use `sqlite3:/config/manyfold.sqlite3`. For postgres or mariadb use `<scheme>://<username>:<password>@<hostname>:<port>/<db name>` where `<scheme>` is `postgresql` or `mysql2`. Special characters in username/password must be [URL encoded](https://en.wikipedia.org/wiki/Percent-encoding).``` |
| REDIS_URL | REDIS_URL | `````` | ```Redis/Valkey database URL in `redis://<hostname>:<port>/<db number>` format.``` |
| SECRET_KEY_BASE | SECRET_KEY_BASE | `````` | ```Browser session secret. Changing it will terminate all active browser sessions.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.manyfold.rule | ```Host(`manyfold.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.manyfold.entrypoints | ```https``` |
| traefik.http.services.manyfold.loadbalancer.server.port | ```3214``` |
| traefik.http.routers.manyfold.tls | ```true``` |
| traefik.http.routers.manyfold.tls.certresolver | ```default``` |
| traefik.http.routers.manyfold.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Manyfold``` |
| mafl.description | ```Manyfold is an open source, self-hosted web application for managing a collection of 3D models, particularly focused on 3D printing.``` |
| mafl.link | ```https://manyfold.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/manyfold-logo.png``` |

