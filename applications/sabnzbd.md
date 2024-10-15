# sabnzbd

![Logo](images/sabnzbd.png)

## Description
SABnzbd makes Usenet as simple and streamlined as possible by automating everything we can. All you have to do is add an .nzb. SABnzbd takes over from there, where it will be automatically downloaded, verified, repaired, extracted and filed away with zero human interaction.

## Image
linuxserver/sabnzbd:latest

## Categories
- Usenetserver

## Ports
- 8080:8080/tcp
- 9090:9090/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/sabnzbd |
| /downloads | /appdata/downloads |
| /incomplete-downloads | /appdata/downloads/incomplete |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.sabnzbd.rule | ```Host(`sabnzbd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sabnzbd.entrypoints | ```https``` |
| traefik.http.services.sabnzbd.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.sabnzbd.tls | ```true``` |
| traefik.http.routers.sabnzbd.tls.certresolver | ```default``` |
| traefik.http.routers.sabnzbd.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SABnzbd``` |
| mafl.description | ```SABnzbd makes Usenet as simple and streamlined as possible by automating everything we can.``` |
| mafl.link | ```https://sabnzbd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Usenetserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/sabnzbd-icon.png``` |

