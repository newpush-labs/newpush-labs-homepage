# adguard

![Logo](images/adguard.png)

## Description
AdGuard Home is a network\-wide software for blocking ads \& tracking. After you set it up, it’ll cover ALL your home devices, and you don’t need any client\-side software for that. With the rise of Internet\-Of\-Things and connected devices, it becomes more and more important to be able to control your whole network.

## Image
adguard/adguardhome:latest

## Categories
- Other

## Ports
- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 68:68/tcp
- 68:68/udp
- 80:80/tcp
- 443:443/tcp
- 853:853/tcp
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt/adguardhome/work | /opt/appdata/adguard/workdir |
| /opt/adguardhome/conf | /opt/appdata/adguard/conf |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |
| CONTEXT_PATH | CONTEXT_PATH | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.adguard.rule | ```Host(`adguard.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.adguard.entrypoints | ```https``` |
| traefik.http.services.adguard.loadbalancer.server.port | ```53``` |
| traefik.http.routers.adguard.tls | ```true``` |
| traefik.http.routers.adguard.tls.certresolver | ```default``` |
| traefik.http.routers.adguard.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Adguard``` |
| mafl.description | ```AdGuard Home is a network-wide software for blocking ads & tracking.``` |
| mafl.link | ```https://adguard.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/adguard.png``` |

