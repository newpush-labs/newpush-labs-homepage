# guacamole

![Logo](images/guacamole.png)

## Description
A clientless remote desktop gateway.

## Notes
The default login will be guacadmin/guacadmin. It is common practice to add a new admin user and remove the default user for Guacamole.

## Image
oznu/guacamole:latest

## Categories
- Managementutilityserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/guacamole |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.guacamole.rule | ```Host(`guacamole.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.guacamole.entrypoints | ```https``` |
| traefik.http.services.guacamole.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.guacamole.tls | ```true``` |
| traefik.http.routers.guacamole.tls.certresolver | ```default``` |
| traefik.http.routers.guacamole.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Guacamole``` |
| mafl.description | ```A clientless remote desktop gateway.``` |
| mafl.link | ```https://guacamole.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/guacamole.png``` |

