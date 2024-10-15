# unifi-controller

![Logo](images/unificontroller.png)

## Description
The Unifi\-controller Controller software is a powerful, enterprise wireless software engine ideal for high\-density client deployments requiring low latency and high uptime performance.

## Image
linuxserver/unifi-controller:latest

## Categories
- Smarthome

## Ports
- 3478:3478/udp
- 10001:10001/udp
- 8080:8080/tcp
- 8081:8081/tcp
- 8443:8443/tcp
- 8843:8843/tcp
- 8880:8880/tcp
- 6789:6789/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/unifi |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.unifi-controller.rule | ```Host(`unifi-controller.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.unifi-controller.entrypoints | ```https``` |
| traefik.http.services.unifi-controller.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.unifi-controller.tls | ```true``` |
| traefik.http.routers.unifi-controller.tls.certresolver | ```default``` |
| traefik.http.routers.unifi-controller.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```UniFi Controller``` |
| mafl.description | ```The Unifi-controller Controller software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.``` |
| mafl.link | ```https://unifi-controller.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/unifi-icon.png``` |

