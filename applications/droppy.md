# droppy

![Logo](images/droppy.png)

## Description
Droppy is a self\-hosted file storage server

## Image
silverwind/droppy:latest

## Categories
- Tools
- Networkweb
- Networkother

## Ports
- 8989/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /files/tvshows | /opt/appdata/tvshows |
| /files/movies | /opt/appdata/movies |
| /files/music | /opt/appdata/music |
| /files/photos | /opt/appdata/photos |
| /files/ebooks | /opt/appdata/ebooks |
| /files/documents | /opt/appdata/documents |
| /files/software | /opt/appdata/software |
| /files/downloads | /opt/appdata/downloads |
| /files/blackhole | /appdata/temp/blackhole |
| /files/processing | /appdata/temp/processing |
| /config | /opt/appdata/droppy |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| GID | GID | ```15000``` | `````` |
| UID | UID | ```15000``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.droppy.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.droppy.entrypoints | ```https``` |
| traefik.http.routers.droppy.tls.certresolver | ```default``` |
| traefik.http.routers.droppy.rule | ```Host(`droppy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.droppy.tls | ```true``` |
| traefik.http.routers.droppy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Droppy``` |
| mafl.description | ```Droppy is a self-hosted file storage server``` |
| mafl.link | ```https://droppy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/filebrowser-icon.png``` |

