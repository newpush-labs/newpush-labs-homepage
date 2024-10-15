# red_tor-socks

## Description
The smallest (15 MB) docker image with Tor and Privoxy on Alpine Linux

## Notes
curl \-\-proxy tor\-socks:8118 icanhazip.com   
curl \-\-socks5 tor\-socks:9050 icanhazip.com

## Image
rdsubhas/tor-privoxy-alpine

## Categories
- Utils
- Privacy

## Ports
- 8118:8118/tcp
- 9050:9050/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_tor-socks.rule | ```Host(`red_tor-socks.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_tor-socks.entrypoints | ```https``` |
| traefik.http.services.red_tor-socks.loadbalancer.server.port | ```8118``` |
| traefik.http.routers.red_tor-socks.tls | ```true``` |
| traefik.http.routers.red_tor-socks.tls.certresolver | ```default``` |
| traefik.http.routers.red_tor-socks.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Tor Socks Proxy``` |
| mafl.description | ```The smallest (15 MB) docker image with Tor and Privoxy on Alpine Linux``` |
| mafl.link | ```https://red_tor-socks.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utils``` |
| mafl.icon.url | ```https://i.imgur.com/p3dEUKr.jpg``` |

