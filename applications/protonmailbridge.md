# protonmail-bridge

![Logo](images/protonmailbridge.png)

## Description
This is an unofficial Docker container of the ProtonMail Bridge. Some of the scripts are based on Hendrik Meyer's work.

## Notes
Please refer to the documentation here to set this up.

## Image
shenxn/protonmail-bridge:latest

## Categories
- Email

## Ports
- 143/tcp
- 25/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /root | /opt/appdata/protonmail-bridge |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.protonmail-bridge.rule | ```Host(`protonmail-bridge.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.protonmail-bridge.entrypoints | ```https``` |
| traefik.http.services.protonmail-bridge.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.protonmail-bridge.tls | ```true``` |
| traefik.http.routers.protonmail-bridge.tls.certresolver | ```default``` |
| traefik.http.routers.protonmail-bridge.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ProtonMail Bridge``` |
| mafl.description | ```This is an unofficial Docker container of the ProtonMail Bridge.``` |
| mafl.link | ```https://protonmail-bridge.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Email``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/protonmail-bridge.png``` |

