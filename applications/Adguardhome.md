# Adguardhome

![Logo](images/Adguardhome.png)

## Description
AdGuard Home is a network\-wide software for blocking ads \& tracking.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://adguard.com/en/adguard\-home/overview.html](https://adguard.com/en/adguard-home/overview.html)  
**Official Docker Documentation:** <https://github.com/AdguardTeam/AdGuardHome/wiki/Docker>  
  
  


## Image
adguard/adguardhome:latest

## Categories
- Other
- Tools

## Ports
- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 80:80/tcp
- 443:443/tcp
- 443:443/udp
- 3001:3000/tcp
- 853:853/tcp
- 784:784/udp
- 853:853/udp
- 8853:8853/udp
- 5443:5443/tcp
- 5443:5443/udp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/adguardhome/conf | /opt/appdata/adguardhome/config |
| /opt/adguardhome/work | /opt/appdata/adguardhome/work |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.adguardhome.rule | ```Host(`adguardhome.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.adguardhome.entrypoints | ```https``` |
| traefik.http.services.adguardhome.loadbalancer.server.port | ```53``` |
| traefik.http.routers.adguardhome.tls | ```true``` |
| traefik.http.routers.adguardhome.tls.certresolver | ```default``` |
| traefik.http.routers.adguardhome.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Adguardhome``` |
| mafl.description | ```AdGuard Home is a network-wide software for blocking ads & tracking.``` |
| mafl.link | ```https://adguardhome.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://developer.asustor.com/uploadIcons/0020_999_1595573028_AdGuardhome_256.png``` |

