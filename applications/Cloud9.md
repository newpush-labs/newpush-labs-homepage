# Cloud9

![Logo](images/Cloud9.png)

## Description
Cloud9 Cloud9 is a complete web based IDE with terminal access. This container is for running their core SDK locally and developing plugins.

## Image
linuxserver/cloud9:latest

## Categories
- Codeserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/cloud9/config |
| /code | /opt/appdata/cloud9/code |
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| GITURL | GITURL | ```https://github.com/linuxserver/docker-cloud9.git``` | ```Specify a git repo to checkout on first startup``` |
| USERNAME | USERNAME | `````` | ```Optionally specify a username for http auth``` |
| PASSWORD | PASSWORD | `````` | ```Optionally specify a password for http auth (if USERNAME and PASSWORD are not set, there will be no http auth)``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.cloud9.rule | ```Host(`cloud9.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cloud9.entrypoints | ```https``` |
| traefik.http.services.cloud9.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.cloud9.tls | ```true``` |
| traefik.http.routers.cloud9.tls.certresolver | ```default``` |
| traefik.http.routers.cloud9.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cloud9``` |
| mafl.description | ```Cloud9 Cloud9 is a complete web based IDE with terminal access.``` |
| mafl.link | ```https://cloud9.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Codeserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/cloud9.png``` |

