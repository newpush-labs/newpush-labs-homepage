# logzio-metrics-collector

![Logo](images/logziometricscollector.png)

## Description
Docker Metrics Collector is a container that runs Metricbeat with the modules you enable at runtime.

## Image
logzio/docker-collector-metrics

## Categories
- Tools

## Ports

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |
| /hostfs/sys/fs/cgroup | /sys/fs/cgroup |
| /hostfs/proc | /proc |
| /hostfs | / |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| LOGZIO_TOKEN | LOGZIO_TOKEN | ```REPLACE-LOGZIO-TOKEN-HERE``` | `````` |
| LOGZIO_MODULES | LOGZIO_MODULES | ```system,docker``` | `````` |

## Labels
| Key | Value |
|-----|-------|

