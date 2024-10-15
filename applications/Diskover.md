# Diskover

![Logo](images/Diskover.png)

## Description
Diskover is an open source file system indexer that uses Elasticsearch to index and manage data across heterogeneous storage systems.

## Image
linuxserver/diskover:latest

## Categories
- Productivity

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/diskover/config |
| /data | /opt/appdata/diskover/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| ES_HOST | ES_HOST | ```elasticsearch``` | ```ElasticSearch host (optional)``` |
| ES_PORT | ES_PORT | ```9200``` | ```ElasticSearch port (optional)``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.diskover.rule | ```Host(`diskover.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.diskover.entrypoints | ```https``` |
| traefik.http.services.diskover.loadbalancer.server.port | ```80``` |
| traefik.http.routers.diskover.tls | ```true``` |
| traefik.http.routers.diskover.tls.certresolver | ```default``` |
| traefik.http.routers.diskover.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Diskover``` |
| mafl.description | ```Diskover is an open source file system indexer that uses Elasticsearch to index and manage data across heterogeneous storage systems.``` |
| mafl.link | ```https://diskover.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Productivity``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/diskoverdata/diskover-community/master/diskover-web/public/images/diskover.png``` |

