# slash

## Description
Slash is an open source, self\-hosted bookmarks and link sharing platform. It allows you to organize your links with tags, and share them with custom shortened URLs. Slash also supports team sharing of link libraries for easy collaboration.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/yourselfhosted/slash>  
**Official Docker Documentation:** <https://github.com/yourselfhosted/slash>  
  
  


## Image
yourselfhosted/slash:latest

## Categories
- Other
- Web

## Ports
- 5231:5231/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/opt//slash | /opt/appdata/slash |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.slash.rule | ```Host(`slash.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.slash.entrypoints | ```https``` |
| traefik.http.services.slash.loadbalancer.server.port | ```5231``` |
| traefik.http.routers.slash.tls | ```true``` |
| traefik.http.routers.slash.tls.certresolver | ```default``` |
| traefik.http.routers.slash.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Slash``` |
| mafl.description | ```Slash is an open source, self-hosted bookmarks and link sharing platform.``` |
| mafl.link | ```https://slash.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/yourselfhosted/slash/main/frontend/web/public/logo.png``` |

