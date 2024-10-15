# Boinc

![Logo](images/Boinc.jpg)

## Description
BOINC is a platform for high\-throughput computing on a large scale (thousands or millions of computers). It can be used for volunteer computing (using consumer devices) or grid computing (using organizational resources). It supports virtualized, parallel, and GPU\-based applications.

## Image
linuxserver/boinc:latest

## Categories
- Research

## Ports
- 8080:8080/tcp
- 8181:8181/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/boinc |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| PASSWORD | PASSWORD | `````` | ```Optionally set a password for the gui.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.boinc.rule | ```Host(`boinc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.boinc.entrypoints | ```https``` |
| traefik.http.services.boinc.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.boinc.tls | ```true``` |
| traefik.http.routers.boinc.tls.certresolver | ```default``` |
| traefik.http.routers.boinc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Boinc``` |
| mafl.description | ```BOINC is a platform for high-throughput computing on a large scale (thousands or millions of computers).``` |
| mafl.link | ```https://boinc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Research``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/BOINC/boinc/master/doc/logo/boinc_logo_black.jpg``` |

