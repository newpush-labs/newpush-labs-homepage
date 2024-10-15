# prowlarr

![Logo](images/prowlarr.png)

## Description
Prowlarr is a indexer manager/proxy built on the popular arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Sonarr, Radarr, Lidarr, and Readarr offering complete management of your indexers with no per app Indexer setup required (we do it all).

## Image
ghcr.io/linuxserver/prowlarr:develop

## Categories
- Usenetserver

## Ports
- 9696:9696/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/prowlarr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.prowlarr.rule | ```Host(`prowlarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.prowlarr.entrypoints | ```https``` |
| traefik.http.services.prowlarr.loadbalancer.server.port | ```9696``` |
| traefik.http.routers.prowlarr.tls | ```true``` |
| traefik.http.routers.prowlarr.tls.certresolver | ```default``` |
| traefik.http.routers.prowlarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Prowlarr``` |
| mafl.description | ```Prowlarr is a indexer manager/proxy built on the popular arr .``` |
| mafl.link | ```https://prowlarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/xneo1/portainer_templates/master/Images/prowlarr.png``` |

