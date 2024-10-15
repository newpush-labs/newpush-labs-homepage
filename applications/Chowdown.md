# Chowdown

![Logo](images/Chowdown.png)

## Description
ave recipes in seconds with plain text formatting and create beatiful recipe pages with automated ease.

## Image
gregyankovoy/chowdown:latest

## Categories
- Familyappserver

## Ports
- 4000:4000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/chowdown |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.chowdown.rule | ```Host(`chowdown.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.chowdown.entrypoints | ```https``` |
| traefik.http.services.chowdown.loadbalancer.server.port | ```4000``` |
| traefik.http.routers.chowdown.tls | ```true``` |
| traefik.http.routers.chowdown.tls.certresolver | ```default``` |
| traefik.http.routers.chowdown.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Chowdown``` |
| mafl.description | ```ave recipes in seconds with plain text formatting and create beatiful recipe pages with automated ease.``` |
| mafl.link | ```https://chowdown.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/chowdown.png``` |

