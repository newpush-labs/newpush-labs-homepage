# Dillinger

![Logo](images/Dillinger.png)

## Description
Dillinger is a cloud\-enabled, mobile\-ready, offline\-storage, AngularJS powered HTML5 Markdown editor.

## Image
linuxserver/dillinger:latest

## Categories
- Development

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/dillinger |

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
| traefik.http.routers.dillinger.rule | ```Host(`dillinger.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.dillinger.entrypoints | ```https``` |
| traefik.http.services.dillinger.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.dillinger.tls | ```true``` |
| traefik.http.routers.dillinger.tls.certresolver | ```default``` |
| traefik.http.routers.dillinger.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Dillinger``` |
| mafl.description | ```Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.``` |
| mafl.link | ```https://dillinger.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Development``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/dillinger.png``` |

