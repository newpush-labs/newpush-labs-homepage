# Apprise-api

![Logo](images/Appriseapi.png)

## Description
Apprise\-api Takes advantage of Apprise through your network with a user\-friendly API. Send notifications to more then 65\+ services. An incredibly lightweight gateway to Apprise. \* A production ready micro\-service at your disposal. Apprise API was designed to easily fit into existing (and new) eco\-systems that are looking for a simple notification solution.

## Image
linuxserver/apprise-api:latest

## Categories
- Taskserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/apprise-api |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.apprise-api.rule | ```Host(`apprise-api.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.apprise-api.entrypoints | ```https``` |
| traefik.http.services.apprise-api.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.apprise-api.tls | ```true``` |
| traefik.http.routers.apprise-api.tls.certresolver | ```default``` |
| traefik.http.routers.apprise-api.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Apprise-api``` |
| mafl.description | ```Apprise-api Takes advantage of Apprise through your network with a user-friendly API.``` |
| mafl.link | ```https://apprise-api.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/caronc/apprise-api/master/apprise_api/static/logo.png``` |

