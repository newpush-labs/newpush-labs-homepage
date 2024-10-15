# eclipse-mosquitto

![Logo](images/eclipsemosquitto.png)

## Description
Eclipse Mosquitto is an open source message broker that implements the MQTT protocol versions 5\.0, 3\.1\.1 and 3\.1\. Mosquitto is lightweight and is suitable for use on all devices from low power single board computers to full servers.
Have a look on https://mosquitto.org/man/mosquitto\_passwd\-1\.html

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://mosquitto.org/>  
**Official Docker Documentation:** <https://mosquitto.org/>  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_mosquitto.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_mosquitto.sh \| bash

  
  


## Image
eclipse-mosquitto:latest

## Categories
- Other
- Tools

## Ports
- 1883:1883/tcp
- 9001:9001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /mosquitto/config | /opt/appdata/eclipse-mosquitto/config |
| /mosquitto/data | /opt/appdata/eclipse-mosquitto/data |
| /mosquitto/log | /opt/appdata/eclipse-mosquitto/log |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.eclipse-mosquitto.rule | ```Host(`eclipse-mosquitto.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.eclipse-mosquitto.entrypoints | ```https``` |
| traefik.http.services.eclipse-mosquitto.loadbalancer.server.port | ```1883``` |
| traefik.http.routers.eclipse-mosquitto.tls | ```true``` |
| traefik.http.routers.eclipse-mosquitto.tls.certresolver | ```default``` |
| traefik.http.routers.eclipse-mosquitto.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Eclipse Mosquitto MQTT``` |
| mafl.description | ```Eclipse Mosquitto is an open source message broker that implements the MQTT protocol versions 5.``` |
| mafl.link | ```https://eclipse-mosquitto.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/eclipse-mosquitto.png``` |

