# Komga

![Logo](images/Komga.png)

## Description
Koomga Manga, Comic and E\-Book Server

## Image
gotson/komga:latest

## Categories
- Libraryserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /books |  |
| /comics |  |
| /manga |  |
| /config |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.komga.rule | ```Host(`komga.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.komga.entrypoints | ```https``` |
| traefik.http.services.komga.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.komga.tls | ```true``` |
| traefik.http.routers.komga.tls.certresolver | ```default``` |
| traefik.http.routers.komga.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Komga``` |
| mafl.description | ```Koomga Manga, Comic and E-Book Server``` |
| mafl.link | ```https://komga.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/gotson/komga/master/.github/readme-images/app-icon.png``` |

