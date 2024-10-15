# transmission-openvpn

![Logo](images/transmissionopenvpn.png)

## Description
This container contains OpenVPN and Transmission with a configuration
where Transmission is running only when OpenVPN has an active tunnel.
It bundles configuration files for many popular VPN providers to make the setup easier.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://transmissionbt.com/>  
**Official Docker Documentation:** [https://haugene.github.io/docker\-transmission\-openvpn/run\-container/](https://haugene.github.io/docker-transmission-openvpn/run-container/)  
  
  
**Youtube Video:** [Novaspirit Tech \- Torrent with Docker and OPENVPN with Transmission and PIA](https://www.youtube.com/watch?v=tGLVEq913_4&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=5)  
  
List of supported providers available here.

## Image
haugene/transmission-openvpn:3.7.1

## Categories
- Other
- Vpn
- Tools

## Ports
- 9091:9091/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/transmission-openvpn |
| /data | /appdata/downloads |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| OPENVPN_PROVIDER | OPENVPN_PROVIDER | ```MULLVAD``` | ```https://haugene.github.io/docker-transmission-openvpn/supported-providers/``` |
| OPENVPN_CONFIG | OPENVPN_CONFIG | `````` | ```Optional. Mostly used to narrow down what location to use by the provider``` |
| OPENVPN_USERNAME | OPENVPN_USERNAME | `````` | `````` |
| OPENVPN_PASSWORD | OPENVPN_PASSWORD | `````` | `````` |
| LOCAL_NETWORK | LOCAL_NETWORK | ```192.168.0.0/24``` | `````` |
| TRANSMISSION_WATCH_DIR_ENABLED | watch-dir-enabled | ```true``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.transmission-openvpn.rule | ```Host(`transmission-openvpn.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.transmission-openvpn.entrypoints | ```https``` |
| traefik.http.services.transmission-openvpn.loadbalancer.server.port | ```9091``` |
| traefik.http.routers.transmission-openvpn.tls | ```true``` |
| traefik.http.routers.transmission-openvpn.tls.certresolver | ```default``` |
| traefik.http.routers.transmission-openvpn.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Transmission OpenVPN v3``` |
| mafl.description | ```This container contains OpenVPN and Transmission with a configuration
where Transmission is running only when OpenVPN has an active tunnel.``` |
| mafl.link | ```https://transmission-openvpn.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/transmission-icon.png``` |

