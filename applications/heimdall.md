# heimdall

![Logo](images/heimdall.png)

## Description
Heimdall is a way to organise all those links to your most used web sites and web applications in a simple way.

## Image
linuxserver/heimdall:latest

## Categories
- Dashboardserver

## Ports
- 80/tcp
- 443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/heimdall |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.heimdall.rule | ```Host(`heimdall.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.heimdall.entrypoints | ```https``` |
| traefik.http.services.heimdall.loadbalancer.server.port | ```8181``` |
| traefik.http.routers.heimdall.tls | ```true``` |
| traefik.http.routers.heimdall.tls.certresolver | ```default``` |
| traefik.http.routers.heimdall.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Heimdall``` |
| mafl.description | ```Heimdall is a way to organise all those links to your most used web sites and web applications in a simple way.``` |
| mafl.link | ```https://heimdall.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/heimdall-icon.png``` |

