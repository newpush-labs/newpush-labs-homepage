# nord-vpn

![Logo](images/nordvpn.png)

## Description
This is an OpenVPN client docker container that uses recommended NordVPN server. It makes routing containers traffic through OpenVPN easy.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/azinchen/nordvpn>  
**Official Docker Documentation:** <https://hub.docker.com/r/azinchen/nordvpn>  
  
  


## Image
azinchen/nordvpn:latest

## Categories
- Other

## Ports
- 8080:80/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| USER | NordVPN user | ```user@email.com``` | `````` |
| PASS | NordVPN password | ```password``` | `````` |
| COUNTRY | Countries to connect to (see webpage readme) | ```Spain;Hong Kong;IE;131``` | `````` |
| GROUP | Group name filter to which to connect to | ```Standard VPN servers``` | `````` |
| RANDOM_TOP | Range of servers to pick from the top | ```10``` | `````` |
| RECREATE_VPN_CRON | Define when to look again for new defined servers | ```5 */3 * * *``` | `````` |
| CHECK_CONNECTION_URL | URL to check internet connection is working to | ```https://www.google.com``` | `````` |
| NETWORK | Subnet to define network access (read Local Network access to services connecting to the internet through the VPN readme to get the right subnet!) | ```192.168.1.0/24;192.168.2.0/24``` | `````` |
| OPENVPN_OPTS | Used to pass extra parameters to openvpn | ```--mute-replay-warnings``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nord-vpn.rule | ```Host(`nord-vpn.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nord-vpn.entrypoints | ```https``` |
| traefik.http.services.nord-vpn.loadbalancer.server.port | ```80``` |
| traefik.http.routers.nord-vpn.tls | ```true``` |
| traefik.http.routers.nord-vpn.tls.certresolver | ```default``` |
| traefik.http.routers.nord-vpn.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```nord-vpn``` |
| mafl.description | ```This is an OpenVPN client docker container that uses recommended NordVPN server.``` |
| mafl.link | ```https://nord-vpn.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2022/3/8/03500108885898f010e823eeb284e393b99e1ad5.png``` |

