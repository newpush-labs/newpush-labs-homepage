# netbootxyz

![Logo](images/netbootxyz.jpg)

## Description
Netbootxyz is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool

## Image
linuxserver/netbootxyz:latest

## Categories
- Downloaders
- Networkother
- Tools

## Ports
- 3000/tcp
- 69/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/netbootxyz |
| /assets | /opt/appdata/software/netbootxyz |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.netbootxyz.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.netbootxyz.entrypoints | ```https``` |
| traefik.http.routers.netbootxyz.tls.certresolver | ```default``` |
| traefik.http.routers.netbootxyz.rule | ```Host(`netbootxyz.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.netbootxyz.tls | ```true``` |
| traefik.http.routers.netbootxyz.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Netboot.xyz``` |
| mafl.description | ```Netbootxyz is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool``` |
| mafl.link | ```https://netbootxyz.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloaders``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/netbootxyz.jpg``` |

