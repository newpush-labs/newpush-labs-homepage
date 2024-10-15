# Gitqlient

![Logo](images/Gitqlient.png)

## Description
GitQlient is a multi\-platform Git client originally forked from QGit. Nowadays it goes beyond of just a fork and adds a lot of new functionality.

## Image
linuxserver/gitqlient:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/gitqlient |

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
| traefik.http.routers.gitqlient.rule | ```Host(`gitqlient.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.gitqlient.entrypoints | ```https``` |
| traefik.http.services.gitqlient.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.gitqlient.tls | ```true``` |
| traefik.http.routers.gitqlient.tls.certresolver | ```default``` |
| traefik.http.routers.gitqlient.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Gitqlient``` |
| mafl.description | ```GitQlient is a multi-platform Git client originally forked from QGit.``` |
| mafl.link | ```https://gitqlient.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/gitqlient-icon.png``` |

