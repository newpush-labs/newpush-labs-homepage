# couchpotato

![Logo](images/couchpotato.png)

## Description
CouchPotato (CP) is an automatic NZB and torrent downloader. You can keep a "movies I want"\-list and it will search for NZBs/torrents of these movies every X hours. Once a movie is found, it will send it to SABnzbd or download the torrent to a specified directory.

## Image
linuxserver/couchpotato:latest

## Categories
- Usenetserver

## Ports
- 5050:5050/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/couchpotato |
| /downloads | /appdata/downloads |
| /movies | /appdata/movies |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.couchpotato.rule | ```Host(`couchpotato.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.couchpotato.entrypoints | ```https``` |
| traefik.http.services.couchpotato.loadbalancer.server.port | ```5050``` |
| traefik.http.routers.couchpotato.tls | ```true``` |
| traefik.http.routers.couchpotato.tls.certresolver | ```default``` |
| traefik.http.routers.couchpotato.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```CouchPotato``` |
| mafl.description | ```CouchPotato (CP) is an automatic NZB and torrent downloader.``` |
| mafl.link | ```https://couchpotato.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/couchpotato-icon.png``` |

