# plex

![Logo](images/plex.png)

## Description
Plex organizes your video, music, and photo collections and streams them to all of your screens.

## Image
linuxserver/plex:latest

## Categories
- Mediaservervideo
- Mediaservermusic
- Mediaserverphotos

## Ports

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/plex |
| /data/tvshows | /opt/appdata/tvshows |
| /data/movies | /opt/appdata/movies |
| /data/music | /opt/appdata/music |
| /transcode |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```15000``` | `````` |
| PUID | PUID | ```15000``` | `````` |
| TZ | TZ | ```America/Los_Angeles``` | `````` |
| VERSION | VERSION | ```latest``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.plex.loadbalancer.server.port | ```32400``` |

