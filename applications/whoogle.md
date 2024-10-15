# whoogle

![Logo](images/whoogle.png)

## Description
Self\-hosted, ad\-free, privacy\-respecting Google metasearch engine.

## Image
benbusby/whoogle-search:latest

## Categories
- Familyappserver

## Ports
- 5001:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/whoogle |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.whoogle.rule | ```Host(`whoogle.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.whoogle.entrypoints | ```https``` |
| traefik.http.services.whoogle.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.whoogle.tls | ```true``` |
| traefik.http.routers.whoogle.tls.certresolver | ```default``` |
| traefik.http.routers.whoogle.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Whoogle``` |
| mafl.description | ```Self-hosted, ad-free, privacy-respecting Google metasearch engine.``` |
| mafl.link | ```https://whoogle.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/whoogle.png``` |

