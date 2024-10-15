# znc

![Logo](images/znc.png)

## Description
ZNC is an IRC network bouncer or BNC. It can detach the client from the actual IRC server, and also from selected channels. Multiple clients from different locations can connect to a single ZNC account simultaneously and therefore appear under the same nickname on IRC.

## Image
linuxserver/znc:latest

## Categories
- Messenger

## Ports
- 6501:6501/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/znc |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.znc.rule | ```Host(`znc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.znc.entrypoints | ```https``` |
| traefik.http.services.znc.loadbalancer.server.port | ```6501``` |
| traefik.http.routers.znc.tls | ```true``` |
| traefik.http.routers.znc.tls.certresolver | ```default``` |
| traefik.http.routers.znc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ZNC``` |
| mafl.description | ```ZNC is an IRC network bouncer or BNC.``` |
| mafl.link | ```https://znc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Messenger``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/znc-icon.png``` |

