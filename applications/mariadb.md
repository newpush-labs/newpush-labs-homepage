# mariadb

![Logo](images/mariadb.png)

## Description
An Enhanced drop in replacement for Mysql.

## Image
linuxserver/mariadb:latest

## Categories
- Databaseserver

## Ports
- 3306:3306/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mariadb |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| MYSQL_ROOT_PASSWORD | MYSQL_ROOT_PASSWORD | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mariadb.rule | ```Host(`mariadb.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mariadb.entrypoints | ```https``` |
| traefik.http.services.mariadb.loadbalancer.server.port | ```3306``` |
| traefik.http.routers.mariadb.tls | ```true``` |
| traefik.http.routers.mariadb.tls.certresolver | ```default``` |
| traefik.http.routers.mariadb.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```MariaDB``` |
| mafl.description | ```An Enhanced drop in replacement for Mysql.``` |
| mafl.link | ```https://mariadb.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Databaseserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/mariadb-icon.png``` |

