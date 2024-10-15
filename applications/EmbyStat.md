# EmbyStat

![Logo](images/EmbyStat.png)

## Description
Embystat is a personal web server that can calculate all kinds of statistics from your (local) Emby server. Just install this on your server and let him calculate all kinds of fun stuff.

## Notes
Access the ui at your\-ip:6555\. Follow the setup wizard on initial install. Then configure the required services.

## Image
linuxserver/embystat:latest

## Categories
- Mediaserver

## Ports
- 6555:6555/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/embystat |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.embystat.rule | ```Host(`embystat.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.embystat.entrypoints | ```https``` |
| traefik.http.services.embystat.loadbalancer.server.port | ```6555``` |
| traefik.http.routers.embystat.tls | ```true``` |
| traefik.http.routers.embystat.tls.certresolver | ```default``` |
| traefik.http.routers.embystat.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```EmbyStat``` |
| mafl.description | ```Embystat is a personal web server that can calculate all kinds of statistics from your (local) Emby server.``` |
| mafl.link | ```https://embystat.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/embystat.png``` |

