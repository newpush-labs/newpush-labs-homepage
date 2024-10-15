# syncthing

![Logo](images/syncthing.png)

## Description
Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes.

## Image
linuxserver/syncthing:latest

## Categories
- Backupandsyncserver

## Ports
- 8384:8384/tcp
- 21027:21027/udp
- 22000:22000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/syncthing |
| /sync |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.syncthing.rule | ```Host(`syncthing.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.syncthing.entrypoints | ```https``` |
| traefik.http.services.syncthing.loadbalancer.server.port | ```8384``` |
| traefik.http.routers.syncthing.tls | ```true``` |
| traefik.http.routers.syncthing.tls.certresolver | ```default``` |
| traefik.http.routers.syncthing.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SyncThing``` |
| mafl.description | ```Syncthing is a continuous file synchronization program.``` |
| mafl.link | ```https://syncthing.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Backupandsyncserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/syncthing-icon.png``` |

