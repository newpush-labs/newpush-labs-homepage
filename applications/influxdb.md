# influxdb

![Logo](images/influxdb.png)

## Description
InfluxDB is an open source time series database for recording metrics, events, and analytics.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.influxdata.com/>  
**Official Docker Documentation:** [https://docs.influxdata.com/influxdb/v2\.0/install/?t\=Docker](https://docs.influxdata.com/influxdb/v2.0/install/?t=Docker)  
  
  
Set your initial organisation, bucket, username and password below. Wisit Web UI at http://your\_host:8086/ for setting up a tocken.

## Image
influxdb:latest

## Categories
- Other
- Tools

## Ports
- 8086:8086/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/influxdb2 | /opt/appdata/influxdb2/data |
| /etc/influxdb2 | /opt/appdata/influxdb2/config |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| DOCKER_INFLUXDB_INIT_MODE | DOCKER_INFLUXDB_INIT_MODE | ```setup``` | `````` |
| DOCKER_INFLUXDB_INIT_USERNAME | DOCKER_INFLUXDB_INIT_USERNAME | ```your-initial-username``` | `````` |
| DOCKER_INFLUXDB_INIT_PASSWORD | DOCKER_INFLUXDB_INIT_PASSWORD | ```your-initial-password``` | `````` |
| DOCKER_INFLUXDB_INIT_ORG | DOCKER_INFLUXDB_INIT_ORG | ```your-initial-organisation``` | `````` |
| DOCKER_INFLUXDB_INIT_BUCKET | DOCKER_INFLUXDB_INIT_BUCKET | ```your-initial-bucket``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.influxdb.rule | ```Host(`influxdb.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.influxdb.entrypoints | ```https``` |
| traefik.http.services.influxdb.loadbalancer.server.port | ```8086``` |
| traefik.http.routers.influxdb.tls | ```true``` |
| traefik.http.routers.influxdb.tls.certresolver | ```default``` |
| traefik.http.routers.influxdb.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Influxdb Latest``` |
| mafl.description | ```InfluxDB is an open source time series database for recording metrics, events, and analytics.``` |
| mafl.link | ```https://influxdb.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/docker-library/docs/43d87118415bb75d7bb107683e79cd6d69186f67/influxdb/logo.png``` |

