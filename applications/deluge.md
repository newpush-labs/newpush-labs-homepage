# deluge

![Logo](images/deluge.png)

## Description
Deluge is a lightweight, Free Software, cross\-platform BitTorrent client providing: Full Encryption, WebUI, Plugin System, Much more...

## Image
linuxserver/deluge:latest

## Categories
- Torrentserver

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/deluge |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| UMASK_SET | UMASK_SET | `````` | `````` |

