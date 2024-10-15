# MagicMirror2

![Logo](images/MagicMirror2.png)

## Description
MagicMirror2 Server

## Image
karsten13/magicmirror:latest

## Categories
- Dashboardserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/magic_mirror/config |  |
| /opt/magic_mirror/modules |  |
| /opt/magic_mirror/css |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.magicmirror2.rule | ```Host(`magicmirror2.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.magicmirror2.entrypoints | ```https``` |
| traefik.http.services.magicmirror2.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.magicmirror2.tls | ```true``` |
| traefik.http.routers.magicmirror2.tls.certresolver | ```default``` |
| traefik.http.routers.magicmirror2.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```MagicMirror2``` |
| mafl.description | ```MagicMirror2 Server``` |
| mafl.link | ```https://magicmirror2.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://github.com/MichMich/MagicMirror/raw/master/.github/header.png``` |

