# nzbhydra2

![Logo](images/nzbhydra2.png)

## Description
NZBHydra is a meta search for NZB indexers and the "spiritual successor" to NZBmegasearcH. It provides easy access to a number of raw and newznab based indexers.

## Image
linuxserver/nzbhydra2:latest

## Categories
- Proxyserver

## Ports
- 5076:5076/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/nzbhydra2 |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nzbhydra2.rule | ```Host(`nzbhydra2.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nzbhydra2.entrypoints | ```https``` |
| traefik.http.services.nzbhydra2.loadbalancer.server.port | ```5076``` |
| traefik.http.routers.nzbhydra2.tls | ```true``` |
| traefik.http.routers.nzbhydra2.tls.certresolver | ```default``` |
| traefik.http.routers.nzbhydra2.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```NZBHydra 2``` |
| mafl.description | ```NZBHydra is a meta search for NZB indexers and the "spiritual successor" to NZBmegasearcH.``` |
| mafl.link | ```https://nzbhydra2.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxyserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/hydra-icon.png``` |

