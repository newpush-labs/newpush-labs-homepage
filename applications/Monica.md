# Monica

![Logo](images/Monica.png)

## Description
Monica is an open source personal relationship management system, that lets you document your life.

## Image
linuxserver/monica:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/monica |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DB_HOST | DB_HOST | `````` | ```Mariadb DB server hostname.``` |
| DB_PORT | DB_PORT | `````` | ```Mariadb DB server port.``` |
| DB_USERNAME | DB_USERNAME | `````` | ```Mariadb DB user.``` |
| DB_PASSWORD | DB_PASSWORD | `````` | ```Mariadb DB password.``` |
| DB_DATABASE | DB_DATABASE | `````` | ```Mariadb DB name.``` |
| APP_URL | APP_URL | ```http://localhost:80``` | ```The URL you will use to access Monica including protocol, and port where appropriate.``` |
| TRUSTED_PROXIES | TRUSTED_PROXIES | `````` | ```Set to the IP or netmask covering your reverse proxy, if running behind one. Set to `*` to trust all IPs (**do not** use `*` if exposed to the internet`).``` |
| APP_ENV | APP_ENV | ```local``` | ```Set to `production` when exposing the container to anyone else; this also makes https mandatory.``` |
| APP_DISABLE_SIGNUP | APP_DISABLE_SIGNUP | ```true``` | ```Set to `false` to enable new account sign-ups.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.monica.rule | ```Host(`monica.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.monica.entrypoints | ```https``` |
| traefik.http.services.monica.loadbalancer.server.port | ```80``` |
| traefik.http.routers.monica.tls | ```true``` |
| traefik.http.routers.monica.tls.certresolver | ```default``` |
| traefik.http.routers.monica.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Monica``` |
| mafl.description | ```Monica is an open source personal relationship management system, that lets you document your life.``` |
| mafl.link | ```https://monica.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/monica-logo.png``` |

