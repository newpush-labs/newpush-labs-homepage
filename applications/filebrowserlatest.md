# filebrowser-latest

![Logo](images/filebrowserlatest.png)

## Description
Web File Browser which can be used as a middleware or standalone app.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://filebrowser.org/>  
**Official Docker Documentation:** [https://filebrowser.org/installation\#docker](https://filebrowser.org/installation#docker)  
  
  
**Youtube Video:** [Novaspirit Tech \- Installing JDownloader and File Browser On The Pi Docker Server](https://www.youtube.com/watch?v=30MYRgCObu8&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=4)  
  
The default user and password is admin/admin.

## Image
filebrowser/filebrowser:latest

## Categories
- Other
- Tools

## Ports
- 8082:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /srv | /appdata/downloads |
| /database/filebrowser.db | /opt/appdata/filebrowser/filebrowser.db |
| /config/settings.json | /opt/appdata/filebrowser/settings.json |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.filebrowser-latest.rule | ```Host(`filebrowser-latest.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.filebrowser-latest.entrypoints | ```https``` |
| traefik.http.services.filebrowser-latest.loadbalancer.server.port | ```80``` |
| traefik.http.routers.filebrowser-latest.tls | ```true``` |
| traefik.http.routers.filebrowser-latest.tls.certresolver | ```default``` |
| traefik.http.routers.filebrowser-latest.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```FileBrowser latest``` |
| mafl.description | ```Web File Browser which can be used as a middleware or standalone app.``` |
| mafl.link | ```https://filebrowser-latest.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/filebrowser.png``` |

