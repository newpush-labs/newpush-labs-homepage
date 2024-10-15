# Your_spotify

![Logo](images/Your_spotify.png)

## Description
Your\_spotify is a self\-hosted application that tracks what you listen and offers you a dashboard to explore statistics about it! It's composed of a web server which polls the Spotify API every now and then and a web application on which you can explore your statistics.

## Image
linuxserver/your_spotify:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/your_spotify |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| APP_URL | APP_URL | ```http://localhost``` | ```The protocol and hostname where the app will be accessed.``` |
| SPOTIFY_PUBLIC | SPOTIFY_PUBLIC | `````` | ```Your Spotify application client ID.``` |
| SPOTIFY_SECRET | SPOTIFY_SECRET | `````` | ```Your Spotify application secret.``` |
| CORS | CORS | ```http://localhost:80,https://localhost:443``` | ```Allowed CORS sources, set to `all` to allow any source.``` |
| MONGO_ENDPOINT | MONGO_ENDPOINT | ```mongodb://mongo:27017/your_spotify``` | ```Set mongodb endpoint address/port.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.your_spotify.rule | ```Host(`your_spotify.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.your_spotify.entrypoints | ```https``` |
| traefik.http.services.your_spotify.loadbalancer.server.port | ```80``` |
| traefik.http.routers.your_spotify.tls | ```true``` |
| traefik.http.routers.your_spotify.tls.certresolver | ```default``` |
| traefik.http.routers.your_spotify.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Your_spotify``` |
| mafl.description | ```Your_spotify is a self-hosted application that tracks what you listen and offers you a dashboard to explore statistics about it!``` |
| mafl.link | ```https://your_spotify.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/your_spotify-logo.png``` |

