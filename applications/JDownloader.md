# JDownloader

![Logo](images/JDownloader.png)

## Description
JDownloader docker image

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://my.jdownloader.org/>  
**Official Docker Documentation:** [https://github.com/jaymoulin/docker\-jdownloader](https://github.com/jaymoulin/docker-jdownloader)  
  
  
**Youtube Video:** [Novaspirit Tech \- Installing JDownloader and File Browser On The Pi Docker Server](https://www.youtube.com/watch?v=30MYRgCObu8&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=4)  
  


## Image
jaymoulin/jdownloader:latest

## Categories
- Downloaders
- Tools

## Ports
- 3129:3129/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/JDownloader/app/cfg | /opt/appdata/jdownloader |
| /opt/JDownloader/Downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| MYJD_DEVICE_NAME | MYJD_DEVICE_NAME | `````` | `````` |
| MYJD_USER | MYJD_USER | `````` | `````` |
| MYJD_PASSWORD | MYJD_PASSWORD | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.jdownloader.rule | ```Host(`jdownloader.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.jdownloader.entrypoints | ```https``` |
| traefik.http.services.jdownloader.loadbalancer.server.port | ```3129``` |
| traefik.http.routers.jdownloader.tls | ```true``` |
| traefik.http.routers.jdownloader.tls.certresolver | ```default``` |
| traefik.http.routers.jdownloader.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```JDownloader``` |
| mafl.description | ```JDownloader docker image``` |
| mafl.link | ```https://jdownloader.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/jdownloader.png``` |

