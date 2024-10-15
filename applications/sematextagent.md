# sematext-agent

![Logo](images/sematextagent.png)

## Description
Collect logs, metrics and docker events

## Image
sematext/sematext-agent-docker:latest

## Categories
- Logmanagement
- Monitoring

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| LOGSENE_TOKEN | Logs token | `````` | `````` |
| SPM_TOKEN | SPM monitoring token | `````` | `````` |

