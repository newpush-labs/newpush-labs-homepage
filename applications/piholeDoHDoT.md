# pihole DoH/DoT

![Logo](images/piholeDoHDoT.png)

## Description
A Linux network\-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole with both DoH (DNS over HTTPS) and DoT (DNS over TLS) clients.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://pi\-hole.net/](https://pi-hole.net/)  
**Official Docker Documentation:** [https://hub.docker.com/r/oijkn/pihole\-doh\-dot](https://hub.docker.com/r/oijkn/pihole-doh-dot)  
### **Pi\-Hosted dedicated documentation:** [pi\-hole.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/pi-hole.md)

  
  
  
When the installation is complete, navigate to your.ip.goes.here:1010/admin. Follow the article [here](https://medium.com/@niktrix/getting-rid-of-systemd-resolved-consuming-port-53-605f0234f32f) if you run into issues binding to port 53\. If you like to use Pi\-Hole's built in DHCP\-Server change the Network type to host and open advance options and scroll to Labels and add: NET\_ADMIN with the value True. When you do so, specify a port is no more needed, navigate to your.ip.goes.here/admin.

## Image
oijkn/pihole-doh-dot:latest

## Categories
- Other
- Tools

## Ports
- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 1010:80/tcp
- 4443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/pihole | /opt/appdata/pihole_doh-dot |
| /etc/dnsmasq.d | /opt/appdata/pihole_doh-dot/dns |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.piholedohdot.rule | ```Host(`piholedohdot.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.piholedohdot.entrypoints | ```https``` |
| traefik.http.services.piholedohdot.loadbalancer.server.port | ```53``` |
| traefik.http.routers.piholedohdot.tls | ```true``` |
| traefik.http.routers.piholedohdot.tls.certresolver | ```default``` |
| traefik.http.routers.piholedohdot.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pi-Hole DoH/DoT``` |
| mafl.description | ```A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole with both DoH (DNS over HTTPS) and DoT (DNS over TLS) clients.``` |
| mafl.link | ```https://piholedohdot.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pihole_doh-dot.png``` |

