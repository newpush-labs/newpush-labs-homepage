# Filezilla

![Logo](images/Filezilla.png)

## Description
FIleZilla Client is a fast and reliable cross\-platform FTP, FTPS and SFTP client with lots of useful features and an intuitive graphical user interface.

## Image
linuxserver/filezilla:latest

## Categories
- Ftpserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/filezilla |

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
| traefik.http.routers.filezilla.rule | ```Host(`filezilla.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.filezilla.entrypoints | ```https``` |
| traefik.http.services.filezilla.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.filezilla.tls | ```true``` |
| traefik.http.routers.filezilla.tls.certresolver | ```default``` |
| traefik.http.routers.filezilla.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Filezilla``` |
| mafl.description | ```FIleZilla Client is a fast and reliable cross-platform FTP, FTPS and SFTP client with lots of useful features and an intuitive graphical user interface.``` |
| mafl.link | ```https://filezilla.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Ftpserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/filezilla-logo.png``` |

