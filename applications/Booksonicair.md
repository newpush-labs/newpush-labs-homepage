# Booksonic-air

![Logo](images/Booksonicair.png)

## Description
Booksonic\-air is a platform for accessing the audibooks you own wherever you are. At the moment the platform consists of Booksonic Air \- A server for streaming your audiobooks, successor to the original Booksonic server and based on Airsonic. Booksonic App \- An DSub based Android app for connection to Booksonic\-Air servers. .

## Image
linuxserver/booksonic-air:latest

## Categories
- Libraryserver

## Ports
- 4040:4040/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/booksonic-air/config |
| /audiobooks | /opt/appdata/booksonic-air/audiobooks |
| /podcasts | /opt/appdata/booksonic-air/podcasts |
| /othermedia | /opt/appdata/booksonic-air/othermedia |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| CONTEXT_PATH | CONTEXT_PATH | ```url-base``` | ```Base url for use with reverse proxies etc.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.booksonic-air.rule | ```Host(`booksonic-air.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.booksonic-air.entrypoints | ```https``` |
| traefik.http.services.booksonic-air.loadbalancer.server.port | ```4040``` |
| traefik.http.routers.booksonic-air.tls | ```true``` |
| traefik.http.routers.booksonic-air.tls.certresolver | ```default``` |
| traefik.http.routers.booksonic-air.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Booksonic-air``` |
| mafl.description | ```Booksonic-air is a platform for accessing the audibooks you own wherever you are.``` |
| mafl.link | ```https://booksonic-air.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/booksonic-air.png``` |

