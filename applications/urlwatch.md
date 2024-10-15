# urlwatch

![Logo](images/urlwatch.png)

## Description
A tool for monitoring webpages for updates

## Image
mediadepot/urlwatch:master

## Categories
- Tools

## Ports
- 8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /srv/urlwatch/config | /opt/appdata/urlwatch |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.urlwatch.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.urlwatch.entrypoints | ```https``` |
| traefik.http.routers.urlwatch.tls.certresolver | ```default``` |
| traefik.http.routers.urlwatch.rule | ```Host(`urlwatch.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.urlwatch.tls | ```true``` |
| traefik.http.routers.urlwatch.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```UrlWatch``` |
| mafl.description | ```A tool for monitoring webpages for updates``` |
| mafl.link | ```https://urlwatch.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/urlwatch.png``` |

