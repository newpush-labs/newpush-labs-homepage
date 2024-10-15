# Flexget

![Logo](images/Flexget.png)

## Description
Flexget is a multipurpose automation tool for all of your media.

## Image
linuxserver/flexget:latest

## Categories
- Uncategorized Services

## Ports
- 5050:5050/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/flexget/config |
| /data | /opt/appdata/flexget/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| FG_LOG_LEVEL | FG_LOG_LEVEL | ```info``` | ```Set the FlexGet logging level.``` |
| FG_LOG_FILE | FG_LOG_FILE | ```/config/flexget.log``` | ```Set the FlexGet log file location.``` |
| FG_CONFIG_FILE | FG_CONFIG_FILE | ```/config/.flexget/config.yml``` | ```Set the FlexGet config file location.``` |
| FG_WEBUI_PASSWORD | FG_WEBUI_PASSWORD | ```info``` | ```Set the FlexGet webui password. Pay attention to Bash/YAML reserved characters.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.flexget.rule | ```Host(`flexget.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.flexget.entrypoints | ```https``` |
| traefik.http.services.flexget.loadbalancer.server.port | ```5050``` |
| traefik.http.routers.flexget.tls | ```true``` |
| traefik.http.routers.flexget.tls.certresolver | ```default``` |
| traefik.http.routers.flexget.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Flexget``` |
| mafl.description | ```Flexget is a multipurpose automation tool for all of your media.``` |
| mafl.link | ```https://flexget.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/flexget-banner.png``` |

