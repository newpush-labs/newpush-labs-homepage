# Pairdrop

![Logo](images/Pairdrop.png)

## Description
PairDrop is a sublime alternative to AirDrop that works on all platforms. Send images, documents or text via peer to peer connection to devices in the same local network/Wi\-Fi or to paired devices.

## Image
linuxserver/pairdrop:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/pairdrop |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| RATE_LIMIT | RATE_LIMIT | ```false``` | ```Set to `true` to limit clients to 100 requests per 5 min``` |
| WS_FALLBACK | WS_FALLBACK | ```false``` | ```Set to `true` to enable websocket fallback if the peer to peer WebRTC connection is not available to the client (see App Setup notes).``` |
| RTC_CONFIG | RTC_CONFIG | `````` | ```Path to a json file containing custom STUN/TURN config (see App Setup notes)``` |
| DEBUG_MODE | DEBUG_MODE | ```false``` | ```Set to `true` to debug the http server configuration by logging clients IP addresses used by PairDrop to STDOUT. [See here for more info](https://github.com/schlagmichdoch/PairDrop/blob/master/docs/host-your-own.md#debug-mode). Do not use in production!``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pairdrop.rule | ```Host(`pairdrop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pairdrop.entrypoints | ```https``` |
| traefik.http.services.pairdrop.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.pairdrop.tls | ```true``` |
| traefik.http.routers.pairdrop.tls.certresolver | ```default``` |
| traefik.http.routers.pairdrop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pairdrop``` |
| mafl.description | ```PairDrop is a sublime alternative to AirDrop that works on all platforms.``` |
| mafl.link | ```https://pairdrop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/public/images/android-chrome-512x512.png``` |

