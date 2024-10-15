# deluge-openvpn

## Description
This container contains OpenVPN and Deluge with a configuration where Deluge is running only when OpenVPN has an active tunnel. It bundles configuration files for many popular VPN providers to make the setup easier.

## Image
sgtsquiggs/deluge-openvpn:latest

## Categories
- Other
- Vpn
- Tools

## Ports
- 8112:8112/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/localtime | /etc/localtime |
| /downloads | /appdata/downloads |
| /config | /opt/appdata/delugeopenvpn/config |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1001``` | `````` |
| PUID | PGID | ```1001``` | `````` |
| OPENVPN_PROVIDER | OPENVPN_PROVIDER | ```MULLVAD``` | ```see https://github.com/sgtsquiggs/docker-deluge-openvpn``` |
| OPENVPN_USERNAME | OPENVPN_USERNAME | `````` | `````` |
| OPENVPN_PASSWORD | OPENVPN_PASSWORD | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.deluge-openvpn.rule | ```Host(`deluge-openvpn.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.deluge-openvpn.entrypoints | ```https``` |
| traefik.http.services.deluge-openvpn.loadbalancer.server.port | ```8112``` |
| traefik.http.routers.deluge-openvpn.tls | ```true``` |
| traefik.http.routers.deluge-openvpn.tls.certresolver | ```default``` |
| traefik.http.routers.deluge-openvpn.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Deluge openvpn``` |
| mafl.description | ```This container contains OpenVPN and Deluge with a configuration where Deluge is running only when OpenVPN has an active tunnel.``` |
| mafl.link | ```https://deluge-openvpn.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.name | ```simple-icons:docker``` |

