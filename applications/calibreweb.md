# calibre-web

![Logo](images/calibreweb.png)

## Description
Calibre Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.

## Notes
Configuration * **/config** \- Where Calibre\-web should store it's database
* **/books** \- Path to your calibre library metadata.db file


## Image
linuxserver/calibre-web:latest

## Categories
- Libraryserver

## Ports
- 8083:8083/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /books | /appdata/books |
| /config | /opt/appdata/calibre-web |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.calibre-web.rule | ```Host(`calibre-web.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.calibre-web.entrypoints | ```https``` |
| traefik.http.services.calibre-web.loadbalancer.server.port | ```8083``` |
| traefik.http.routers.calibre-web.tls | ```true``` |
| traefik.http.routers.calibre-web.tls.certresolver | ```default``` |
| traefik.http.routers.calibre-web.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Calibre Web``` |
| mafl.description | ```Calibre Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.``` |
| mafl.link | ```https://calibre-web.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/calibre-web-icon.png``` |

