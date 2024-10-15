# tautulli

![Logo](images/tautulli.png)

## Description
Tautulli is a 3rd party application that you can run along side your Plex Media Server to monitor activity and track various statistics. Most importantly, these statistics include what has been watched, who watched it, when and where they watched it, and how it was watched. All statistics are presented in a nice and clean interface with many tables and graphs, which makes it easy to brag about your server to everyone else.

## Notes
**Port 8181** The webui for Tautulli's webui  
Configuration * **/config** \- Storing Configuration and the Tautulli database
* **/logs** \- Map to you plex logs (required for IP logging)


## Image
linuxserver/tautulli:latest

## Categories
- Mediaserver

## Ports
- 8181:8181/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /logs | /appdata/logs |
| /config | /opt/appdata/tautulli |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.tautulli.rule | ```Host(`tautulli.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.tautulli.entrypoints | ```https``` |
| traefik.http.services.tautulli.loadbalancer.server.port | ```8181``` |
| traefik.http.routers.tautulli.tls | ```true``` |
| traefik.http.routers.tautulli.tls.certresolver | ```default``` |
| traefik.http.routers.tautulli.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Tautulli``` |
| mafl.description | ```Tautulli is a 3rd party application that you can run along side your Plex Media Server to monitor activity and track various statistics.``` |
| mafl.link | ```https://tautulli.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Mediaserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/tautulli-icon.png``` |

