# ombi

![Logo](images/ombi.png)

## Description
Ombi allows you to host your own Plex Request and user management system.

## Image
linuxserver/ombi:latest

## Categories
- Mediaserver

## Ports
- 3579:3579/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ombi |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ombi.rule | ```Host(`ombi.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ombi.entrypoints | ```https``` |
| traefik.http.services.ombi.loadbalancer.server.port | ```3579``` |
| traefik.http.routers.ombi.tls | ```true``` |
| traefik.http.routers.ombi.tls.certresolver | ```default``` |
| traefik.http.routers.ombi.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ombi``` |
| mafl.description | ```Ombi allows you to host your own Plex Request and user management system.``` |
| mafl.link | ```https://ombi.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/ombi.png``` |

