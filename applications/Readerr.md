# Readerr

![Logo](images/Readerr.png)

## Description
Readarr usent server

## Image
hotio/readarr:nightly

## Categories
- Usenetserver

## Ports
- 8787:8787/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/readarr |
| /downloads | /appdata/downloads |
| /books | /appdata/books |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.readerr.rule | ```Host(`readerr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.readerr.entrypoints | ```https``` |
| traefik.http.services.readerr.loadbalancer.server.port | ```8787``` |
| traefik.http.routers.readerr.tls | ```true``` |
| traefik.http.routers.readerr.tls.certresolver | ```default``` |
| traefik.http.routers.readerr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Readarr``` |
| mafl.description | ```Readarr usent server``` |
| mafl.link | ```https://readerr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Readarr/Readarr/develop/Logo/128.png``` |

