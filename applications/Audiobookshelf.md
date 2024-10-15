# Audiobookshelf

![Logo](images/Audiobookshelf.png)

## Description
Audiobook Server

## Image
ghcr.io/advplyr/audiobookshelf:latest

## Categories
- Libraryserver

## Ports
- 13378:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/audiobookshelf |
| /audiobooks | /appdata/audiobooks |
| /podcasts | /appdata/podcasts |
| /metadata | /appdata/metadata |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.audiobookshelf.rule | ```Host(`audiobookshelf.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.audiobookshelf.entrypoints | ```https``` |
| traefik.http.services.audiobookshelf.loadbalancer.server.port | ```80``` |
| traefik.http.routers.audiobookshelf.tls | ```true``` |
| traefik.http.routers.audiobookshelf.tls.certresolver | ```default``` |
| traefik.http.routers.audiobookshelf.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Audiobookshelf``` |
| mafl.description | ```Audiobook Server``` |
| mafl.link | ```https://audiobookshelf.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/mycroftwilde/portainer_templates/master/Images/AudioBookshelfLogo.png``` |

