# htpcmanager

![Logo](images/htpcmanager.png)

## Description
HTPC Manager, a front end for many htpc related applications. Uses the Hellowlol HTPC Manager fork.

## Image
linuxserver/htpcmanager:latest

## Categories
- Video
- Music
- Other

## Ports
- 8085:8085/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/htpcmanager |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.htpcmanager.rule | ```Host(`htpcmanager.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.htpcmanager.entrypoints | ```https``` |
| traefik.http.services.htpcmanager.loadbalancer.server.port | ```8085``` |
| traefik.http.routers.htpcmanager.tls | ```true``` |
| traefik.http.routers.htpcmanager.tls.certresolver | ```default``` |
| traefik.http.routers.htpcmanager.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```HTPC Manager``` |
| mafl.description | ```HTPC Manager, a front end for many htpc related applications.``` |
| mafl.link | ```https://htpcmanager.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Video``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/htpcmanager-icon.png``` |

