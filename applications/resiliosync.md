# resilio-sync

![Logo](images/resiliosync.png)

## Description
Resilio Sync (formerly BitTorrent Sync) uses the BitTorrent protocol to sync files and folders between all of your devices. There are both free and paid versions, this container supports both.

## Image
linuxserver/resilio-sync:latest

## Categories
- Backupandsyncserver

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/resilio-sync |
| /sync |  |
| /downloads | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

