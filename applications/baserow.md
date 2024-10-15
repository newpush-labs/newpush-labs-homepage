# baserow

![Logo](images/baserow.png)

## Description
 Open source no\-code database and Airtable alternative 

## Image
baserow/baserow:1.22.3

## Categories
- Downloaders
- Tools

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /baserow/data | /opt/appdata/baserow |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| BASEROW_PUBLIC_URL | BASEROW_PUBLIC_URL | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.baserow.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.baserow.entrypoints | ```https``` |
| traefik.http.routers.baserow.tls.certresolver | ```default``` |
| traefik.http.routers.baserow.rule | ```Host(`baserow.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.baserow.tls | ```true``` |
| traefik.http.routers.baserow.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Baserow``` |
| mafl.description | ``` Open source no-code database and Airtable alternative ``` |
| mafl.link | ```https://baserow.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/baserow.png``` |

