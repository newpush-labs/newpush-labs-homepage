# Kanzi

![Logo](images/Kanzi.png)

## Description
Kanzi, formerly titled Kodi\-Alexa, this custom skill is the ultimate voice remote control for navigating Kodi. It can do anything you can think of (100\+ intents). This container also contains lexigram\-cli to setup Kanzi with an Amazon Developer Account and automatically deploy it to Amazon.

## Image
linuxserver/kanzi:latest

## Categories
- Mediaserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kanzi |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| INVOCATION_NAME | INVOCATION_NAME | ```kanzi``` | ```Specify an invocation name for this skill, use either kanzi or kod.``` |
| URL_ENDPOINT | URL_ENDPOINT | ```https://server.com/kanzi/``` | ```Specify the URL at which the webserver is reachable either `https://kanzi.server.com/` or `https://server.com/kanzi/` Note the trailing slash **MUST** be included.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kanzi.rule | ```Host(`kanzi.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kanzi.entrypoints | ```https``` |
| traefik.http.services.kanzi.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.kanzi.tls | ```true``` |
| traefik.http.routers.kanzi.tls.certresolver | ```default``` |
| traefik.http.routers.kanzi.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kanzi``` |
| mafl.description | ```Kanzi, formerly titled Kodi-Alexa, this custom skill is the ultimate voice remote control for navigating Kodi.``` |
| mafl.link | ```https://kanzi.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kanzi.png``` |

