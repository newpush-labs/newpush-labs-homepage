# pihole-unbound

![Logo](images/piholeunbound.png)

## Description
A Linux network\-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole. This version has Ubound software installed on it so you don't need to rely on external DNS providers. When the installation is complete, navigate to your.ip.goes.here:1010/admin. Follow the article 

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://pi\-hole.net/](https://pi-hole.net/)  
**Official Docker Documentation:** [https://github.com/chriscrowe/docker\-pihole\-unbound/tree/master/one\-container](https://github.com/chriscrowe/docker-pihole-unbound/tree/master/one-container)  
### **Pi\-Hosted dedicated documentation:** [pi\-hole.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/pi-hole.md)

  
  
  
When the installation is complete, navigate to your.ip.goes.here:1010/admin. Follow the article [here](https://medium.com/@niktrix/getting-rid-of-systemd-resolved-consuming-port-53-605f0234f32f) if you run into issues binding to port 53\. For extra information on this container visit the mainteiner [GitHub Page](https://github.com/chriscrowe/docker-pihole-unbound/tree/master/one-container). You can add ports: 5335 to access Ubound externally; 22 to enable SSH; 67 to use DHCP Server. Add those ports in Show advanced options. if you run into issues binding to port 53\. If you like to use Pi\-Hole's built in DHCP\-Server change the Network type to host and open advance options and scroll to Labels and add: NET\_ADMIN with the value True. When you do so, specify a port is no more needed, navigate to your.ip.goes.here/admin.

## Image
cbcrowe/pihole-unbound:latest

## Categories
- Other
- Tools

## Ports
- 53:53/tcp
- 53:53/udp
- 1010:80/tcp
- 4443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/pihole | /opt/appdata/pihole-unbound |
| /etc/dnsmasq.d | /opt/appdata/pihole-unbound/dns |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| ServerIP | ServerIP | ```192.168.0.X``` | ```Insert the Raspberry Pi IP here``` |
| TZ | TZ | ```Europe\London``` | `````` |
| DNSSEC | DNSSEC | `````` | `````` |
| DNS1 | DNS1 | ```127.0.0.1#5335``` | `````` |
| DNS2 | DNS2 | ```127.0.0.1#5335``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pihole-unbound.rule | ```Host(`pihole-unbound.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pihole-unbound.entrypoints | ```https``` |
| traefik.http.services.pihole-unbound.loadbalancer.server.port | ```53``` |
| traefik.http.routers.pihole-unbound.tls | ```true``` |
| traefik.http.routers.pihole-unbound.tls.certresolver | ```default``` |
| traefik.http.routers.pihole-unbound.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pi-Hole-Unbound``` |
| mafl.description | ```A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole.``` |
| mafl.link | ```https://pihole-unbound.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pihole-unbound.png``` |

