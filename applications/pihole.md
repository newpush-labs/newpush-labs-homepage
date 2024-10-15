# pihole

![Logo](images/pihole.png)

## Description
A Linux network\-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole.

## Notes
When the installation is complete, navigate to your.ip.goes.here:1010/admin. Follow the article [here](https://medium.com/@niktrix/getting-rid-of-systemd-resolved-consuming-port-53-605f0234f32f) if you run into issues binding to port 53\.

## Image
pihole/pihole:latest

## Categories
- Dns

## Ports
- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 1010:80/tcp
- 4443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/pihole | /opt/appdata/pihole |
| /etc/dnsmasq.d | /opt/appdata/pihole/dns |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pihole.rule | ```Host(`pihole.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pihole.entrypoints | ```https``` |
| traefik.http.services.pihole.loadbalancer.server.port | ```53``` |
| traefik.http.routers.pihole.tls | ```true``` |
| traefik.http.routers.pihole.tls.certresolver | ```default``` |
| traefik.http.routers.pihole.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Pi-Hole``` |
| mafl.description | ```A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole.``` |
| mafl.link | ```https://pihole.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dns``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/pihole.png``` |

