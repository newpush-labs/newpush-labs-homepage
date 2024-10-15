# memos

## Description
A privacy\-first, lightweight note\-taking service.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://usememos.com>  
**Official Docker Documentation:** <https://github.com/usememos/memos>  
  
  


## Image
ghcr.io/usememos/memos:latest

## Categories
- Other
- Web

## Ports
- 5230:5230/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/opt/memos | /opt/appdata/memos |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.memos.rule | ```Host(`memos.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.memos.entrypoints | ```https``` |
| traefik.http.services.memos.loadbalancer.server.port | ```5230``` |
| traefik.http.routers.memos.tls | ```true``` |
| traefik.http.routers.memos.tls.certresolver | ```default``` |
| traefik.http.routers.memos.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Memos``` |
| mafl.description | ```A privacy-first, lightweight note-taking service.``` |
| mafl.link | ```https://memos.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/usememos/memos/main/web/public/logo.png``` |

