# Phpmyadmin

![Logo](images/Phpmyadmin.png)

## Description
Phpmyadmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB.

## Image
linuxserver/phpmyadmin:latest

## Categories
- Databaseserver

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/phpmyadmin |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| PMA_ARBITRARY | PMA_ARBITRARY | ```1``` | ```Set to `1` to allow you to connect to any server. Setting to `0` will only allow you to connect to specified hosts (See Application Setup)``` |
| PMA_ABSOLUTE_URI | PMA_ABSOLUTE_URI | ```https://phpmyadmin.example.com``` | ```Set the URL you will use to access the web frontend``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.phpmyadmin.rule | ```Host(`phpmyadmin.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.phpmyadmin.entrypoints | ```https``` |
| traefik.http.services.phpmyadmin.loadbalancer.server.port | ```80``` |
| traefik.http.routers.phpmyadmin.tls | ```true``` |
| traefik.http.routers.phpmyadmin.tls.certresolver | ```default``` |
| traefik.http.routers.phpmyadmin.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Phpmyadmin``` |
| mafl.description | ```Phpmyadmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.``` |
| mafl.link | ```https://phpmyadmin.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Databaseserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/phpmyadmin-logo.png``` |

