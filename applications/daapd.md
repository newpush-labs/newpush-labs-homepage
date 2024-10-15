# daapd

![Logo](images/daapd.png)

## Description
DAAP (iTunes) media server with support for AirPlay devices, Apple Remote (and compatibles), MPD and internet radio.

## Image
linuxserver/daapd:latest

## Categories
- Musicserver

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/daapd |
| /music | /appdata/music |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

