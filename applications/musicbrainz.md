# musicbrainz

![Logo](images/musicbrainz.png)

## Description
MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.

## Image
linuxserver/musicbrainz:latest

## Categories
- Musicserver

## Ports
- 5000:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/musicbrainz |
| /data | /opt/appdata/musicbrainz |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| BRAINZCODE | BRAINZCODE | `````` | `````` |
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.musicbrainz.rule | ```Host(`musicbrainz.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.musicbrainz.entrypoints | ```https``` |
| traefik.http.services.musicbrainz.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.musicbrainz.tls | ```true``` |
| traefik.http.routers.musicbrainz.tls.certresolver | ```default``` |
| traefik.http.routers.musicbrainz.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```MusicBrainz``` |
| mafl.description | ```MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.``` |
| mafl.link | ```https://musicbrainz.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Musicserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/musicbrainz-icon.png``` |

