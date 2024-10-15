# Papermerge

![Logo](images/Papermerge.png)

## Description
Papermerge is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents. Instead of having piles of paper documents all over your desk, office or drawers \- you can quickly scan them and configure your scanner to directly upload to Papermerge DMS.'

## Image
linuxserver/papermerge:latest

## Categories
- Familyappserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/papermerge/config |
| /data | /opt/appdata/papermerge/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| REDIS_URL | REDIS_URL | `````` | ```Specify an external redis instance to use. Can optionally include a port (`redis:6379`) and/or db (`redis/foo`). If left blank or not included, will use a built-in redis instance. If changed after initial setup will also require manual modification of /config/settings.py``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.papermerge.rule | ```Host(`papermerge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.papermerge.entrypoints | ```https``` |
| traefik.http.services.papermerge.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.papermerge.tls | ```true``` |
| traefik.http.routers.papermerge.tls.certresolver | ```default``` |
| traefik.http.routers.papermerge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Papermerge``` |
| mafl.description | ```Papermerge is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents.``` |
| mafl.link | ```https://papermerge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/ciur/papermerge/master/artwork/logo.png``` |

