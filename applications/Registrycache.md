# Registry (cache)

![Logo](images/Registrycache.png)

## Description
Docker image registry configured as a DockerHub pull through cache

## Image
registry:latest

## Categories
- Docker

## Ports
- 5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/registry |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| REGISTRY_PROXY_REMOTEURL |  | ```https://registry-1.docker.io``` | `````` |

