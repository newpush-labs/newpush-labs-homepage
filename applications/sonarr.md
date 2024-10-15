# sonarr

![Logo](images/sonarr.png)

## Description
Sonarr (formerly NZBdrone) is a PVR for usenet and bittorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Image
hotio/sonarr:release

## Categories
- Usenetserver

## Ports
- 8989:8989/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/sonarr |
| /dev/rtc | /dev/rtc |
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
| traefik.http.routers.sonarr.rule | ```Host(`sonarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sonarr.entrypoints | ```https``` |
| traefik.http.services.sonarr.loadbalancer.server.port | ```8989``` |
| traefik.http.routers.sonarr.tls | ```true``` |
| traefik.http.routers.sonarr.tls.certresolver | ```default``` |
| traefik.http.routers.sonarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Sonarr``` |
| mafl.description | ```Sonarr (formerly NZBdrone) is a PVR for usenet and bittorrent users.``` |
| mafl.link | ```https://sonarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/sonarr-icon.png``` |

