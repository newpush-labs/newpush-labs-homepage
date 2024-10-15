# photoshow

![Logo](images/photoshow.png)

## Description
A simple, easy way to turn a photo album into a webgallery.

## Image
linuxserver/photoshow:latest

## Categories
- Photos

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /Pictures | /appdata/pictures |
| /Thumbs | /opt/appdata/photoshow/thumbs |
| /config | /opt/appdata/photoshow |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.photoshow.rule | ```Host(`photoshow.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.photoshow.entrypoints | ```https``` |
| traefik.http.services.photoshow.loadbalancer.server.port | ```5055``` |
| traefik.http.routers.photoshow.tls | ```true``` |
| traefik.http.routers.photoshow.tls.certresolver | ```default``` |
| traefik.http.routers.photoshow.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```PhotoShow``` |
| mafl.description | ```A simple, easy way to turn a photo album into a webgallery.``` |
| mafl.link | ```https://photoshow.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photos``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/photoshow-icon.png``` |

