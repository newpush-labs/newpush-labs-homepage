# Rsnapshot

![Logo](images/Rsnapshot.png)

## Description
Rsnapshot is a filesystem snapshot utility based on rsync. rsnapshot makes it easy to make periodic snapshots of local machines, and remote machines over ssh. The code makes extensive use of hard links whenever possible, to greatly reduce the disk space required.'

## Image
linuxserver/rsnapshot:latest

## Categories
- Backupandsyncserver

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/rsnapshot/config |
| /.snapshots | /opt/appdata/rsnapshot/.snapshots |
| /data | /opt/appdata/rsnapshot/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.rsnapshot.rule | ```Host(`rsnapshot.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.rsnapshot.entrypoints | ```https``` |
| traefik.http.services.rsnapshot.loadbalancer.server.port | ```80``` |
| traefik.http.routers.rsnapshot.tls | ```true``` |
| traefik.http.routers.rsnapshot.tls.certresolver | ```default``` |
| traefik.http.routers.rsnapshot.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Rsnapshot``` |
| mafl.description | ```Rsnapshot is a filesystem snapshot utility based on rsync.``` |
| mafl.link | ```https://rsnapshot.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Backupandsyncserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rsnapshot.png``` |

