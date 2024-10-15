# UniFi Video

![Logo](images/UniFiVideo.png)

## Description
UniFi Video is a powerful and flexible, integrated IP video management surveillance system designed to work with Ubiquiti’s UniFi Video Camera product line. UniFi Video has an intuitive, configurable, and feature‑packed user interface with advanced features such as motion detection, auto‑discovery, user‑level security, storage management, reporting, and mobile device support.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/pducharme/UniFi\-Video\-Controller](https://github.com/pducharme/UniFi-Video-Controller)  
**Official Docker Documentation:** [https://github.com/pducharme/UniFi\-Video\-Controller](https://github.com/pducharme/UniFi-Video-Controller)  
  
  


## Image
pducharme/unifi-video-controller:latest

## Categories
- Cctv

## Ports
- 1935:1935/tcp
- 7444:7444/tcp
- 7447:7447/tcp
- 6666:6666/tcp
- 7442:7442/tcp
- 7080:7080/tcp
- 7443:7443/tcp
- 7445:7445/tcp
- 7446:7446/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /recordings | /opt/appdata/uniffivideo/recordings/ |
| /config | /opt/appdata/unifivideo/ |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```99``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| UMASK | UMASK | ```002``` | `````` |
| CONTEXT_PATH | CONTEXT_PATH | ```UniFi Video``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.unifivideo.rule | ```Host(`unifivideo.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.unifivideo.entrypoints | ```https``` |
| traefik.http.services.unifivideo.loadbalancer.server.port | ```1935``` |
| traefik.http.routers.unifivideo.tls | ```true``` |
| traefik.http.routers.unifivideo.tls.certresolver | ```default``` |
| traefik.http.routers.unifivideo.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```UniFi Video``` |
| mafl.description | ```UniFi Video is a powerful and flexible, integrated IP video management surveillance system designed to work with Ubiquiti’s UniFi Video Camera product line.``` |
| mafl.link | ```https://unifivideo.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Cctv``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/unifivideo-icon.png``` |

