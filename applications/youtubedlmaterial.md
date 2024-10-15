# youtubedl-material

![Logo](images/youtubedlmaterial.png)

## Description
YoutubeDL\-Material is a Material Design frontend for youtube\-dl. It's coded using Angular 9 for the frontend, and Node.js on the backend.

## Image
tzahi12345/youtubedl-material:latest

## Categories
- Downloaders

## Ports
- 17442:17442/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/appdata | /opt/appdata/ytdlm |
| /app/video | /opt/appdata/youtube/video |
| /app/subscriptions | /opt/appdata/youtube/subscriptions |
| /app/users | /opt/appdata/youtube/users |
| /app/audio | /opt/appdata/youtube/audio |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.youtubedl-material.rule | ```Host(`youtubedl-material.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.youtubedl-material.entrypoints | ```https``` |
| traefik.http.services.youtubedl-material.loadbalancer.server.port | ```17442``` |
| traefik.http.routers.youtubedl-material.tls | ```true``` |
| traefik.http.routers.youtubedl-material.tls.certresolver | ```default``` |
| traefik.http.routers.youtubedl-material.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```YouTubeDL-Material``` |
| mafl.description | ```YoutubeDL-Material is a Material Design frontend for youtube-dl.``` |
| mafl.link | ```https://youtubedl-material.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/ytdlm.png``` |

