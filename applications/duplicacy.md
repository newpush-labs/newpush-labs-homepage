# duplicacy

![Logo](images/duplicacy.png)

## Description
Duplicacy backs up your files to many cloud storages with client\-side encryption and the highest level of deduplication

## Image
mediadepot/duplicacy:latest

## Categories
- Utilitybackup

## Ports
- 3875/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/duplicacy/config |
| /logs | /opt/appdata/duplicacy/logs |
| /cache | /opt/appdata/duplicacy/cache |
| /source/apps | /opt/appdata/ |
| /source/storage | /opt/appdata/ |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.duplicacy.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.duplicacy.entrypoints | ```https``` |
| traefik.http.routers.duplicacy.tls.certresolver | ```default``` |
| traefik.http.routers.duplicacy.rule | ```Host(`duplicacy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.duplicacy.tls | ```true``` |
| traefik.http.routers.duplicacy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Duplicacy``` |
| mafl.description | ```Duplicacy backs up your files to many cloud storages with client-side encryption and the highest level of deduplication``` |
| mafl.link | ```https://duplicacy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utilitybackup``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/duplicacy-icon.png``` |

