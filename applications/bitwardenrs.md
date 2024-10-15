# bitwardenrs

![Logo](images/bitwardenrs.png)

## Description
This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients\*, perfect for self\-hosted deployment where running the official resource\-heavy service might not be ideal..

## Notes
This project is not associated with the Bitwarden project nor 8bit Solutions LLC.

## Image
bitwardenrs/server:latest

## Categories
- Other
- Tools

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/bitwarden-rs |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.bitwardenrs.rule | ```Host(`bitwardenrs.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.bitwardenrs.entrypoints | ```https``` |
| traefik.http.services.bitwardenrs.loadbalancer.server.port | ```53``` |
| traefik.http.routers.bitwardenrs.tls | ```true``` |
| traefik.http.routers.bitwardenrs.tls.certresolver | ```default``` |
| traefik.http.routers.bitwardenrs.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Bitwarden RS``` |
| mafl.description | ```This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.``` |
| mafl.link | ```https://bitwardenrs.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/bitwarden.png``` |

