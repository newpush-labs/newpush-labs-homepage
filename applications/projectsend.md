# projectsend

![Logo](images/projectsend.png)

## Description
ProjectSend is a self\-hosted application that lets you upload files and assign them to specific clients that you create yourself! Secure, private and easy. No more depending on external services or e\-mail to send those files.

## Image
linuxserver/projectsend:latest

## Categories
- Cloud
- Productivity
- Tools
- Other

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/projectsend |
| /config | /opt/appdata/projectsend |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.projectsend.rule | ```Host(`projectsend.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.projectsend.entrypoints | ```https``` |
| traefik.http.services.projectsend.loadbalancer.server.port | ```80``` |
| traefik.http.routers.projectsend.tls | ```true``` |
| traefik.http.routers.projectsend.tls.certresolver | ```default``` |
| traefik.http.routers.projectsend.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ProjectSend``` |
| mafl.description | ```ProjectSend is a self-hosted application that lets you upload files and assign them to specific clients that you create yourself!``` |
| mafl.link | ```https://projectsend.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Cloud``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/projectsend-logo.png``` |

