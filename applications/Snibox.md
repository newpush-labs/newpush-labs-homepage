# Snibox

![Logo](images/Snibox.png)

## Description
Self\-hosted snippet manager.

## Notes
Label\-oriented interface with search. Supports various programming languages, markdown, plain text.

## Image
snowmean/snibox-sqlite:latest

## Categories
- Codeserver

## Ports
- 3010:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/db/database | /opt/appdata/snibox |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.snibox.rule | ```Host(`snibox.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.snibox.entrypoints | ```https``` |
| traefik.http.services.snibox.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.snibox.tls | ```true``` |
| traefik.http.routers.snibox.tls.certresolver | ```default``` |
| traefik.http.routers.snibox.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Snibox``` |
| mafl.description | ```Self-hosted snippet manager.``` |
| mafl.link | ```https://snibox.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Codeserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/snibox.png``` |

