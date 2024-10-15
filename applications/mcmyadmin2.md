# mcmyadmin2

![Logo](images/mcmyadmin2.png)

## Description
McMyAdmin 2 is the leading web control panel and administration console for Minecraft servers.

## Image
linuxserver/mcmyadmin2:latest

## Categories
- Other

## Ports
- 8080:8080/tcp
- 25565:25565/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /minecraft |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mcmyadmin2.rule | ```Host(`mcmyadmin2.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mcmyadmin2.entrypoints | ```https``` |
| traefik.http.services.mcmyadmin2.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.mcmyadmin2.tls | ```true``` |
| traefik.http.routers.mcmyadmin2.tls.certresolver | ```default``` |
| traefik.http.routers.mcmyadmin2.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```McMyAdmin 2``` |
| mafl.description | ```McMyAdmin 2 is the leading web control panel and administration console for Minecraft servers.``` |
| mafl.link | ```https://mcmyadmin2.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/mcmyadmin-icon.png``` |

