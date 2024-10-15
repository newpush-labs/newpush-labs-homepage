# pydio

![Logo](images/pydio.png)

## Description
Pydio (formerly AjaXplorer) is a mature open source software solution for file sharing and synchronization. With intuitive user interfaces (web / mobile / desktop), Pydio provides enterprise\-grade features to gain back control and privacy of your data: user directory connectors, legacy filesystems drivers, comprehensive admin interface, and much more.

## Image
linuxserver/pydio:latest

## Categories
- Cloud
- Other

## Ports
- 443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pydio |
| /data | /opt/appdata/pydio |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pydio.rule | ```Host(`pydio.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pydio.entrypoints | ```https``` |
| traefik.http.services.pydio.loadbalancer.server.port | ```80``` |
| traefik.http.routers.pydio.tls | ```true``` |
| traefik.http.routers.pydio.tls.certresolver | ```default``` |
| traefik.http.routers.pydio.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pydio``` |
| mafl.description | ```Pydio (formerly AjaXplorer) is a mature open source software solution for file sharing and synchronization.``` |
| mafl.link | ```https://pydio.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Cloud``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/pydio-icon.png``` |

