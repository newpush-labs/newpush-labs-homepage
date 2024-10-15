# cryptofolio

## Description
Cryptofolio is an open\-source, and self\-hosted solution for tracking your cryptocurrency holdings. It features a web interface, an Android mobile app, and a cross\-platform desktop application for Windows, macOS, and Linux.

## Image
xtrendence/cryptofolio:latest

## Categories
- Dashboard
- Crypto
- Finance

## Ports
- 7280:80/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.cryptofolio.rule | ```Host(`cryptofolio.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cryptofolio.entrypoints | ```https``` |
| traefik.http.services.cryptofolio.loadbalancer.server.port | ```80``` |
| traefik.http.routers.cryptofolio.tls | ```true``` |
| traefik.http.routers.cryptofolio.tls.certresolver | ```default``` |
| traefik.http.routers.cryptofolio.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cryptofolio``` |
| mafl.description | ```Cryptofolio is an open-source, and self-hosted solution for tracking your cryptocurrency holdings.``` |
| mafl.link | ```https://cryptofolio.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboard``` |
| mafl.icon.url | ```https://i.imgur.com/5v8lzea.png``` |

