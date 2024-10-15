# red_ubuntu-vnc

## Description
Docker container images with VNC and http NoVNC

## Notes
Connect to :1 display with vncviewer. NoVNC: http://your\-docker\-machine\-ip:6901/vnc.html, default password: vncpassword

## Image
consol/ubuntu-xfce-vnc

## Categories
- Utils

## Ports
- 5901:5901/tcp
- 6901:6901/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_ubuntu-vnc.rule | ```Host(`red_ubuntu-vnc.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_ubuntu-vnc.entrypoints | ```https``` |
| traefik.http.services.red_ubuntu-vnc.loadbalancer.server.port | ```5901``` |
| traefik.http.routers.red_ubuntu-vnc.tls | ```true``` |
| traefik.http.routers.red_ubuntu-vnc.tls.certresolver | ```default``` |
| traefik.http.routers.red_ubuntu-vnc.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ubuntu Web VNC``` |
| mafl.description | ```Docker container images with VNC and http NoVNC``` |
| mafl.link | ```https://red_ubuntu-vnc.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utils``` |
| mafl.icon.url | ```https://i.imgur.com/KfWzNDU.jpg``` |

