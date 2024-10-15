# webgrabplus

![Logo](images/webgrabplus.png)

## Description
WebGrab\+Plus is a multi\-site incremental xmltv epg grabber. It collects tv\-program guide data from selected tvguide sites for your favourite channels.

## Notes
Configuration * **/config** \- This is where WebGrab\+Plus will store it's configuration
* **/data** \- This is where tv\_grab\_wg script in the Tvheadend container looks for the guide.xml file.


## Image
linuxserver/webgrabplus:latest

## Categories
- Downloaders

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/webgrabplus |
| /data | /opt/appdata/webgrabplus |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

