# influxdb1810

![Logo](images/influxdb1810.png)

## Description
InfluxDB is an open source time series database for recording metrics, events, and analytics.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.influxdata.com/>  
**Official Docker Documentation:** [https://docs.influxdata.com/influxdb/v2\.0/install/?t\=Docker](https://docs.influxdata.com/influxdb/v2.0/install/?t=Docker)  
  
  
You will need to add /portainer/Files/AppData/Config/Influxdb/config/influxdb.conf

## Image
influxdb:1.8.10

## Categories
- Other
- Tools

## Ports
- 8086:8086/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/influxdb | /opt/appdata/influxdb/data |
| /etc/influxdb | /opt/appdata/influxdb/config |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.influxdb1810.rule | ```Host(`influxdb1810.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.influxdb1810.entrypoints | ```https``` |
| traefik.http.services.influxdb1810.loadbalancer.server.port | ```8086``` |
| traefik.http.routers.influxdb1810.tls | ```true``` |
| traefik.http.routers.influxdb1810.tls.certresolver | ```default``` |
| traefik.http.routers.influxdb1810.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Influxdb 1.8.10``` |
| mafl.description | ```InfluxDB is an open source time series database for recording metrics, events, and analytics.``` |
| mafl.link | ```https://influxdb1810.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/docker-library/docs/43d87118415bb75d7bb107683e79cd6d69186f67/influxdb/logo.png``` |

