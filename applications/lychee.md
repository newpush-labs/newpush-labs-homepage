# lychee

![Logo](images/lychee.png)

## Description
Lychee is a free photo\-management tool, which runs on your server or web\-space. Installing is a matter of seconds. Upload, manage and share photos like from a native application. Lychee comes with everything you need and all your photos are stored securely.

## Image
linuxserver/lychee:latest

## Categories
- Photos

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/lychee |
| /pictures | /appdata/pictures |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.lychee.rule | ```Host(`lychee.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.lychee.entrypoints | ```https``` |
| traefik.http.services.lychee.loadbalancer.server.port | ```8686``` |
| traefik.http.routers.lychee.tls | ```true``` |
| traefik.http.routers.lychee.tls.certresolver | ```default``` |
| traefik.http.routers.lychee.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Lychee``` |
| mafl.description | ```Lychee is a free photo-management tool, which runs on your server or web-space.``` |
| mafl.link | ```https://lychee.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photos``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/lychee-icon.png``` |

