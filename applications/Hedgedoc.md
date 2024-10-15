# Hedgedoc

![Logo](images/Hedgedoc.png)

## Description
HedgeDoc gives you access to all your files wherever you are. HedgeDoc is a real\-time, multi\-platform collaborative markdown note editor. This means that you can write notes with other people on your desktop, tablet or even on the phone. You can sign\-in via multiple auth providers like Facebook, Twitter, GitHub and many more on the homepage.

## Image
linuxserver/hedgedoc:latest

## Categories
- Documentation

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/hedgedoc |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DB_HOST | DB_HOST | ```<hostname or ip>``` | ```Host address of mariadb database``` |
| DB_PORT | DB_PORT | ```3306``` | ```Port to access mariadb database default is 3306``` |
| DB_USER | DB_USER | ```hedgedoc``` | ```Database user``` |
| DB_PASS | DB_PASS | ```<secret password>``` | ```Database password``` |
| DB_NAME | DB_NAME | ```hedgedoc``` | ```Database name``` |
| CMD_DOMAIN | CMD_DOMAIN | ```localhost``` | ```The address the gui will be accessed at (ie. `192.168.1.1` or `hedgedoc.domain.com`).``` |
| CMD_URL_ADDPORT | CMD_URL_ADDPORT | ```false``` | ```Set to `true` if using a port other than `80` or `443`.``` |
| CMD_PROTOCOL_USESSL | CMD_PROTOCOL_USESSL | ```false``` | ```Set to `true` if accessing over https via reverse proxy.``` |
| CMD_PORT | CMD_PORT | ```3000``` | ```If you wish to access hedgedoc at a port different than 80, 443 or 3000, you need to set this to that port (ie. `CMD_PORT=5000`) and change the port mapping accordingly (5000:5000).``` |
| CMD_ALLOW_ORIGIN | CMD_ALLOW_ORIGIN | ```['localhost']``` | ```Comma-separated list of allowed hostnames``` |
| CMD_DB_DIALECT | CMD_DB_DIALECT | `````` | ```This variable allows selecting a database engine (if DB_HOST not set up). Available options are: `mariadb`, `mysql`, `postgres`, `sqlite`.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.hedgedoc.rule | ```Host(`hedgedoc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.hedgedoc.entrypoints | ```https``` |
| traefik.http.services.hedgedoc.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.hedgedoc.tls | ```true``` |
| traefik.http.routers.hedgedoc.tls.certresolver | ```default``` |
| traefik.http.routers.hedgedoc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Hedgedoc``` |
| mafl.description | ```HedgeDoc gives you access to all your files wherever you are.``` |
| mafl.link | ```https://hedgedoc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Documentation``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/hedgedoc-banner.png``` |

