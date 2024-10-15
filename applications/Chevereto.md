# Chevereto

![Logo](images/Chevereto.png)

## Description
Chevereto is a powerful and fast image hosting script that allows you to create your very own full featured image hosting website in just minutes. Please note that this offers only the free Chevereto version.

## Image
nmtan/chevereto:latest

## Categories
- Photos

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/www/html/images |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| CHEVERETO_DB_HOST | CHEVERETO_DB_HOST | `````` | `````` |
| CHEVERETO_DB_USERNAME | CHEVERETO_DB_USERNAME | `````` | `````` |
| CHEVERETO_DB_PASSWORD | CHEVERETO_DB_PASSWORD | `````` | `````` |
| CHEVERETO_DB_NAME | CHEVERETO_DB_NAME | `````` | `````` |
| CHEVERETO_DB_PREFIX | CHEVERETO_DB_PREFIX | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.chevereto.rule | ```Host(`chevereto.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.chevereto.entrypoints | ```https``` |
| traefik.http.services.chevereto.loadbalancer.server.port | ```8083``` |
| traefik.http.routers.chevereto.tls | ```true``` |
| traefik.http.routers.chevereto.tls.certresolver | ```default``` |
| traefik.http.routers.chevereto.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Chevereto``` |
| mafl.description | ```Chevereto is a powerful and fast image hosting script that allows you to create your very own full featured image hosting website in just minutes.``` |
| mafl.link | ```https://chevereto.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Photos``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/Chevereto.png``` |

