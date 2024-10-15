# Obsidian

![Logo](images/Obsidian.png)

## Description
Obsidian is a note\-taking app that lets you create, link, and organize your notes on your device, with hundreds of plugins and themes to customize your workflow. You can also publish your notes online, access them offline, and sync them securely with end\-to\-end encryption.

## Image
linuxserver/obsidian:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/obsidian |

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
| traefik.http.routers.obsidian.rule | ```Host(`obsidian.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.obsidian.entrypoints | ```https``` |
| traefik.http.services.obsidian.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.obsidian.tls | ```true``` |
| traefik.http.routers.obsidian.tls.certresolver | ```default``` |
| traefik.http.routers.obsidian.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Obsidian``` |
| mafl.description | ```Obsidian is a note-taking app that lets you create, link, and organize your notes on your device, with hundreds of plugins and themes to customize your workflow.``` |
| mafl.link | ```https://obsidian.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/obsidian-logo.png``` |

