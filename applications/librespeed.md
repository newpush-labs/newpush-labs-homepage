# librespeed

![Logo](images/librespeed.png)

## Description
A Free and Open Source Speedtest for HTML5 and more.

## Image
linuxserver/librespeed:latest

## Categories
- Taskserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/librespeed |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.librespeed.rule | ```Host(`librespeed.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.librespeed.entrypoints | ```https``` |
| traefik.http.services.librespeed.loadbalancer.server.port | ```5299``` |
| traefik.http.routers.librespeed.tls | ```true``` |
| traefik.http.routers.librespeed.tls.certresolver | ```default``` |
| traefik.http.routers.librespeed.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```LibreSpeed``` |
| mafl.description | ```A Free and Open Source Speedtest for HTML5 and more.``` |
| mafl.link | ```https://librespeed.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/speedtest.png``` |

