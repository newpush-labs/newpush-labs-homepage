# changedetection

![Logo](images/changedetection.jpg)

## Description
changedetection.io \- The best and simplest self\-hosted open source website change detection monitoring and notification service. An alternative to Visualping, Watchtower

## Image
ghcr.io/dgtlmoon/changedetection.io:latest

## Categories
- Documents
- Networkother
- Tools

## Ports
- 5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /datastore | /opt/appdata/changedetection |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.changedetection.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.changedetection.entrypoints | ```https``` |
| traefik.http.routers.changedetection.tls.certresolver | ```default``` |
| traefik.http.routers.changedetection.rule | ```Host(`changedetection.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.changedetection.tls | ```true``` |
| traefik.http.routers.changedetection.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ChangeDetection``` |
| mafl.description | ```changedetection.``` |
| mafl.link | ```https://changedetection.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Documents``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/changedetection.jpg``` |

