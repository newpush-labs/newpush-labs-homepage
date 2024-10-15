# Dokku

## Description
Dokku setup as a container

## Image
dokku/dokku

## Categories
- Paas

## Ports
- 22/tcp
- 80/tcp
- 443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /mnt/dokku | /var/lib/dokku |
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| DOKKU_HOSTNAME | Dokku hostname | `````` | ```Global hostname to be registered by Dokku``` |
| DOKKU_HOST_ROOT | Dokku host root | ```/var/lib/dokku/home/dokku``` | ```Image build cache path. Generally set to <data dir> + '/home/dokku'``` |

