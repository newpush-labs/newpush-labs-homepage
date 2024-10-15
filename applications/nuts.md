# nuts

## Description
Network UPS Tools server

## Image
upshift/nut-upsd

## Categories
- Network

## Ports
- 3493:3493/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app | /opt/appdata/nuts |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nuts.rule | ```Host(`nuts.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nuts.entrypoints | ```https``` |
| traefik.http.services.nuts.loadbalancer.server.port | ```3493``` |
| traefik.http.routers.nuts.tls | ```true``` |
| traefik.http.routers.nuts.tls.certresolver | ```default``` |
| traefik.http.routers.nuts.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```NUTS``` |
| mafl.description | ```Network UPS Tools server``` |
| mafl.link | ```https://nuts.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Network``` |
| mafl.icon.url | `````` |

