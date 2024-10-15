# dashmachine

![Logo](images/dashmachine.png)

## Description
Another application bookmark dashboard, with fun features.

## Image
rmountjoy/dashmachine:latest

## Categories
- Dashboardserver

## Ports
- 5000:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /dashmachine/dashmachine/user_data | /opt/appdata/dashmachine |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.dashmachine.rule | ```Host(`dashmachine.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.dashmachine.entrypoints | ```https``` |
| traefik.http.services.dashmachine.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.dashmachine.tls | ```true``` |
| traefik.http.routers.dashmachine.tls.certresolver | ```default``` |
| traefik.http.routers.dashmachine.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```DashMachine``` |
| mafl.description | ```Another application bookmark dashboard, with fun features.``` |
| mafl.link | ```https://dashmachine.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/dashmachine_logo.png``` |

