# Firefox

![Logo](images/Firefox.png)

## Description
Firefox Browser, also known as Mozilla Firefox or simply Firefox, is a free and open\-source web browser developed by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. Firefox uses the Gecko layout engine to render web pages, which implements current and anticipated web standards.

## Image
linuxserver/firefox:latest

## Categories
- Familyappserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/firefox |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.firefox.rule | ```Host(`firefox.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.firefox.entrypoints | ```https``` |
| traefik.http.services.firefox.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.firefox.tls | ```true``` |
| traefik.http.routers.firefox.tls.certresolver | ```default``` |
| traefik.http.routers.firefox.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Firefox``` |
| mafl.description | ```Firefox Browser, also known as Mozilla Firefox or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, the Mozilla Corporation.``` |
| mafl.link | ```https://firefox.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/firefox-logo.png``` |

