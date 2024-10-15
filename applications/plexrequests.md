# plexrequests

![Logo](images/plexrequests.png)

## Description
Simple automated way for users to request new content for Plex.

## Image
linuxserver/plexrequests:latest

## Categories
- Mediaserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/plexrequests |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| URL_BASE | URL_BASE | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.plexrequests.rule | ```Host(`plexrequests.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.plexrequests.entrypoints | ```https``` |
| traefik.http.services.plexrequests.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.plexrequests.tls | ```true``` |
| traefik.http.routers.plexrequests.tls.certresolver | ```default``` |
| traefik.http.routers.plexrequests.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Plex Requests``` |
| mafl.description | ```Simple automated way for users to request new content for Plex.``` |
| mafl.link | ```https://plexrequests.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/beta-templates/master/lsiodev/img/plexrequests-icon.png``` |

