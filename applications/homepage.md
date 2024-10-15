# homepage

![Logo](images/homepage.png)

## Description
A modern (fully static, fast), secure (fully proxied), highly customizable application dashboard with integrations for more than 25 services and translations for over 15 languages. Easily configured via YAML files (or discovery via docker labels).

## Image
ghcr.io/benphelps/homepage:latest

## Categories
- Tools
- Networkweb
- Networkother
- Statusstable

## Ports
- 3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/config | /opt/appdata/homepage |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.homepage.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.homepage.entrypoints | ```https``` |
| traefik.http.routers.homepage.tls.certresolver | ```default``` |
| traefik.http.routers.homepage.rule | ```Host(`homepage.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.homepage.tls | ```true``` |
| traefik.http.routers.homepage.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Homepage``` |
| mafl.description | ```A modern (fully static, fast), secure (fully proxied), highly customizable application dashboard with integrations for more than 25 services and translations for over 15 languages.``` |
| mafl.link | ```https://homepage.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/homepage.png``` |

