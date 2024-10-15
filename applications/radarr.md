# radarr

![Logo](images/radarr.png)

## Description
Radarr \- A fork of Sonarr to work with movies à la Couchpotato.

## Image
hotio/radarr:release

## Categories
- Usenetserver

## Ports
- 7878:7878/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/radarr |
| /downloads | /appdata/downloads |
| /movies | /appdata/movies |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.radarr.rule | ```Host(`radarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.radarr.entrypoints | ```https``` |
| traefik.http.services.radarr.loadbalancer.server.port | ```7878``` |
| traefik.http.routers.radarr.tls | ```true``` |
| traefik.http.routers.radarr.tls.certresolver | ```default``` |
| traefik.http.routers.radarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Radarr``` |
| mafl.description | ```Radarr - A fork of Sonarr to work with movies à la Couchpotato.``` |
| mafl.link | ```https://radarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/radarr.png``` |

