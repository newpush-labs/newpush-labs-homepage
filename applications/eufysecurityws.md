# eufy-security-ws

![Logo](images/eufysecurityws.png)

## Description
Eufy Security Web Socket. Edit container and add username \& password.

## Image
bropat/eufy-security-ws:latest

## Categories
- Tools

## Ports
- 3993:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/eufy-security-ws |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| USERNAME | USERNAME | ```InputUSER-email``` | `````` |
| PASSWORD | PASSWORD | ```InputPWD``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.eufy-security-ws.rule | ```Host(`eufy-security-ws.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.eufy-security-ws.entrypoints | ```https``` |
| traefik.http.services.eufy-security-ws.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.eufy-security-ws.tls | ```true``` |
| traefik.http.routers.eufy-security-ws.tls.certresolver | ```default``` |
| traefik.http.routers.eufy-security-ws.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Eufy Security WS``` |
| mafl.description | ```Eufy Security Web Socket.``` |
| mafl.link | ```https://eufy-security-ws.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://github.com/bropat/eufy-security-ws/raw/master/docs/_media/eufy-security-ws.png``` |

