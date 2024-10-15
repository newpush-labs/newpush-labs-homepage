# Habridge

![Logo](images/Habridge.ico)

## Description
Habridge emulates Philips Hue API to other home automation gateways such as an Amazon Echo/Dot Gen 1 (gen 2 has issues discovering ha\-bridge) or other systems that support Philips Hue. https://github.com/bwssytems/ha\-bridge/wiki

## Image
linuxserver/habridge:latest

## Categories
- Smarthome

## Ports
- 8080:8080/tcp
- 50000:50000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/habridge |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| SEC_KEY | SEC_KEY | ```<Your Key To Encrypt Security Data>``` | ```Key used to secure communication.``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.habridge.rule | ```Host(`habridge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.habridge.entrypoints | ```https``` |
| traefik.http.services.habridge.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.habridge.tls | ```true``` |
| traefik.http.routers.habridge.tls.certresolver | ```default``` |
| traefik.http.routers.habridge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Habridge``` |
| mafl.description | ```Habridge emulates Philips Hue API to other home automation gateways such as an Amazon Echo/Dot Gen 1 (gen 2 has issues discovering ha-bridge) or other systems that support Philips Hue.``` |
| mafl.link | ```https://habridge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/bwssytems/ha-bridge/master/src/main/resources/public/img/favicon.ico``` |

