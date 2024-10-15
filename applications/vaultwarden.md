# vaultwarden

![Logo](images/vaultwarden.png)

## Description
This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients\*, perfect for self\-hosted deployment where running the official resource\-heavy service might not be ideal.

## Notes
This project is not associated with the Bitwarden project nor 8bit Solutions LLC.

## Image
vaultwarden/server:latest

## Categories
- Passwordserver

## Ports
- :80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/vaultwarden |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.vaultwarden.rule | ```Host(`vaultwarden.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.vaultwarden.entrypoints | ```https``` |
| traefik.http.services.vaultwarden.loadbalancer.server.port | ```80``` |
| traefik.http.routers.vaultwarden.tls | ```true``` |
| traefik.http.routers.vaultwarden.tls.certresolver | ```default``` |
| traefik.http.routers.vaultwarden.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vaultwarden``` |
| mafl.description | ```This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.``` |
| mafl.link | ```https://vaultwarden.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Passwordserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/bitwarden.png``` |

