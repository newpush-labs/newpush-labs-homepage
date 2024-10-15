# beets

![Logo](images/beets.png)

## Description
The purpose of beets is to get your music collection right once and for all. It catalogs your collection, automatically improving its metadata as it goes using the MusicBrainz database. Then it provides a bouquet of tools for manipulating and accessing your music.

## Image
linuxserver/beets:latest

## Categories
- Musicserver

## Ports
- 8337:8337/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/beets |
| /downloads | /appdata/downloads |
| /music | /appdata/music |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.beets.rule | ```Host(`beets.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.beets.entrypoints | ```https``` |
| traefik.http.services.beets.loadbalancer.server.port | ```8337``` |
| traefik.http.routers.beets.tls | ```true``` |
| traefik.http.routers.beets.tls.certresolver | ```default``` |
| traefik.http.routers.beets.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Beets``` |
| mafl.description | ```The purpose of beets is to get your music collection right once and for all.``` |
| mafl.link | ```https://beets.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Musicserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/beets-icon.png``` |

