# libresonic

![Logo](images/libresonic.png)

## Description
Libresonic is a free, web\-based media streamer, providing ubiqutious access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room. /music \= Location of music. /media \= Location of other media. /podcasts \= Location of podcasts. /playlists \= Location for playlists storage. CONTEXT\_PATH is for setting url\-base in reverse proxy setups \- (optional) Default user/pass is admin/admin

## Image
linuxserver/libresonic:latest

## Categories

## Ports
- 4040/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /music |  |
| /playlists |  |
| /podcasts |  |
| /media |  |
| /config |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| CONTEXT_PATH | CONTEXT_PATH | `````` | `````` |
| PUID | PUID | `````` | `````` |
| PGID | PGID | `````` | `````` |
| TZ | TZ | `````` | `````` |

