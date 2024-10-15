# freshrss

![Logo](images/freshrss.png)

## Description
A free, self\-hostable rss aggregator.

## Image
linuxserver/freshrss:latest

## Categories
- Smarthome

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/freshrss |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.freshrss.rule | ```Host(`freshrss.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.freshrss.entrypoints | ```https``` |
| traefik.http.services.freshrss.loadbalancer.server.port | ```8082``` |
| traefik.http.routers.freshrss.tls | ```true``` |
| traefik.http.routers.freshrss.tls.certresolver | ```default``` |
| traefik.http.routers.freshrss.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```FreshRSS``` |
| mafl.description | ```A free, self-hostable rss aggregator.``` |
| mafl.link | ```https://freshrss.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/freshrss-icon.png``` |

