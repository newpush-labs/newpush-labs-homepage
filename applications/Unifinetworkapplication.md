# Unifi-network-application

![Logo](images/Unifinetworkapplication.png)

## Description
The Unifi\-network\-application software is a powerful, enterprise wireless software engine ideal for high\-density client deployments requiring low latency and high uptime performance.

## Image
linuxserver/unifi-network-application:latest

## Categories
- Uncategorized Services

## Ports
- 8443:8443/tcp
- 3478:3478/udp
- 10001:10001/udp
- 8080:8080/tcp
- 1900:1900/udp
- 8843:8843/tcp
- 8880:8880/tcp
- 6789:6789/tcp
- 5514:5514/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/unifi-network-application |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| MONGO_USER | MONGO_USER | ```unifi``` | ```Mongodb Username. Only evaluated on first run. **Special characters must be [url encoded](https://en.wikipedia.org/wiki/Percent-encoding)**.``` |
| MONGO_PASS | MONGO_PASS | `````` | ```Mongodb Password. Only evaluated on first run. **Special characters must be [url encoded](https://en.wikipedia.org/wiki/Percent-encoding)**.``` |
| MONGO_HOST | MONGO_HOST | ```unifi-db``` | ```Mongodb Hostname. Only evaluated on first run.``` |
| MONGO_PORT | MONGO_PORT | ```27017``` | ```Mongodb Port. Only evaluated on first run.``` |
| MONGO_DBNAME | MONGO_DBNAME | ```unifi``` | ```Mongodb Database Name (stats DB is automatically suffixed with `_stat`). Only evaluated on first run.``` |
| MONGO_AUTHSOURCE | MONGO_AUTHSOURCE | ```admin``` | ```Mongodb [authSource](https://www.mongodb.com/docs/manual/reference/connection-string/#mongodb-urioption-urioption.authSource). For Atlas set to `admin`. Only evaluated on first run.``` |
| MEM_LIMIT | MEM_LIMIT | ```1024``` | ```Optionally change the Java memory limit (in Megabytes). Set to `default` to reset to default``` |
| MEM_STARTUP | MEM_STARTUP | ```1024``` | ```Optionally change the Java initial/minimum memory (in Megabytes). Set to `default` to reset to default``` |
| MONGO_TLS | MONGO_TLS | `````` | ```Mongodb enable [TLS](https://www.mongodb.com/docs/manual/reference/connection-string/#mongodb-urioption-urioption.tls). Only evaluated on first run.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.unifi-network-application.rule | ```Host(`unifi-network-application.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.unifi-network-application.entrypoints | ```https``` |
| traefik.http.services.unifi-network-application.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.unifi-network-application.tls | ```true``` |
| traefik.http.routers.unifi-network-application.tls.certresolver | ```default``` |
| traefik.http.routers.unifi-network-application.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Unifi-network-application``` |
| mafl.description | ```The Unifi-network-application software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.``` |
| mafl.link | ```https://unifi-network-application.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/unifi-banner.png``` |

