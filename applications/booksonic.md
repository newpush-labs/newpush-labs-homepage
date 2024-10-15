# booksonic

![Logo](images/booksonic.png)

## Description
Booksonic is a server and an app for streaming your audiobooks to any pc or android phone. Most of the functionality is also availiable on other platforms that have apps for subsonic.

## Image
linuxserver/booksonic:latest

## Categories
- Libraryserver

## Ports
- 4040:4040/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /books | /appdata/books |
| /podcast | /appdata/files/podcasts |
| /config | /opt/appdata/booksonic |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| CONTEXT_PATH | CONTEXT_PATH | ```booksonic``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.booksonic.rule | ```Host(`booksonic.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.booksonic.entrypoints | ```https``` |
| traefik.http.services.booksonic.loadbalancer.server.port | ```4040``` |
| traefik.http.routers.booksonic.tls | ```true``` |
| traefik.http.routers.booksonic.tls.certresolver | ```default``` |
| traefik.http.routers.booksonic.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Booksonic``` |
| mafl.description | ```Booksonic is a server and an app for streaming your audiobooks to any pc or android phone.``` |
| mafl.link | ```https://booksonic.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/booksonic.png``` |

