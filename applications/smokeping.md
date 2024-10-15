# smokeping

![Logo](images/smokeping.png)

## Description
SmokePing is a latency logging and graphing and alerting system. It consists of a daemon process which organizes the latency measurements and a CGI which presents the graphs.

## Image
linuxserver/smokeping:latest

## Categories
- Taskserver

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/smokeping |
| /data | /opt/appdata/smokeping |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.smokeping.rule | ```Host(`smokeping.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.smokeping.entrypoints | ```https``` |
| traefik.http.services.smokeping.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.smokeping.tls | ```true``` |
| traefik.http.routers.smokeping.tls.certresolver | ```default``` |
| traefik.http.routers.smokeping.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SmokePing``` |
| mafl.description | ```SmokePing is a latency logging and graphing and alerting system.``` |
| mafl.link | ```https://smokeping.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/smokeping-icon.png``` |

