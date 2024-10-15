# Pydio-cells

![Logo](images/Pydiocells.png)

## Description
Pydio\-cells is the nextgen file sharing platform for organizations. It is a full rewrite of the Pydio project using the Go language following a micro\-service architecture.

## Image
linuxserver/pydio-cells:latest

## Categories
- Uncategorized Services

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pydio-cells |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| EXTERNALURL | EXTERNALURL | ```yourdomain.url``` | ```The external url you would like to use to access Pydio Cells (Can be https://domain.url or https://IP:PORT).``` |
| SERVER_IP | SERVER_IP | ```0.0.0.0``` | ```Enter the LAN IP of the docker server. Required for local access by IP, added to self signed cert as SAN (not required if accessing only through reverse proxy).``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pydio-cells.rule | ```Host(`pydio-cells.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pydio-cells.entrypoints | ```https``` |
| traefik.http.services.pydio-cells.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.pydio-cells.tls | ```true``` |
| traefik.http.routers.pydio-cells.tls.certresolver | ```default``` |
| traefik.http.routers.pydio-cells.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pydio-cells``` |
| mafl.description | ```Pydio-cells is the nextgen file sharing platform for organizations.``` |
| mafl.link | ```https://pydio-cells.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pydio-cells-icon.png``` |

