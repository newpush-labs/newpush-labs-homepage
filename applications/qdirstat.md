# qdirstat

![Logo](images/qdirstat.png)

## Description
QDirStat is a graphical application to show where your disk space has gone and to help you to clean it up.

## Image
jlesage/qdirstat:latest

## Categories
- Utilities

## Ports
- 5800/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/qdirstat |
| /storage/opt | /opt |
| /storage/mnt | /mnt |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.qdirstat.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.qdirstat.entrypoints | ```https``` |
| traefik.http.routers.qdirstat.tls.certresolver | ```default``` |
| traefik.http.routers.qdirstat.rule | ```Host(`qdirstat.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.qdirstat.tls | ```true``` |
| traefik.http.routers.qdirstat.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```qdirstat``` |
| mafl.description | ```QDirStat is a graphical application to show where your disk space has gone and to help you to clean it up.``` |
| mafl.link | ```https://qdirstat.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utilities``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/cardigann.png``` |

