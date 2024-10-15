# Pwndrop

![Logo](images/Pwndrop.png)

## Description
Pwndrop is a self\-deployable file hosting service for sending out red teaming payloads or securely sharing your private files over HTTP and WebDAV.

## Image
linuxserver/pwndrop:latest

## Categories
- Taskserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pwndrop |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| SECRET_PATH | SECRET_PATH | ```/pwndrop``` | ```Secret path for admin access. Defaults to `/pwndrop`. This parameter only takes effect during initial install; it can later be changed in the web gui.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pwndrop.rule | ```Host(`pwndrop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pwndrop.entrypoints | ```https``` |
| traefik.http.services.pwndrop.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.pwndrop.tls | ```true``` |
| traefik.http.routers.pwndrop.tls.certresolver | ```default``` |
| traefik.http.routers.pwndrop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pwndrop``` |
| mafl.description | ```Pwndrop is a self-deployable file hosting service for sending out red teaming payloads or securely sharing your private files over HTTP and WebDAV.``` |
| mafl.link | ```https://pwndrop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/kgretzky/pwndrop/master/media/pwndrop-logo-512.png``` |

