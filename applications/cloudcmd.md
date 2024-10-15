# cloudcmd

![Logo](images/cloudcmd.png)

## Description
Cloud Commander a file manager for the web with console and editor.

## Image
coderaiser/cloudcmd

## Categories
- Documents
- Networkother
- Tools

## Ports
- 8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /media/host/opt/mediadepot | /opt/mediadepot/apps |
| /media/host/media/storage | /appdata/storage |
| /media/host/media/temp | /appdata/temp |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.cloudcmd.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.cloudcmd.entrypoints | ```https``` |
| traefik.http.routers.cloudcmd.tls.certresolver | ```default``` |
| traefik.http.routers.cloudcmd.middlewares | ```traefik-forward-auth``` |
| traefik.http.middlewares.authme.forwardauth.address | ```http://authelia:9091/api/verify?rd=https://login.${DEPOT_DOMAIN_NAME}/``` |
| traefik.http.middlewares.authme.forwardauth.trustforwardheader | ```true``` |
| traefik.http.routers.cloudcmd.rule | ```Host(`cloudcmd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.cloudcmd.tls | ```true``` |
| mafl.enable | ```true``` |
| mafl.title | ```Cloud Commander``` |
| mafl.description | ```Cloud Commander a file manager for the web with console and editor.``` |
| mafl.link | ```https://cloudcmd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Documents``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/cloudcmd-logo.png``` |

