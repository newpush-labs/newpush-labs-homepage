# netdata

![Logo](images/netdata.png)

## Description
Troubleshoot slowdowns and anomalies in your infrastructure with thousands of per\-second metrics, meaningful visualizations, and insightful health alarms with zero configuration.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.netdata.cloud/>  
**Official Docker Documentation:** <https://learn.netdata.cloud/docs/agent/packaging/docker>  
  
  
Documentation is Available [here](https://learn.netdata.cloud/).

## Image
netdata/netdata:latest

## Categories
- Other
- Tools

## Ports
- 19999:19999/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/netdata | /opt/appdata/netdata/netdataconfig |
| /var/lib/netdata | /opt/appdata/netdata/netdatalib |
| /host/etc/passwd:ro | /etc/passwd |
| /host/etc/group:ro | /etc/group |
| /host/proc:ro | /proc |
| /host/sys:ro | /sys |
| /host/etc/os-release:ro | /etc/os-release |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| DOCKER_USR | DOCKER_USR | ```1000``` | `````` |
| DOCKER_GRP | DOCKER_GRP | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.netdata.rule | ```Host(`netdata.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.netdata.entrypoints | ```https``` |
| traefik.http.services.netdata.loadbalancer.server.port | ```19999``` |
| traefik.http.routers.netdata.tls | ```true``` |
| traefik.http.routers.netdata.tls.certresolver | ```default``` |
| traefik.http.routers.netdata.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Netdata``` |
| mafl.description | ```Troubleshoot slowdowns and anomalies in your infrastructure with thousands of per-second metrics, meaningful visualizations, and insightful health alarms with zero configuration.``` |
| mafl.link | ```https://netdata.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/netdata.png``` |

