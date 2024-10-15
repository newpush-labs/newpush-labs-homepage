# vsftpd

![Logo](images/vsftpd.jpg)

## Description
Secure, fast FTP server for UNIX\-like systems

## Image
delfer/alpine-ftp-server

## Categories
- Networkother
- Utilities

## Ports
- 21/tcp
- 21000/tcp
- 21001/tcp
- 21002/tcp
- 21003/tcp
- 21004/tcp
- 21005/tcp
- 21006/tcp
- 21007/tcp
- 21008/tcp
- 21009/tcp
- 21010/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /home/depot/tvshows | /opt/appdata/tvshows |
| /home/depot/movies | /opt/appdata/movies |
| /home/depot/music | /opt/appdata/music |
| /home/depot/ebooks | /opt/appdata/ebooks |
| /home/depot/photos | /opt/appdata/photos |
| /home/depot/documents | /opt/appdata/documents |
| /home/depot/downloads | /opt/appdata/downloads |
| /home/depot/software | /opt/appdata/software |
| /home/depot/blackhole | /appdata/temp/blackhole |
| /home/depot/processing | /appdata/temp/processing |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| ADDRESS | ADDRESS | `````` | `````` |
| USERS | USERS | ```depot|badpass|/home/depot|15000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.vsftpd.rule | ```Host(`vsftpd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.vsftpd.entrypoints | ```https``` |
| traefik.http.services.vsftpd.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.vsftpd.tls | ```true``` |
| traefik.http.routers.vsftpd.tls.certresolver | ```default``` |
| traefik.http.routers.vsftpd.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```vsftpd FTP Server``` |
| mafl.description | ```Secure, fast FTP server for UNIX-like systems``` |
| mafl.link | ```https://vsftpd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Networkother``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/pureftpd-icon.jpg``` |

