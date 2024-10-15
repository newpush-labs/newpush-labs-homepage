# homer

![Logo](images/homer.png)

## Description
A dead simple static HOMepage for your servER to keep your s ervices on hand, from a simple yaml configuration file.

## Notes
This container requires a yml file within the config volume. See the documentation here https://github.com/bastienwirtz/homer

## Image
b4bz/homer:latest

## Categories
- Dashboardserver

## Ports
- 8902:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /www/assets | /opt/appdata/homer/assets |
| /www/config.yml | /opt/appdata/homer |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.homer.rule | ```Host(`homer.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.homer.entrypoints | ```https``` |
| traefik.http.services.homer.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.homer.tls | ```true``` |
| traefik.http.routers.homer.tls.certresolver | ```default``` |
| traefik.http.routers.homer.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Homer``` |
| mafl.description | ```A dead simple static HOMepage for your servER to keep your s ervices on hand, from a simple yaml configuration file.``` |
| mafl.link | ```https://homer.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/homer.png``` |

