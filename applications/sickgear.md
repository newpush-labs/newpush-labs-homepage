# sickgear

![Logo](images/sickgear.png)

## Description
SickGear provides management of TV shows and/or Anime, it detects new episodes, links downloader apps, and more.

## Image
linuxserver/sickgear:latest

## Categories
- Downloaders
- Video

## Ports
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/sickgear |
| /tv | /appdata/tv |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.sickgear.rule | ```Host(`sickgear.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sickgear.entrypoints | ```https``` |
| traefik.http.services.sickgear.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.sickgear.tls | ```true``` |
| traefik.http.routers.sickgear.tls.certresolver | ```default``` |
| traefik.http.routers.sickgear.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SickGear``` |
| mafl.description | ```SickGear provides management of TV shows and/or Anime, it detects new episodes, links downloader apps, and more.``` |
| mafl.link | ```https://sickgear.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/sickgear-icon.png``` |

