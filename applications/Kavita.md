# Kavita

![Logo](images/Kavita.png)

## Description
Kavita Manga, Comic and E\-Book Server

## Image
kizaing/kavita:latest

## Categories
- Libraryserver

## Ports
- 5000:5000/tcp

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
| traefik.http.routers.kavita.rule | ```Host(`kavita.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kavita.entrypoints | ```https``` |
| traefik.http.services.kavita.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.kavita.tls | ```true``` |
| traefik.http.routers.kavita.tls.certresolver | ```default``` |
| traefik.http.routers.kavita.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kavita``` |
| mafl.description | ```Kavita Manga, Comic and E-Book Server``` |
| mafl.link | ```https://kavita.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Kareadita/Kavita/main/UI/Web/src/assets/images/logo.png``` |

