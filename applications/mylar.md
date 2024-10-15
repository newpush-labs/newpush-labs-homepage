# mylar

![Logo](images/mylar.png)

## Description
An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents.

## Image
linuxserver/mylar:latest

## Categories
- Usenetserver

## Ports
- 8090:8090/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mylar |
| /downloads | /appdata/downloads |
| /comics | /appdata/comics |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mylar.rule | ```Host(`mylar.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mylar.entrypoints | ```https``` |
| traefik.http.services.mylar.loadbalancer.server.port | ```8090``` |
| traefik.http.routers.mylar.tls | ```true``` |
| traefik.http.routers.mylar.tls.certresolver | ```default``` |
| traefik.http.routers.mylar.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mylar``` |
| mafl.description | ```An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents.``` |
| mafl.link | ```https://mylar.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/mylar-icon.png``` |

