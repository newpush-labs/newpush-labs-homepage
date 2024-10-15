# medusa

![Logo](images/medusa.png)

## Description
Medusa, automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

## Image
linuxserver/medusa:latest

## Categories
- Downloaders
- Video

## Ports
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/medusa |
| /tv | /appdata/tv |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.medusa.rule | ```Host(`medusa.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.medusa.entrypoints | ```https``` |
| traefik.http.services.medusa.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.medusa.tls | ```true``` |
| traefik.http.routers.medusa.tls.certresolver | ```default``` |
| traefik.http.routers.medusa.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Medusa``` |
| mafl.description | ```Medusa, automatic Video Library Manager for TV Shows.``` |
| mafl.link | ```https://medusa.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/medusa-icon.png``` |

