# Quassel-web

![Logo](images/Quasselweb.png)

## Description
Quassel\-web is a web client for Quassel. Note that a Quassel\-Core instance is required, we have a container available here.

## Image
linuxserver/quassel-web:latest

## Categories
- Uncategorized Services

## Ports
- 64080:64080/tcp
- 64443:64443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/quassel-web |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| QUASSEL_CORE | QUASSEL_CORE | ```192.168.1.10``` | ```specify the URL or IP address of your Quassel Core instance``` |
| QUASSEL_PORT | QUASSEL_PORT | ```4242``` | ```specify the port of your Quassel Core instance``` |
| QUASSEL_HTTPS | QUASSEL_HTTPS | `````` | ```Set to `true` to have Quassel web serve over https on port 64443 instead of http on port 64080.``` |
| URL_BASE | URL_BASE | ```/quassel``` | ```Specify a url-base in reverse proxy setups ie. `/quassel```` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.quassel-web.rule | ```Host(`quassel-web.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.quassel-web.entrypoints | ```https``` |
| traefik.http.services.quassel-web.loadbalancer.server.port | ```64080``` |
| traefik.http.routers.quassel-web.tls | ```true``` |
| traefik.http.routers.quassel-web.tls.certresolver | ```default``` |
| traefik.http.routers.quassel-web.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Quassel-web``` |
| mafl.description | ```Quassel-web is a web client for Quassel.``` |
| mafl.link | ```https://quassel-web.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/quassel-web-banner.png``` |

