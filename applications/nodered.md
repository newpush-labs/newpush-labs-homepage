# nodered

![Logo](images/nodered.svg)

## Description
Node\-RED provides a browser\-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette.

## Image
nodered/node-red

## Categories
- Smarthome

## Ports
- 1880:1880/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/nodered |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nodered.rule | ```Host(`nodered.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nodered.entrypoints | ```https``` |
| traefik.http.services.nodered.loadbalancer.server.port | ```1880``` |
| traefik.http.routers.nodered.tls | ```true``` |
| traefik.http.routers.nodered.tls.certresolver | ```default``` |
| traefik.http.routers.nodered.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nodered``` |
| mafl.description | ```Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette.``` |
| mafl.link | ```https://nodered.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/xneo1/portainer_templates/master/Images/node-red-icon.svg``` |

