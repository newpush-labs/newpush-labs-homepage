# codiad

![Logo](images/codiad.png)

## Description
Codiad is a web\-based IDE framework with a small footprint and minimal requirements.

## Image
linuxserver/codiad:latest

## Categories
- Codeserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/codiad |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.codiad.rule | ```Host(`codiad.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.codiad.entrypoints | ```https``` |
| traefik.http.services.codiad.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.codiad.tls | ```true``` |
| traefik.http.routers.codiad.tls.certresolver | ```default``` |
| traefik.http.routers.codiad.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Codiad``` |
| mafl.description | ```Codiad is a web-based IDE framework with a small footprint and minimal requirements.``` |
| mafl.link | ```https://codiad.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Codeserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/codiad-icon.png``` |

