# Keepassxc

![Logo](images/Keepassxc.png)

## Description
KeePassXC is a free and open\-source password manager. It started as a community fork of KeePassX (itself a cross\-platform port of KeePass).

## Image
linuxserver/keepassxc:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/keepassxc |

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
| traefik.http.routers.keepassxc.rule | ```Host(`keepassxc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.keepassxc.entrypoints | ```https``` |
| traefik.http.services.keepassxc.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.keepassxc.tls | ```true``` |
| traefik.http.routers.keepassxc.tls.certresolver | ```default``` |
| traefik.http.routers.keepassxc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Keepassxc``` |
| mafl.description | ```KeePassXC is a free and open-source password manager.``` |
| mafl.link | ```https://keepassxc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/keepassxc-logo.png``` |

