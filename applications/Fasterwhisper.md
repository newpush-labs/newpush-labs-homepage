# Faster-whisper

## Description
Faster\-whisper is a reimplementation of OpenAI's Whisper model using CTranslate2, which is a fast inference engine for Transformer models. This container provides a Wyoming protocol server for faster\-whisper.

## Image
linuxserver/faster-whisper:latest

## Categories
- Uncategorized Services

## Ports
- 10300:10300/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/faster-whisper |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| WHISPER_MODEL | WHISPER_MODEL | ```tiny-int8``` | ```Whisper model that will be used for transcription. From `tiny`, `base`, `small` and `medium`, all with `-int8` compressed variants``` |
| WHISPER_BEAM | WHISPER_BEAM | ```1``` | ```Number of candidates to consider simultaneously during transcription.``` |
| WHISPER_LANG | WHISPER_LANG | ```en``` | ```Language that you will speak to the add-on.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.faster-whisper.rule | ```Host(`faster-whisper.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.faster-whisper.entrypoints | ```https``` |
| traefik.http.services.faster-whisper.loadbalancer.server.port | ```10300``` |
| traefik.http.routers.faster-whisper.tls | ```true``` |
| traefik.http.routers.faster-whisper.tls.certresolver | ```default``` |
| traefik.http.routers.faster-whisper.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Faster-whisper``` |
| mafl.description | ```Faster-whisper is a reimplementation of OpenAI's Whisper model using CTranslate2, which is a fast inference engine for Transformer models.``` |
| mafl.link | ```https://faster-whisper.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/faster-whisper-logo.png``` |

