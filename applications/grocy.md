# grocy

![Logo](images/grocy.png)

## Description
Grocy is an ERP system for your kitchen! Cut down on food waste, and manage your chores with this brilliant utility.

## Image
linuxserver/grocy:latest

## Categories
- Familyappserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/grocy |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| TZ | Timezone | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.grocy.rule | ```Host(`grocy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.grocy.entrypoints | ```https``` |
| traefik.http.services.grocy.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.grocy.tls | ```true``` |
| traefik.http.routers.grocy.tls.certresolver | ```default``` |
| traefik.http.routers.grocy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Grocy``` |
| mafl.description | ```Grocy is an ERP system for your kitchen!``` |
| mafl.link | ```https://grocy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Familyappserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/grocy_logo.png``` |

