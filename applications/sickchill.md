# sickchill

![Logo](images/sickchill.png)

## Description
Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

## Image
linuxserver/sickchill:latest

## Categories
- Downloaders
- Video

## Ports
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/sickchill |
| /downloads | /appdata/downloads |
| /tv | /appdata/tv |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.sickchill.rule | ```Host(`sickchill.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sickchill.entrypoints | ```https``` |
| traefik.http.services.sickchill.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.sickchill.tls | ```true``` |
| traefik.http.routers.sickchill.tls.certresolver | ```default``` |
| traefik.http.routers.sickchill.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SickChill``` |
| mafl.description | ```Automatic Video Library Manager for TV Shows.``` |
| mafl.link | ```https://sickchill.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/sickchill-icon.png``` |

