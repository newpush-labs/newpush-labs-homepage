# Doplarr

![Logo](images/Doplarr.png)

## Description
Doplarr is an \*arr request bot for Discord.'

## Image
linuxserver/doplarr:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/doplarr |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DISCORD__TOKEN | DISCORD__TOKEN | `````` | ```Specify your discord bot token.``` |
| OVERSEERR__API | OVERSEERR__API | `````` | ```Specify your Overseerr API key. Leave blank if using Radarr/Sonarr.``` |
| OVERSEERR__URL | OVERSEERR__URL | ```http://localhost:5055``` | ```Specify your Overseerr URL. Leave blank if using Radarr/Sonarr.``` |
| RADARR__API | RADARR__API | `````` | ```Specify your Radarr API key. Leave blank if using Overseerr.``` |
| RADARR__URL | RADARR__URL | ```http://localhost:7878``` | ```Specify your Radarr URL. Leave blank if using Overseerr.``` |
| SONARR__API | SONARR__API | `````` | ```Specify your Sonarr API key. Leave blank if using Overseerr.``` |
| SONARR__URL | SONARR__URL | ```http://localhost:8989``` | ```Specify your Sonarr URL. Leave blank if using Overseerr.``` |
| DISCORD__MAX_RESULTS | DISCORD__MAX_RESULTS | ```25``` | ```Sets the maximum size of the search results selection``` |
| DISCORD__REQUESTED_MSG_STYLE | DISCORD__REQUESTED_MSG_STYLE | ```:plain``` | ```Sets the style of the request alert message. One of `:plain` `:embed` `:none```` |
| SONARR__QUALITY_PROFILE | SONARR__QUALITY_PROFILE | `````` | ```The name of the quality profile to use by default for Sonarr``` |
| RADARR__QUALITY_PROFILE | RADARR__QUALITY_PROFILE | `````` | ```The name of the quality profile to use by default for Radarr``` |
| SONARR__ROOTFOLDER | SONARR__ROOTFOLDER | `````` | ```The root folder to use by default for Sonarr``` |
| RADARR__ROOTFOLDER | RADARR__ROOTFOLDER | `````` | ```The root folder to use by default for Radarr``` |
| SONARR__LANGUAGE_PROFILE | SONARR__LANGUAGE_PROFILE | `````` | ```The name of the language profile to use by default for Sonarr``` |
| OVERSEERR__DEFAULT_ID | OVERSEERR__DEFAULT_ID | `````` | ```The Overseerr user id to use by default if there is no associated discord account for the requester``` |
| PARTIAL_SEASONS | PARTIAL_SEASONS | ```true``` | ```Sets whether users can request partial seasons.``` |
| LOG_LEVEL | LOG_LEVEL | ```:info``` | ```The log level for the logging backend. This can be changed for debugging purposes. One of trace `:debug` `:info` `:warn` `:error` `:fatal` `:report```` |
| JAVA_OPTS | JAVA_OPTS | `````` | ```For passing additional java options.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.doplarr.rule | ```Host(`doplarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.doplarr.entrypoints | ```https``` |
| traefik.http.services.doplarr.loadbalancer.server.port | ```80``` |
| traefik.http.routers.doplarr.tls | ```true``` |
| traefik.http.routers.doplarr.tls.certresolver | ```default``` |
| traefik.http.routers.doplarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Doplarr``` |
| mafl.description | ```Doplarr is an *arr request bot for Discord.``` |
| mafl.link | ```https://doplarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/doplarr-logo_title.png``` |

