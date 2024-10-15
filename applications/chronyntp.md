# chrony-ntp

![Logo](images/chronyntp.png)

## Description
chrony is a versatile implementation of the Network Time Protocol (NTP). It can synchronise the system clock with NTP servers, reference clocks (e.g. GPS receiver), and manual input using wristwatch and keyboard. It can also operate as an NTPv4 (RFC 5905\) server and peer to provide a time service to other computers in the network.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/cturra/docker\-ntp](https://github.com/cturra/docker-ntp)  
**Official Docker Documentation:** [https://github.com/cturra/docker\-ntp/blob/main/README.md](https://github.com/cturra/docker-ntp/blob/main/README.md)  
  
  


## Image
cturra/ntp:latest

## Categories
- Other
- Tools

## Ports
- 123:123/udp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| LOG_LEVEL | LOG_LEVEL | ```0``` | `````` |
| NTP_SERVERS | NTP_SERVERS | ```time.cloudflare.com``` | ```Additional Example: time1.google.com,time2.google.com,time3.google.com,time4.google.com``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.chrony-ntp.rule | ```Host(`chrony-ntp.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.chrony-ntp.entrypoints | ```https``` |
| traefik.http.services.chrony-ntp.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.chrony-ntp.tls | ```true``` |
| traefik.http.routers.chrony-ntp.tls.certresolver | ```default``` |
| traefik.http.routers.chrony-ntp.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Chrony NTP``` |
| mafl.description | ```chrony is a versatile implementation of the Network Time Protocol (NTP).``` |
| mafl.link | ```https://chrony-ntp.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/chrony.png``` |

