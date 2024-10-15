# huginn

![Logo](images/huginn.png)

## Description
Create agents that monitor and act on your behalf.

## Image
huginn/huginn:latest

## Categories
- Taskserver

## Ports
- 3000:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/mysql | /opt/appdata/huginn |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.huginn.rule | ```Host(`huginn.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.huginn.entrypoints | ```https``` |
| traefik.http.services.huginn.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.huginn.tls | ```true``` |
| traefik.http.routers.huginn.tls.certresolver | ```default``` |
| traefik.http.routers.huginn.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Huginn``` |
| mafl.description | ```Create agents that monitor and act on your behalf.``` |
| mafl.link | ```https://huginn.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/huginn.png``` |

