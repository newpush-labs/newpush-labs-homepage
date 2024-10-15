# piwigo

![Logo](images/piwigo.png)

## Description
Piwigo is photo gallery software for the web, built by an active community of users and developers.

## Image
linuxserver/piwigo:latest

## Categories
- Photos

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/piwigo |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.piwigo.rule | ```Host(`piwigo.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.piwigo.entrypoints | ```https``` |
| traefik.http.services.piwigo.loadbalancer.server.port | ```53``` |
| traefik.http.routers.piwigo.tls | ```true``` |
| traefik.http.routers.piwigo.tls.certresolver | ```default``` |
| traefik.http.routers.piwigo.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Piwigo``` |
| mafl.description | ```Piwigo is photo gallery software for the web, built by an active community of users and developers.``` |
| mafl.link | ```https://piwigo.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photos``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/piwigo-icon.png``` |

