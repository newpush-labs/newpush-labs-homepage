# passky-client

![Logo](images/passkyclient.png)

## Description
Passky is a simple, modern, lightweight, open\-source and secure password manager.

## Image
rabbitcompany/passky-client:latest

## Categories
- Other
- Tools

## Ports
- 8081:80/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.passky-client.rule | ```Host(`passky-client.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.passky-client.entrypoints | ```https``` |
| traefik.http.services.passky-client.loadbalancer.server.port | ```80``` |
| traefik.http.routers.passky-client.tls | ```true``` |
| traefik.http.routers.passky-client.tls.certresolver | ```default``` |
| traefik.http.routers.passky-client.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Passky Client``` |
| mafl.description | ```Passky is a simple, modern, lightweight, open-source and secure password manager.``` |
| mafl.link | ```https://passky-client.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/passky-icon.png``` |

