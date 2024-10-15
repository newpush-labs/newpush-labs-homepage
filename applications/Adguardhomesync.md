# Adguardhome-sync

![Logo](images/Adguardhomesync.png)

## Description
Adguardhome\-sync is a tool to synchronize AdGuardHome config to replica instances.

## Image
linuxserver/adguardhome-sync:latest

## Categories
- Uncategorized Services

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/adguardhome-sync |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| CONFIGFILE | CONFIGFILE | ```/config/adguardhome-sync.yaml``` | ```Set a custom config file.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.adguardhome-sync.rule | ```Host(`adguardhome-sync.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.adguardhome-sync.entrypoints | ```https``` |
| traefik.http.services.adguardhome-sync.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.adguardhome-sync.tls | ```true``` |
| traefik.http.routers.adguardhome-sync.tls.certresolver | ```default``` |
| traefik.http.routers.adguardhome-sync.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Adguardhome-sync``` |
| mafl.description | ```Adguardhome-sync is a tool to synchronize AdGuardHome config to replica instances.``` |
| mafl.link | ```https://adguardhome-sync.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/adguardhomesync-icon.png``` |

