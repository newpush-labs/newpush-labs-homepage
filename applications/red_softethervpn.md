# red_softethervpn

## Description
A simple SoftEther VPN server

## Image
siomiz/softethervpn

## Categories
- Vpn
- Utils
- Privacy

## Ports
- 500:500/udp
- 4500:4500/udp
- 1701:1701/tcp
- 1194:1194/udp
- 5555:5555/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_softethervpn.rule | ```Host(`red_softethervpn.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_softethervpn.entrypoints | ```https``` |
| traefik.http.services.red_softethervpn.loadbalancer.server.port | ```1701``` |
| traefik.http.routers.red_softethervpn.tls | ```true``` |
| traefik.http.routers.red_softethervpn.tls.certresolver | ```default``` |
| traefik.http.routers.red_softethervpn.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SoftEtherVPN``` |
| mafl.description | ```A simple SoftEther VPN server``` |
| mafl.link | ```https://red_softethervpn.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vpn``` |
| mafl.icon.url | ```https://i.imgur.com/zzhyywo.jpg``` |

