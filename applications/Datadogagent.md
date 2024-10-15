# Datadog agent

![Logo](images/Datadogagent.png)

## Description
Collect events and metrics

## Image
datadog/agent:latest

## Categories
- Monitoring

## Volumes
| Container | Bind |
|-----------|------|
| /var/run/docker.sock | /var/run/docker.sock |
| /host/sys/fs/cgroup | /sys/fs/cgroup |
| /host/proc | /proc |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| DD_API_KEY | Datadog API key | `````` | `````` |

