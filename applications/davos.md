# davos

![Logo](images/davos.png)

## Description
davos is an FTP automation tool that periodically scans given host locations for new files. It can be configured for various purposes, including listening for specific files to appear in the host location, ready for it to download and then move, if required. It also supports completion notifications as well as downstream API calls, to further the workflow.

## Notes
Configuration * **/config** \- AppData Location
* **/downloads** \- File Download Location


## Image
linuxserver/davos:latest

## Categories
- Ftpserver

## Ports
- 8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/davos |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.davos.rule | ```Host(`davos.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.davos.entrypoints | ```https``` |
| traefik.http.services.davos.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.davos.tls | ```true``` |
| traefik.http.routers.davos.tls.certresolver | ```default``` |
| traefik.http.routers.davos.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Davos``` |
| mafl.description | ```davos is an FTP automation tool that periodically scans given host locations for new files.``` |
| mafl.link | ```https://davos.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Ftpserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/davos.png``` |

