# Calibre

![Logo](images/Calibre.png)

## Description
Calibre is a powerful and easy to use e\-book manager. Users say it’s outstanding and a must\-have. It’ll allow you to do nearly everything and it takes things a step beyond normal e\-book software. It’s also completely free and open source and great for both casual users and computer experts.

## Image
linuxserver/calibre:latest

## Categories
- Libraryserver

## Ports
- 8080:8080/tcp
- 8081:8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/calibre |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| PASSWORD | PASSWORD | `````` | ```Optionally set a password for the gui.``` |
| CLI_ARGS | CLI_ARGS | `````` | ```Optionally pass cli start arguments to calibre.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.calibre.rule | ```Host(`calibre.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.calibre.entrypoints | ```https``` |
| traefik.http.services.calibre.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.calibre.tls | ```true``` |
| traefik.http.routers.calibre.tls.certresolver | ```default``` |
| traefik.http.routers.calibre.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Calibre``` |
| mafl.description | ```Calibre is a powerful and easy to use e-book manager.``` |
| mafl.link | ```https://calibre.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://github.com/kovidgoyal/calibre/raw/master/resources/images/lt.png``` |

