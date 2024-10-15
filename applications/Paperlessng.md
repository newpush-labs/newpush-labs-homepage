# Paperless-ng

![Logo](images/Paperlessng.png)

## Description
Paperless\-ng is an application by Daniel Quinn and contributors that indexes your scanned documents and allows you to easily search for documents and store metadata alongside your documents.'

## Image
linuxserver/paperless-ng:latest

## Categories
- Familyappserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/paperless-ng/config |
| /data | /opt/appdata/paperless-ng/data |

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
| traefik.http.routers.paperless-ng.rule | ```Host(`paperless-ng.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.paperless-ng.entrypoints | ```https``` |
| traefik.http.services.paperless-ng.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.paperless-ng.tls | ```true``` |
| traefik.http.routers.paperless-ng.tls.certresolver | ```default``` |
| traefik.http.routers.paperless-ng.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Paperless-ng``` |
| mafl.description | ```Paperless-ng is an application by Daniel Quinn and contributors that indexes your scanned documents and allows you to easily search for documents and store metadata alongside your documents.``` |
| mafl.link | ```https://paperless-ng.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/jonaswinkler/paperless-ng/master/resources/logo/web/png/Color%20logo%20with%20background.png``` |

