# Wireguard

![Logo](images/Wireguard.png)

## Description
WireGuard® is an extremely simple yet fast and modern VPN that utilizes state\-of\-the\-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross\-platform (Windows, macOS, BSD, iOS, Android) and widely deployable. It is currently under heavy development, but already it might be regarded as the most secure, easiest to use, and simplest VPN solution in the industry.

## Image
linuxserver/wireguard:latest

## Categories
- Vpnserver

## Ports
- 51820:51820/udp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/wireguard/config |
| /lib/modules | /lib/modules |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| SERVERURL | SERVERURL | ```wireguard.domain.com``` | ```External IP or domain name for docker host. Used in server mode. If set to `auto`, the container will try to determine and set the external IP automatically``` |
| SERVERPORT | SERVERPORT | ```51820``` | ```External port for docker host. Used in server mode.``` |
| PEERS | PEERS | ```1``` | ```Number of peers to create confs for. Required for server mode. Can also be a list of names: `myPC,myPhone,myTablet` (alphanumeric only)``` |
| PEERDNS | PEERDNS | ```auto``` | ```DNS server set in peer/client configs (can be set as `8.8.8.8`). Used in server mode. Defaults to `auto`, which uses wireguard docker host's DNS via included CoreDNS forward.``` |
| INTERNAL_SUBNET | INTERNAL_SUBNET | ```10.13.13.0``` | ```Internal subnet for the wireguard and server and peers (only change if it clashes). Used in server mode.``` |
| ALLOWEDIPS | ALLOWEDIPS | ```0.0.0.0/0``` | ```The IPs/Ranges that the peers will be able to reach using the VPN connection. If not specified the default value is: '0.0.0.0/0, ::0/0' This will cause ALL traffic to route through the VPN, if you want split tunneling, set this to only the IPs you would like to use the tunnel AND the ip of the server's WG ip, such as 10.13.13.1.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.wireguard.rule | ```Host(`wireguard.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wireguard.entrypoints | ```https``` |
| traefik.http.services.wireguard.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.wireguard.tls | ```true``` |
| traefik.http.routers.wireguard.tls.certresolver | ```default``` |
| traefik.http.routers.wireguard.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wireguard``` |
| mafl.description | ```WireGuard® is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography.``` |
| mafl.link | ```https://wireguard.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vpnserver``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_of_WireGuard.png/320px-Logo_of_WireGuard.png``` |

