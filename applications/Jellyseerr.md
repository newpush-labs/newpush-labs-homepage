# Jellyseerr

![Logo](images/Jellyseerr.png)

## Description
Jellyseer is a free and open source software application for managing requests for your media library.

## Image
fallenbagel/jellyseerr:latest

## Categories
- Other
- Tools

## Ports
- 5055:5055/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/config | /opt/appdata/jellyseerr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.jellyseerr.rule | ```Host(`jellyseerr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.jellyseerr.entrypoints | ```https``` |
| traefik.http.services.jellyseerr.loadbalancer.server.port | ```5055``` |
| traefik.http.routers.jellyseerr.tls | ```true``` |
| traefik.http.routers.jellyseerr.tls.certresolver | ```default``` |
| traefik.http.routers.jellyseerr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Jellyseerr``` |
| mafl.description | ```Jellyseer is a free and open source software application for managing requests for your media library.``` |
| mafl.link | ```https://jellyseerr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/jellyseerr.png``` |

