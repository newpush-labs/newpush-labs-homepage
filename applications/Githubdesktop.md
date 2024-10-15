# Github-desktop

![Logo](images/Githubdesktop.png)

## Description
Github Desktop is an open source Electron\-based GitHub app. It is written in TypeScript and uses React.

## Image
linuxserver/github-desktop:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/github-desktop |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.github-desktop.rule | ```Host(`github-desktop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.github-desktop.entrypoints | ```https``` |
| traefik.http.services.github-desktop.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.github-desktop.tls | ```true``` |
| traefik.http.routers.github-desktop.tls.certresolver | ```default``` |
| traefik.http.routers.github-desktop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Github-desktop``` |
| mafl.description | ```Github Desktop is an open source Electron-based GitHub app.``` |
| mafl.link | ```https://github-desktop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/github-desktop-icon.png``` |

