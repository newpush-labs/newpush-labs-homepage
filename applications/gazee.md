# gazee

![Logo](images/gazee.png)

## Description
A WebApp Comic Reader for your favorite digital comics. Reach and read your comic library from any web connected device with a modern web browser.

## Image
linuxserver/gazee:latest

## Categories
- Libraryserver

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/gazee |
| /comics | /appdata/comics |
| /mylar | /opt/appdata/gazee |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

