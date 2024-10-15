# pureftp

![Logo](images/pureftp.jpg)

## Description
Pure\-FTPd is a free (BSD), secure, production\-quality and standard\-conformant FTP server. 

## Image
stilliard/pure-ftpd:hardened

## Categories
- Networkother
- Utilities

## Ports
- 21/tcp
- 30000/tcp
- 30001/tcp
- 30002/tcp
- 30003/tcp
- 30004/tcp
- 30005/tcp
- 30006/tcp
- 30007/tcp
- 30008/tcp
- 30009/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/pure-ftpd/passwd | /opt/appdata/pureftp |
| /data/tvshows | /opt/appdata/tvshows |
| /data/movies | /opt/appdata/movies |
| /data/music | /opt/appdata/music |
| /data/ebooks | /opt/appdata/ebooks |
| /data/photos | /opt/appdata/photos |
| /data/documents | /opt/appdata/documents |
| /data/downloads | /opt/appdata/downloads |
| /data/software | /opt/appdata/software |
| /data/blackhole | /appdata/temp/blackhole |
| /data/processing | /appdata/temp/processing |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| FTP_USER_NAME | FTP_USER_NAME | ```depot``` | `````` |
| FTP_USER_PASS | FTP_USER_PASS | ```badpass``` | `````` |
| FTP_USER_HOME | FTP_USER_HOME | ```/data``` | `````` |
| FTP_USER_GID | FTP_USER_GID | ```15000``` | `````` |
| FTP_USER_UID | FTP_USER_UID | ```15000``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |
| PUBLICHOST | PUBLICHOST | ```localhost``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pureftp.rule | ```Host(`pureftp.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pureftp.entrypoints | ```https``` |
| traefik.http.services.pureftp.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.pureftp.tls | ```true``` |
| traefik.http.routers.pureftp.tls.certresolver | ```default``` |
| traefik.http.routers.pureftp.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pure-FTP Server``` |
| mafl.description | ```Pure-FTPd is a free (BSD), secure, production-quality and standard-conformant FTP server.``` |
| mafl.link | ```https://pureftp.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Networkother``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/pureftpd-icon.jpg``` |

