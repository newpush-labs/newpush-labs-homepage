# oscam

## Description
OScam is a softcam, software to be used to decrypt digital television channels on a settopbox (receiver), as an alternative for a conditional access module (CAM). The main features of OSCam are next to its softcam capabilities, that it is able to function as a cardserver.

## Image
linuxserver/oscam:latest

## Categories
- Other

## Ports
- 8888:8888/tcp
- 10000:10000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/oscam |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.oscam.rule | ```Host(`oscam.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.oscam.entrypoints | ```https``` |
| traefik.http.services.oscam.loadbalancer.server.port | ```8888``` |
| traefik.http.routers.oscam.tls | ```true``` |
| traefik.http.routers.oscam.tls.certresolver | ```default``` |
| traefik.http.routers.oscam.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```OScam``` |
| mafl.description | ```OScam is a softcam, software to be used to decrypt digital television channels on a settopbox (receiver), as an alternative for a conditional access module (CAM).``` |
| mafl.link | ```https://oscam.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```http://i.imgur.com/8LadrLg.png``` |

