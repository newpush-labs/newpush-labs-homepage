# gaps

![Logo](images/gaps.png)

## Description
Gaps searches through your Plex Server or local folders for all movies, then queries for known movies in the same collection.

## Image
housewrecker/gaps:latest

## Categories
- Tools
- Networkweb
- Networkother

## Ports
- 8484/tcp

## Volumes
| Container | Bind |
|-----------|------|

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.gaps.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.gaps.entrypoints | ```https``` |
| traefik.http.routers.gaps.tls.certresolver | ```default``` |
| traefik.http.routers.gaps.rule | ```Host(`gaps.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.gaps.tls | ```true``` |
| traefik.http.routers.gaps.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Gaps``` |
| mafl.description | ```Gaps searches through your Plex Server or local folders for all movies, then queries for known movies in the same collection.``` |
| mafl.link | ```https://gaps.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/plex-icon.png``` |

