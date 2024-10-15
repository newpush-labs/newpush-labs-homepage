# minetest

![Logo](images/minetest.png)

## Description
Server version of minetest, a free, open source alternative to minecraft.

## Image
linuxserver/minetest:latest

## Categories
- Other

## Ports
- 30000:30000/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config/.minetest |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.minetest.rule | ```Host(`minetest.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.minetest.entrypoints | ```https``` |
| traefik.http.services.minetest.loadbalancer.server.port | ```8081``` |
| traefik.http.routers.minetest.tls | ```true``` |
| traefik.http.routers.minetest.tls.certresolver | ```default``` |
| traefik.http.routers.minetest.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Minetest``` |
| mafl.description | ```Server version of minetest, a free, open source alternative to minecraft.``` |
| mafl.link | ```https://minetest.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/beta-templates/master/lsiodev/img/minetest-icon.png``` |

