# duplicati

![Logo](images/duplicati.png)

## Description
Free backup software to store encrypted backups online, Duplicati works with standard protocols like FTP, SSH, WebDAV as well as popular services like Microsoft OneDrive, Amazon Cloud Drive and S3, Google Drive, box.com, Mega, hubiC and many others.

## Image
linuxserver/duplicati:latest

## Categories
- Backupandsyncserver

## Ports
- 8200:8200/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/duplicati |
| /tmp |  |
| /backups |  |
| /source |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.duplicati.rule | ```Host(`duplicati.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.duplicati.entrypoints | ```https``` |
| traefik.http.services.duplicati.loadbalancer.server.port | ```8200``` |
| traefik.http.routers.duplicati.tls | ```true``` |
| traefik.http.routers.duplicati.tls.certresolver | ```default``` |
| traefik.http.routers.duplicati.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Duplicati``` |
| mafl.description | ```Free backup software to store encrypted backups online, Duplicati works with standard protocols like FTP, SSH, WebDAV as well as popular services like Microsoft OneDrive, Amazon Cloud Drive and S3, Google Drive, box.``` |
| mafl.link | ```https://duplicati.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Backupandsyncserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/duplicati-icon.png``` |

