# Emulatorjs

![Logo](images/Emulatorjs.png)

## Description
Emulatorjs \- In browser web based emulation portable to nearly any device for many retro consoles. A mix of emulators is used between Libretro and EmulatorJS.

## Image
linuxserver/emulatorjs:latest

## Categories
- Gamingserver

## Ports
- 3000:3000/tcp
- 80:80/tcp
- 4001:4001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/emulatorjs/config |
| /data | /opt/appdata/emulatorjs/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| SUBFOLDER | SUBFOLDER | ```/``` | ```Specify a subfolder for reverse proxies IE '/FOLDER/'``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.emulatorjs.rule | ```Host(`emulatorjs.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.emulatorjs.entrypoints | ```https``` |
| traefik.http.services.emulatorjs.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.emulatorjs.tls | ```true``` |
| traefik.http.routers.emulatorjs.tls.certresolver | ```default``` |
| traefik.http.routers.emulatorjs.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Emulatorjs``` |
| mafl.description | ```Emulatorjs - In browser web based emulation portable to nearly any device for many retro consoles.``` |
| mafl.link | ```https://emulatorjs.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Gamingserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/emulatorjs-logo.png``` |

