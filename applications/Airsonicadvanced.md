# Airsonic-advanced

![Logo](images/Airsonicadvanced.png)

## Description
Airsonic\-advanced is a free, web\-based media streamer, providing ubiquitious access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room.

## Image
linuxserver/airsonic-advanced:latest

## Categories
- Musicserver

## Ports
- 4040:4040/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/airsonic-advanced/config |
| /music | /opt/appdata/airsonic-advanced/music |
| /playlists | /opt/appdata/airsonic-advanced/playlists |
| /podcasts | /opt/appdata/airsonic-advanced/podcasts |
| /media | /opt/appdata/airsonic-advanced/media |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| CONTEXT_PATH | CONTEXT_PATH | ```<URL_BASE>``` | ```For setting url-base in reverse proxy setups.``` |
| JAVA_OPTS | JAVA_OPTS | ```<options>``` | ```For passing additional java options.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.airsonic-advanced.rule | ```Host(`airsonic-advanced.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.airsonic-advanced.entrypoints | ```https``` |
| traefik.http.services.airsonic-advanced.loadbalancer.server.port | ```4040``` |
| traefik.http.routers.airsonic-advanced.tls | ```true``` |
| traefik.http.routers.airsonic-advanced.tls.certresolver | ```default``` |
| traefik.http.routers.airsonic-advanced.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Airsonic-advanced``` |
| mafl.description | ```Airsonic-advanced is a free, web-based media streamer, providing ubiquitious access to your music.``` |
| mafl.link | ```https://airsonic-advanced.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Musicserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/airsonic-banner.png``` |

