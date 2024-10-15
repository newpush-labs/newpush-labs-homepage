# wizarr

## Description
 Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc. 

## Image
ghcr.io/wizarrrr/wizarr

## Categories
- Tools

## Ports
- 5690/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data/database | /opt/appdata/wizarr |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| APP_URL | APP_URL | ```https://wizarr.domain.com``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.wizarr.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.wizarr.entrypoints | ```https``` |
| traefik.http.routers.wizarr.tls.certresolver | ```default``` |
| traefik.http.routers.wizarr.rule | ```Host(`wizarr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wizarr.tls | ```true``` |
| traefik.http.routers.wizarr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wizarr``` |
| mafl.description | ```Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc.``` |
| mafl.link | ```https://wizarr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/wizarr-logo.png``` |

