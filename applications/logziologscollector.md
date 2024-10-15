# logzio-logs-collector

![Logo](images/logziologscollector.png)

## Description
Docker container that uses Filebeat to collect logs from other Docker containers and forward those logs to your Logz.io account.

## Image
logzio/docker-collector-logs

## Categories
- Tools

## Ports

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |
| /var/lib/docker/containers | /var/lib/docker/containers |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| LOGZIO_TOKEN | LOGZIO_TOKEN | ```REPLACE-LOGZIO-TOKEN-HERE``` | `````` |
| LOGZIO_URL | LOGZIO_URL | ```listener.logz.io:5015``` | `````` |

## Labels
| Key | Value |
|-----|-------|

