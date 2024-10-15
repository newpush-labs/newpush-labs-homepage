# Babybuddy

![Logo](images/Babybuddy.png)

## Description
Babybuddy is a buddy for babies! Helps caregivers track sleep, feedings, diaper changes, tummy time and more to learn about and predict baby's needs without (as much) guess work.

## Image
linuxserver/babybuddy:latest

## Categories
- Uncategorized Services

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/babybuddy |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| CSRF_TRUSTED_ORIGINS | CSRF_TRUSTED_ORIGINS | ```http://127.0.0.1:8000,https://babybuddy.domain.com``` | ```Add any address you'd like to access babybuddy at (comma separated, no spaces)``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.babybuddy.rule | ```Host(`babybuddy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.babybuddy.entrypoints | ```https``` |
| traefik.http.services.babybuddy.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.babybuddy.tls | ```true``` |
| traefik.http.routers.babybuddy.tls.certresolver | ```default``` |
| traefik.http.routers.babybuddy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Babybuddy``` |
| mafl.description | ```Babybuddy is a buddy for babies!``` |
| mafl.link | ```https://babybuddy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/babybuddy-logo.png``` |

