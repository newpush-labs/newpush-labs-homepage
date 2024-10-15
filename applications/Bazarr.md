# Bazarr

![Logo](images/Bazarr.png)

## Description
Bazarr is a companion application to Sonarr and Radarr. It can manage and download subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.

## Image
hotio/bazarr:release

## Categories
- Usenetserver

## Ports
- 6767:6767/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/bazarr |
| /tv | /appdata/tv |
| /movies | /appdata/movies |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| TZ | TZ | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.bazarr.rule | ```Host(`bazarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.bazarr.entrypoints | ```https``` |
| traefik.http.services.bazarr.loadbalancer.server.port | ```6767``` |
| traefik.http.routers.bazarr.tls | ```true``` |
| traefik.http.routers.bazarr.tls.certresolver | ```default``` |
| traefik.http.routers.bazarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Bazarr``` |
| mafl.description | ```Bazarr is a companion application to Sonarr and Radarr.``` |
| mafl.link | ```https://bazarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/bazarr.png``` |

