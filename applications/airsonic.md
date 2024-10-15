# airsonic

![Logo](images/airsonic.png)

## Description
Airsonic is a free, web\-based media streamer, providing ubiqutious access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room.

## Image
linuxserver/airsonic:latest

## Categories
- Music

## Ports
- 4040:4040/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /music | /appdata/music |
| /playlists | /opt/appdata/airsonic/playlists |
| /podcasts | /appdata/podcasts |
| /media | /opt/appdata/airsonic/media |
| /config | /opt/appdata/airsonic/ |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| CONTEXT_PATH | CONTEXT_PATH | `````` | `````` |
| JAVA_OPTS | JAVA_OPTS | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.airsonic.rule | ```Host(`airsonic.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.airsonic.entrypoints | ```https``` |
| traefik.http.services.airsonic.loadbalancer.server.port | ```4040``` |
| traefik.http.routers.airsonic.tls | ```true``` |
| traefik.http.routers.airsonic.tls.certresolver | ```default``` |
| traefik.http.routers.airsonic.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Airsonic``` |
| mafl.description | ```Airsonic is a free, web-based media streamer, providing ubiqutious access to your music.``` |
| mafl.link | ```https://airsonic.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Music``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/airsonic-logo.png``` |

