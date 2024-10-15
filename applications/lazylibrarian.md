# lazylibrarian

![Logo](images/lazylibrarian.png)

## Description
LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs.

## Image
linuxserver/lazylibrarian:latest

## Categories
- Libraryserver

## Ports
- 5299:5299/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config |  |
| /downloads |  |
| /books |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.lazylibrarian.rule | ```Host(`lazylibrarian.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.lazylibrarian.entrypoints | ```https``` |
| traefik.http.services.lazylibrarian.loadbalancer.server.port | ```5299``` |
| traefik.http.routers.lazylibrarian.tls | ```true``` |
| traefik.http.routers.lazylibrarian.tls.certresolver | ```default``` |
| traefik.http.routers.lazylibrarian.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```LazyLibrarian``` |
| mafl.description | ```LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs.``` |
| mafl.link | ```https://lazylibrarian.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/lazylibrarian-icon.png``` |

