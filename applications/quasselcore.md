# Quassel-core

![Logo](images/Quasselcore.png)

## Description
Quassel\-core is a modern, cross\-platform, distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. This container handles the IRC connection (quasselcore) and requires a desktop client (quasselclient) to be used and configured. It is designed to be always on and will keep your identity present in IRC even when your clients cannot be online. Backlog (history) is downloaded by your client upon reconnection allowing infinite scrollback through time.

## Image
linuxserver/quassel-core:latest

## Categories
- Uncategorized Services

## Ports
- 4242:4242/tcp
- 113:10113/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/quassel-core |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| RUN_OPTS | RUN_OPTS | ```--config-from-environment``` | ```Custom CLI options for Quassel``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.quassel-core.rule | ```Host(`quassel-core.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.quassel-core.entrypoints | ```https``` |
| traefik.http.services.quassel-core.loadbalancer.server.port | ```4242``` |
| traefik.http.routers.quassel-core.tls | ```true``` |
| traefik.http.routers.quassel-core.tls.certresolver | ```default``` |
| traefik.http.routers.quassel-core.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Quassel-core``` |
| mafl.description | ```Quassel-core is a modern, cross-platform, distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core.``` |
| mafl.link | ```https://quassel-core.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Apps-quassel-icon.png``` |

