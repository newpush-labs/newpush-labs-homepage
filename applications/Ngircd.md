# Ngircd

![Logo](images/Ngircd.png)

## Description
Ngircd is a free, portable and lightweight Internet Relay Chat server for small or private networks, developed under the GNU General Public License (GPL). It is easy to configure, can cope with dynamic IP addresses, and supports IPv6, SSL\-protected connections as well as PAM for authentication. It is written from scratch and not based on the original IRCd.

## Image
linuxserver/ngircd:latest

## Categories
- Uncategorized Services

## Ports
- 6667:6667/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ngircd |

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
| traefik.http.routers.ngircd.rule | ```Host(`ngircd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ngircd.entrypoints | ```https``` |
| traefik.http.services.ngircd.loadbalancer.server.port | ```6667``` |
| traefik.http.routers.ngircd.tls | ```true``` |
| traefik.http.routers.ngircd.tls.certresolver | ```default``` |
| traefik.http.routers.ngircd.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ngircd``` |
| mafl.description | ```Ngircd is a free, portable and lightweight Internet Relay Chat server for small or private networks, developed under the GNU General Public License (GPL).``` |
| mafl.link | ```https://ngircd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ngircd-logo.png``` |

