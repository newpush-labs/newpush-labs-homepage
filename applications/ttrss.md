# tt-rss

![Logo](images/ttrss.png)

## Description
Tiny Tiny RSS is an open source web\-based news feed (RSS/Atom) reader and aggregator, designed to allow you to read news from any location, while feeling as close to a real desktop application as possible.

## Image
lunik1/tt-rss:latest

## Categories
- Smarthome

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/tt-rss |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.tt-rss.rule | ```Host(`tt-rss.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.tt-rss.entrypoints | ```https``` |
| traefik.http.services.tt-rss.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.tt-rss.tls | ```true``` |
| traefik.http.routers.tt-rss.tls.certresolver | ```default``` |
| traefik.http.routers.tt-rss.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Tiny Tiny RSS``` |
| mafl.description | ```Tiny Tiny RSS is an open source web-based news feed (RSS/Atom) reader and aggregator, designed to allow you to read news from any location, while feeling as close to a real desktop application as possible.``` |
| mafl.link | ```https://tt-rss.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/tt-rss-icon.png``` |

