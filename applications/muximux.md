# muximux

![Logo](images/muximux.png)

## Description
A lightweight portal to view, manage your HTPC apps without having to run anything more than a PHP enabled webserver. With Muximux you don't need to keep multiple tabs open, or bookmark the URL to all of your apps.

## Image
linuxserver/muximux:latest

## Categories
- Dashboardserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/muximux |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.muximux.rule | ```Host(`muximux.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.muximux.entrypoints | ```https``` |
| traefik.http.services.muximux.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.muximux.tls | ```true``` |
| traefik.http.routers.muximux.tls.certresolver | ```default``` |
| traefik.http.routers.muximux.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Muximux``` |
| mafl.description | ```A lightweight portal to view, manage your HTPC apps without having to run anything more than a PHP enabled webserver.``` |
| mafl.link | ```https://muximux.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/muximux-icon.png``` |

