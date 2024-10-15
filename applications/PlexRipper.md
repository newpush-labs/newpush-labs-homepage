# PlexRipper

![Logo](images/PlexRipper.png)

## Description
PlexRipper is a cross\-platform media downloader that indexes the Plex servers you have access to and allows you to download everything while adding it to your own Plex server.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/plexripper/plexripper>  
**Official Docker Documentation:** <https://github.com/PlexRipper/PlexRipper>  
  
  


## Image
plexripper/plexripper:latest

## Categories
- Downloader

## Ports
- 7000:7000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/plexripper |
| /Downloads | /appdata/downloads |
| /Movies | /appdata/downloads/movies |
| /TvShows | /appdata/downloads/tvshows |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.plexripper.rule | ```Host(`plexripper.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.plexripper.entrypoints | ```https``` |
| traefik.http.services.plexripper.loadbalancer.server.port | ```7000``` |
| traefik.http.routers.plexripper.tls | ```true``` |
| traefik.http.routers.plexripper.tls.certresolver | ```default``` |
| traefik.http.routers.plexripper.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```PlexRipper``` |
| mafl.description | ```PlexRipper is a cross-platform media downloader that indexes the Plex servers you have access to and allows you to download everything while adding it to your own Plex server.``` |
| mafl.link | ```https://plexripper.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Downloader``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/PlexRipper/PlexRipper/dev/export/plexripper/logo/full/full-logo-256.png``` |

