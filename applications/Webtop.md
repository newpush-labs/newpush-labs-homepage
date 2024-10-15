# Webtop

![Logo](images/Webtop.png)

## Description
Webtop \- Alpine, Ubuntu, Fedora, and Arch based containers containing full desktop environments in officially supported flavors accessible via any modern web browser.

## Image
linuxserver/webtop:latest

## Categories
- Managementutilityserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/webtop/config |
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| SUBFOLDER | SUBFOLDER | ```/``` | ```Specify a subfolder to use with reverse proxies, IE `/subfolder/```` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.webtop.rule | ```Host(`webtop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.webtop.entrypoints | ```https``` |
| traefik.http.services.webtop.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.webtop.tls | ```true``` |
| traefik.http.routers.webtop.tls.certresolver | ```default``` |
| traefik.http.routers.webtop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Webtop``` |
| mafl.description | ```Webtop - Alpine, Ubuntu, Fedora, and Arch based containers containing full desktop environments in officially supported flavors accessible via any modern web browser.``` |
| mafl.link | ```https://webtop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/webtop-logo.png``` |

