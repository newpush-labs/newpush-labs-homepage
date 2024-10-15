# Snipe-it

![Logo](images/Snipeit.png)

## Description
Snipe\-it makes asset management easy. It was built by people solving real\-world IT and asset management problems, and a solid UX has always been a top priority. Straightforward design and bulk actions mean getting things done faster.

## Image
linuxserver/snipe-it:latest

## Categories
- Managementutilityserver

## Ports
- 8080:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/snipe-it |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| APP_URL | APP_URL | ```<hostname or ip>``` | ```Hostname or IP and port if applicable IE <ip or hostname>:8080``` |
| MYSQL_PORT_3306_TCP_ADDR | MYSQL_PORT_3306_TCP_ADDR | ```<mysql host>``` | ```Mysql hostname or IP to use``` |
| MYSQL_PORT_3306_TCP_PORT | MYSQL_PORT_3306_TCP_PORT | ```<mysql port>``` | ```Mysql port to use``` |
| MYSQL_DATABASE | MYSQL_DATABASE | ```<mysql database>``` | ```Mysql database to use``` |
| MYSQL_USER | MYSQL_USER | ```<mysql pass>``` | ```Mysql user to use``` |
| MYSQL_PASSWORD | MYSQL_PASSWORD | ```changeme``` | ```Mysql password to use``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.snipe-it.rule | ```Host(`snipe-it.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.snipe-it.entrypoints | ```https``` |
| traefik.http.services.snipe-it.loadbalancer.server.port | ```80``` |
| traefik.http.routers.snipe-it.tls | ```true``` |
| traefik.http.routers.snipe-it.tls.certresolver | ```default``` |
| traefik.http.routers.snipe-it.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Snipe-it``` |
| mafl.description | ```Snipe-it makes asset management easy.``` |
| mafl.link | ```https://snipe-it.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://s3-us-west-2.amazonaws.com/linuxserver-docs/images/snipe-it-logo500x500.png``` |

