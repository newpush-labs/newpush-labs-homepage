# ubooquity

![Logo](images/ubooquity.png)

## Description
Ubooquity is a free, lightweight and easy\-to\-use home server for your comics and ebooks. Use it to access your files from anywhere, with a tablet, an e\-reader, a phone or a computer.

## Image
linuxserver/ubooquity:latest

## Categories
- Libraryserver

## Ports
- 2202:2202/tcp
- 2203:2203/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /books |  |
| /comics |  |
| /config |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| MAXMEM | MAXMEM | `````` | `````` |
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ubooquity.rule | ```Host(`ubooquity.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ubooquity.entrypoints | ```https``` |
| traefik.http.services.ubooquity.loadbalancer.server.port | ```2202``` |
| traefik.http.routers.ubooquity.tls | ```true``` |
| traefik.http.routers.ubooquity.tls.certresolver | ```default``` |
| traefik.http.routers.ubooquity.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ubooquity``` |
| mafl.description | ```Ubooquity is a free, lightweight and easy-to-use home server for your comics and ebooks.``` |
| mafl.link | ```https://ubooquity.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/ubooquity-icon.png``` |

