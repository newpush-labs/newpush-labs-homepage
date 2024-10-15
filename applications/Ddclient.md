# Ddclient

![Logo](images/Ddclient.png)

## Description
Ddclient is a Perl client used to update dynamic DNS entries for accounts on Dynamic DNS Network Service Provider. It was originally written by Paul Burry and is now mostly by wimpunk. It has the capability to update more than just dyndns and it can fetch your WAN\-ipaddress in a few different ways.

## Image
linuxserver/ddclient:latest

## Categories
- Networking

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ddclient |

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
| traefik.http.routers.ddclient.rule | ```Host(`ddclient.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ddclient.entrypoints | ```https``` |
| traefik.http.services.ddclient.loadbalancer.server.port | ```80``` |
| traefik.http.routers.ddclient.tls | ```true``` |
| traefik.http.routers.ddclient.tls.certresolver | ```default``` |
| traefik.http.routers.ddclient.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ddclient``` |
| mafl.description | ```Ddclient is a Perl client used to update dynamic DNS entries for accounts on Dynamic DNS Network Service Provider.``` |
| mafl.link | ```https://ddclient.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Networking``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ddclient-logo.png``` |

