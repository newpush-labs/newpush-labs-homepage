# pixel-server

![Logo](images/pixelserver.png)

## Description
Wireless control of PixelStrips or NeoPixels using a web graphical interface running on a Raspberry Pi.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [http://www.penguintutor.com/projects/pixel\-server](http://www.penguintutor.com/projects/pixel-server)  
**Official Docker Documentation:** [https://github.com/Macleykun/pixel\-server](https://github.com/Macleykun/pixel-server)  
### **Pi\-Hosted dedicated documentation:** [pixel\-server\_setup.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/pixel-server_setup.md)

  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_pixel-server.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_pixel\-server.sh \| bash

  
  


## Image
macley/pixel-server:latest

## Categories
- Other

## Ports
- 85:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/pixel-server/auth.cfg | /opt/appdata/pixel-server/auth.cfg |
| /opt/pixel-server/pixelserver.cfg | /opt/appdata/pixel-server/pixelserver.cfg |
| /opt/pixel-server/users.cfg | /opt/appdata/pixel-server/users.cfg |
| /etc/crontabs/ |  |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pixel-server.rule | ```Host(`pixel-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pixel-server.entrypoints | ```https``` |
| traefik.http.services.pixel-server.loadbalancer.server.port | ```80``` |
| traefik.http.routers.pixel-server.tls | ```true``` |
| traefik.http.routers.pixel-server.tls.certresolver | ```default``` |
| traefik.http.routers.pixel-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pixel-server``` |
| mafl.description | ```Wireless control of PixelStrips or NeoPixels using a web graphical interface running on a Raspberry Pi.``` |
| mafl.link | ```https://pixel-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://lirp.cdn-website.com/c73f56a6/dms3rep/multi/opt/ir.appnice.controlpad_512x512-640w.png``` |

