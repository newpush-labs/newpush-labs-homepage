# octoprint

![Logo](images/octoprint.png)

## Description
OctoPrint is an open source 3D printer controller application, which provides a web interface for the connected printers.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://octoprint.org/>  
**Official Docker Documentation:** <https://hub.docker.com/r/octoprint/octoprint>  
  
  


## Image
octoprint/octoprint:latest

## Categories
- Other
- Tools

## Ports
- 8051:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /octoprint | /opt/appdata/octoprint |
| /dev | /dev |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| NODE_ENV | NODE_ENV | ```development ``` | `````` |
| ENABLE_MJPG_STREAMER | ENABLE_MJPG_STREAMER | ```true``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.octoprint.rule | ```Host(`octoprint.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.octoprint.entrypoints | ```https``` |
| traefik.http.services.octoprint.loadbalancer.server.port | ```80``` |
| traefik.http.routers.octoprint.tls | ```true``` |
| traefik.http.routers.octoprint.tls.certresolver | ```default``` |
| traefik.http.routers.octoprint.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```OctoPrint``` |
| mafl.description | ```OctoPrint is an open source 3D printer controller application, which provides a web interface for the connected printers.``` |
| mafl.link | ```https://octoprint.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/octoprint.png``` |

