# Openvscode-server

![Logo](images/Openvscodeserver.png)

## Description
Openvscode\-server provides a version of VS Code that runs a server on a remote machine and allows access through a modern web browser.

## Image
linuxserver/openvscode-server:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/openvscode-server |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| CONNECTION_TOKEN | CONNECTION_TOKEN | `````` | ```Optional security token for accessing the Web UI (ie. `supersecrettoken`).``` |
| CONNECTION_SECRET | CONNECTION_SECRET | `````` | ```Optional path to a file inside the container that contains the security token for accessing the Web UI (ie. `/path/to/file`). Overrides `CONNECTION_TOKEN`.``` |
| SUDO_PASSWORD | SUDO_PASSWORD | ```password``` | ```If this optional variable is set, user will have sudo access in the openvscode-server terminal with the specified password.``` |
| SUDO_PASSWORD_HASH | SUDO_PASSWORD_HASH | `````` | ```Optionally set sudo password via hash (takes priority over `SUDO_PASSWORD` var). Format is `$type$salt$hashed`.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.openvscode-server.rule | ```Host(`openvscode-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.openvscode-server.entrypoints | ```https``` |
| traefik.http.services.openvscode-server.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.openvscode-server.tls | ```true``` |
| traefik.http.routers.openvscode-server.tls.certresolver | ```default``` |
| traefik.http.routers.openvscode-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Openvscode-server``` |
| mafl.description | ```Openvscode-server provides a version of VS Code that runs a server on a remote machine and allows access through a modern web browser.``` |
| mafl.link | ```https://openvscode-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/openvscode-server-logo.png``` |

