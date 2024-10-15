# headphones

![Logo](images/headphones.png)

## Description
Headphones is an automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent and Blackhole.

## Image
linuxserver/headphones:latest

## Categories
- Usenetserver

## Ports
- 8181:8181/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/headphones |
| /Downloads | /appdata/downloads |
| /music | /appdata/music |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.headphones.rule | ```Host(`headphones.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.headphones.entrypoints | ```https``` |
| traefik.http.services.headphones.loadbalancer.server.port | ```8181``` |
| traefik.http.routers.headphones.tls | ```true``` |
| traefik.http.routers.headphones.tls.certresolver | ```default``` |
| traefik.http.routers.headphones.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Headphones``` |
| mafl.description | ```Headphones is an automated music downloader for NZB and Torrent, written in Python.``` |
| mafl.link | ```https://headphones.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/headphones-icon.png``` |

