# jackett

![Logo](images/jackett.png)

## Description
Jackett works as a proxy server it translates queries from apps like Sonarr etc into tracker\-site\-specific http queries and parses the html response sending results back to the requesting software.

## Image
linuxserver/jackett:latest

## Categories
- Proxyserver

## Ports
- 9117:9117/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/jackett |
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
| traefik.http.routers.jackett.rule | ```Host(`jackett.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.jackett.entrypoints | ```https``` |
| traefik.http.services.jackett.loadbalancer.server.port | ```9117``` |
| traefik.http.routers.jackett.tls | ```true``` |
| traefik.http.routers.jackett.tls.certresolver | ```default``` |
| traefik.http.routers.jackett.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Jackett``` |
| mafl.description | ```Jackett works as a proxy server it translates queries from apps like Sonarr etc into tracker-site-specific http queries and parses the html response sending results back to the requesting software.``` |
| mafl.link | ```https://jackett.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxyserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/jacket-icon.png``` |

