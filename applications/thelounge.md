# thelounge

![Logo](images/thelounge.png)

## Description
A self\-hosted web IRC client.

## Image
linuxserver/thelounge:latest

## Categories
- Messenger

## Ports
- 9000:9000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/thelounge |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.thelounge.rule | ```Host(`thelounge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.thelounge.entrypoints | ```https``` |
| traefik.http.services.thelounge.loadbalancer.server.port | ```9000``` |
| traefik.http.routers.thelounge.tls | ```true``` |
| traefik.http.routers.thelounge.tls.certresolver | ```default``` |
| traefik.http.routers.thelounge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```TheLounge``` |
| mafl.description | ```A self-hosted web IRC client.``` |
| mafl.link | ```https://thelounge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Messenger``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/community-templates/master/lsiocommunity/img/shout-icon.png``` |

