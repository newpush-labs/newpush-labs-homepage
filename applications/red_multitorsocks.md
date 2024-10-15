# red_multi-tor-socks

## Description
A multi TOR (x10\) \+ privoxy socks proxy instances load\-balancer 

## Notes
curl \-\-socks5 multi\-tor\-socks:9050 icanhazip.com

## Image
rdsubhas/tor-privoxy-alpine

## Categories
- Utils
- Privacy

## Ports
- 9050:9050/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_multi-tor-socks.rule | ```Host(`red_multi-tor-socks.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_multi-tor-socks.entrypoints | ```https``` |
| traefik.http.services.red_multi-tor-socks.loadbalancer.server.port | ```9050``` |
| traefik.http.routers.red_multi-tor-socks.tls | ```true``` |
| traefik.http.routers.red_multi-tor-socks.tls.certresolver | ```default``` |
| traefik.http.routers.red_multi-tor-socks.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Multi Tor Socks Proxy``` |
| mafl.description | ```A multi TOR (x10) + privoxy socks proxy instances load-balancer ``` |
| mafl.link | ```https://red_multi-tor-socks.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utils``` |
| mafl.icon.url | ```https://i.imgur.com/p3dEUKr.jpg``` |

