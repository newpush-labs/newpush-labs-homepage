# Synclounge

![Logo](images/Synclounge.png)

## Description
Synclounge is a third party tool that allows you to watch Plex in sync with your friends/family, wherever you are.

## Image
linuxserver/synclounge:latest

## Categories
- Uncategorized Services

## Ports
- 8088:8088/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| AUTH_LIST | AUTH_LIST | ```plexuser1,plexuser2,email1,machineid1``` | ```If set, only the users defined here and the users of the plex servers defined here will be able to access the server. Use e-mails, plex usernames and/or plex server machine ids, comma separated, no spaces.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.synclounge.rule | ```Host(`synclounge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.synclounge.entrypoints | ```https``` |
| traefik.http.services.synclounge.loadbalancer.server.port | ```8088``` |
| traefik.http.routers.synclounge.tls | ```true``` |
| traefik.http.routers.synclounge.tls.certresolver | ```default``` |
| traefik.http.routers.synclounge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Synclounge``` |
| mafl.description | ```Synclounge is a third party tool that allows you to watch Plex in sync with your friends/family, wherever you are.``` |
| mafl.link | ```https://synclounge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/synclounge-banner.png``` |

