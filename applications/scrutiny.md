# scrutiny

![Logo](images/scrutiny.png)

## Description
WebUI for smartd S.M.A.R.T monitoring

## Image
analogj/scrutiny:latest

## Categories
- Monitoring

## Ports
- 8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /scrutiny/config/ | /opt/appdata/scrutiny |
| /run/udev | /run/udev |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.scrutiny.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.scrutiny.entrypoints | ```https``` |
| traefik.http.routers.scrutiny.tls.certresolver | ```default``` |
| traefik.http.routers.scrutiny.rule | ```Host(`scrutiny.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.scrutiny.tls | ```true``` |
| traefik.http.routers.scrutiny.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Scrutiny``` |
| mafl.description | ```WebUI for smartd S.``` |
| mafl.link | ```https://scrutiny.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Monitoring``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/scrutiny.png``` |

