# domoticz

![Logo](images/domoticz.png)

## Description
Domoticz is a Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. Notifications/Alerts can be sent to any mobile device.

## Image
linuxserver/domoticz:latest

## Categories
- Smarthome

## Ports
- 1443:1443/tcp
- 6144:6144/tcp
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/domoticz |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.domoticz.rule | ```Host(`domoticz.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.domoticz.entrypoints | ```https``` |
| traefik.http.services.domoticz.loadbalancer.server.port | ```1443``` |
| traefik.http.routers.domoticz.tls | ```true``` |
| traefik.http.routers.domoticz.tls.certresolver | ```default``` |
| traefik.http.routers.domoticz.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Domoticz``` |
| mafl.description | ```Domoticz is a Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more.``` |
| mafl.link | ```https://domoticz.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://github.com/domoticz/domoticz/raw/master/www/images/logo.png``` |

