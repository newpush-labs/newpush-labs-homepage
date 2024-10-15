# homebridge

![Logo](images/homebridge.png)

## Description
Homebridge allows you to integrate with smart home devices that do not natively support HomeKit. There are over 2,000 Homebridge plugins supporting thousands of different smart accessories.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://homebridge.io/>  
**Official Docker Documentation:** [https://github.com/homebridge/homebridge/wiki/Install\-Homebridge\-on\-Docker](https://github.com/homebridge/homebridge/wiki/Install-Homebridge-on-Docker)  
  
  
Bringing HomeKit support where there is none

## Image
homebridge/homebridge:latest

## Categories
- Homeautomation

## Volumes
| Container | Bind |
|-----------|------|
| /homebridge | /opt/appdata/homebridge |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PGID | PGID | ```1000``` | `````` |
| PUID | PUID | ```1000``` | `````` |
| HOMEBRIDGE_CONFIG_UI | HOMEBRIDGE_CONFIG_UI | ```1``` | `````` |
| HOMEBRIDGE_CONFIG_UI_PORT | HOMEBRIDGE_CONFIG_UI_PORT | ```8581``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |

