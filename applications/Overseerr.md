# Overseerr

![Logo](images/Overseerr.png)

## Description
Overseerr is a free and open source software application for managing requests for your media library.

## Image
hotio/overseerr:release

## Categories
- Mediaserver

## Ports
- 5055:5055/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/overseerr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.overseerr.rule | ```Host(`overseerr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.overseerr.entrypoints | ```https``` |
| traefik.http.services.overseerr.loadbalancer.server.port | ```5055``` |
| traefik.http.routers.overseerr.tls | ```true``` |
| traefik.http.routers.overseerr.tls.certresolver | ```default``` |
| traefik.http.routers.overseerr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Overseerr``` |
| mafl.description | ```Overseerr is a free and open source software application for managing requests for your media library.``` |
| mafl.link | ```https://overseerr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/overseerr-icon.png``` |

