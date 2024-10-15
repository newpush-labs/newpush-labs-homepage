# cardigann

![Logo](images/cardigann.png)

## Description
Cardigann, a server for adding extra indexers to Sonarr, SickRage and CouchPotato via Torznab and TorrentPotato proxies. Behind the scenes Cardigann logs in and runs searches and then transforms the results into a compatible format.

## Image
linuxserver/cardigann:latest

## Categories
- Downloaders

## Ports
- 5060/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/cardigann |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.cardigann.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.cardigann.entrypoints | ```https``` |
| traefik.http.routers.cardigann.tls.certresolver | ```default``` |
| traefik.http.routers.cardigann.rule | ```Host(`cardigann.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cardigann.tls | ```true``` |
| traefik.http.routers.cardigann.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cardigann``` |
| mafl.description | ```Cardigann, a server for adding extra indexers to Sonarr, SickRage and CouchPotato via Torznab and TorrentPotato proxies.``` |
| mafl.link | ```https://cardigann.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/cardigann.png``` |

