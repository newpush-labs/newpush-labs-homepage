# dozzle

![Logo](images/dozzle.png)

## Description
 Realtime log viewer for docker containers. 

## Image
amir20/dozzle:latest

## Categories
- Tools

## Ports
- 8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.dozzle.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.dozzle.entrypoints | ```https``` |
| traefik.http.routers.dozzle.tls.certresolver | ```default``` |
| traefik.http.routers.dozzle.rule | ```Host(`dozzle.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.dozzle.tls | ```true``` |
| traefik.http.routers.dozzle.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Dozzle``` |
| mafl.description | ```Realtime log viewer for docker containers.``` |
| mafl.link | ```https://dozzle.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/dozzle.png``` |

