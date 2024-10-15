# cops

![Logo](images/cops.png)

## Description
COPS links to your Calibre library database and allows downloading and emailing of books directly from a web browser and provides a OPDS feed to connect to your devices.

## Image
linuxserver/cops:latest

## Categories
- Libraryserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /books | /appdata/books |
| /config | /opt/appdata/cops |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.cops.rule | ```Host(`cops.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cops.entrypoints | ```https``` |
| traefik.http.services.cops.loadbalancer.server.port | ```4040``` |
| traefik.http.routers.cops.tls | ```true``` |
| traefik.http.routers.cops.tls.certresolver | ```default``` |
| traefik.http.routers.cops.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```COPS``` |
| mafl.description | ```COPS links to your Calibre library database and allows downloading and emailing of books directly from a web browser and provides a OPDS feed to connect to your devices.``` |
| mafl.link | ```https://cops.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Libraryserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/cops-icon.png``` |

