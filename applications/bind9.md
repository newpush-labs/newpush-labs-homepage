# bind9

![Logo](images/bind9.png)

## Description
BIND 9 provides software for Domain Name System (DNS) management including both defining domain names authoritatively for a given DNS zone, and recursively resolving domain names to their IP addresses. In addition to BIND 9's DNS server itself, named, this container also includes tools for performing DNS queries and dynamic updates. Read more on the BIND 9 https://www.isc.org/bind/ 

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://hub.docker.com/r/ubuntu/bind9>  
**Official Docker Documentation:** <https://hub.docker.com/r/ubuntu/bind9>  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_bind9.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_bind9\.sh \| bash

  
  


## Image
ubuntu/bind9:latest

## Categories
- Dns
- Tools

## Ports
- 53:53/tcp
- 53:53/udp

## Volumes
| Container | Bind |
|-----------|------|
| etc/bind/named.conf | /opt/appdata/bind9/named.conf |
| /var/cache/bind | /opt/appdata/bind9/cache |
| /var/lib/bind | /opt/appdata/bind9/bind |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/Chicago``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.bind9.rule | ```Host(`bind9.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.bind9.entrypoints | ```https``` |
| traefik.http.services.bind9.loadbalancer.server.port | ```53``` |
| traefik.http.routers.bind9.tls | ```true``` |
| traefik.http.routers.bind9.tls.certresolver | ```default``` |
| traefik.http.routers.bind9.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Bind9``` |
| mafl.description | ```BIND 9 provides software for Domain Name System (DNS) management including both defining domain names authoritatively for a given DNS zone, and recursively resolving domain names to their IP addresses.``` |
| mafl.link | ```https://bind9.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dns``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/bind9.png``` |

