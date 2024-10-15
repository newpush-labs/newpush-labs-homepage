# Homeassistant

![Logo](images/Homeassistant.png)

## Description
Home Assistant Core \- Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server.

## Image
linuxserver/homeassistant:latest

## Categories
- Smarthome

## Ports
- 8123:8123/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/homeassistant |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.homeassistant.rule | ```Host(`homeassistant.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.homeassistant.entrypoints | ```https``` |
| traefik.http.services.homeassistant.loadbalancer.server.port | ```8123``` |
| traefik.http.routers.homeassistant.tls | ```true``` |
| traefik.http.routers.homeassistant.tls.certresolver | ```default``` |
| traefik.http.routers.homeassistant.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Homeassistant``` |
| mafl.description | ```Home Assistant Core - Open source home automation that puts local control and privacy first.``` |
| mafl.link | ```https://homeassistant.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Smarthome``` |
| mafl.icon.url | ```https://github.com/home-assistant/home-assistant.io/raw/next/source/images/favicon-192x192-full.png``` |

