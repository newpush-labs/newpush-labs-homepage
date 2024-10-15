# mstream

![Logo](images/mstream.png)

## Description
Mstream is a personal music streaming server. You can use mStream to stream your music from your home computer to any device, anywhere. There are mobile apps available for both Android and iPhone.

## Image
linuxserver/mstream:latest

## Categories
- Musicserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mstream |
| /music | /appdata/downloads |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mstream.rule | ```Host(`mstream.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mstream.entrypoints | ```https``` |
| traefik.http.services.mstream.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.mstream.tls | ```true``` |
| traefik.http.routers.mstream.tls.certresolver | ```default``` |
| traefik.http.routers.mstream.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mstream``` |
| mafl.description | ```Mstream is a personal music streaming server.``` |
| mafl.link | ```https://mstream.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Musicserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/mstream.png``` |

