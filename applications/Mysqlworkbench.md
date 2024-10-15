# Mysql-workbench

![Logo](images/Mysqlworkbench.png)

## Description
MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. MySQL Workbench provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more.

## Image
linuxserver/mysql-workbench:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mysql-workbench |

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
| traefik.http.routers.mysql-workbench.rule | ```Host(`mysql-workbench.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mysql-workbench.entrypoints | ```https``` |
| traefik.http.services.mysql-workbench.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.mysql-workbench.tls | ```true``` |
| traefik.http.routers.mysql-workbench.tls.certresolver | ```default``` |
| traefik.http.routers.mysql-workbench.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mysql-workbench``` |
| mafl.description | ```MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.``` |
| mafl.link | ```https://mysql-workbench.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mysql-workbench-icon.png``` |

