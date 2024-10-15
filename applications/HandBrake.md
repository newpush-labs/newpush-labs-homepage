# HandBrake

## Description
This project implements a Docker container for HandBrake. The GUI of the application is accessed through a modern web browser (no installation or configuration needed on the client side) or via any VNC client.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/jlesage/handbrake>  
**Official Docker Documentation:** [https://github.com/jlesage/docker\-handbrake](https://github.com/jlesage/docker-handbrake)  
  
  


## Image
jlesage/handbrake

## Categories
- Downloader

## Ports
- 5800:5800/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/handbrake |
| /storage | /appdata/downloads |
| /output | /appdata/downloads/output |
| /watch | /appdata/downloads/watch |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.handbrake.rule | ```Host(`handbrake.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.handbrake.entrypoints | ```https``` |
| traefik.http.services.handbrake.loadbalancer.server.port | ```5800``` |
| traefik.http.routers.handbrake.tls | ```true``` |
| traefik.http.routers.handbrake.tls.certresolver | ```default``` |
| traefik.http.routers.handbrake.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```HandBrake``` |
| mafl.description | ```This project implements a Docker container for HandBrake.``` |
| mafl.link | ```https://handbrake.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloader``` |
| mafl.icon.url | ```https://camo.githubusercontent.com/0156e7756fa49886748421553158970ca7600e31559f331b1b4e6dd127103bcd/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d7261772e67697468756275736572636f6e74656e742e636f6d2f6a6c65736167652f646f636b65722d74656d706c617465732f6d61737465722f6a6c65736167652f696d616765732f68616e646272616b652d69636f6e2e706e6726773d313130``` |

