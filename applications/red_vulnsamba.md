# red_vuln-samba

## Description
Vulnerable Samba Installation \- CVE\-2017\-7494

## Notes
If you want to access, use the following credentials. User: sambacry Password: nosambanocry

## Image
hmlio/vulnerables/cve-2017-7494

## Categories
- Vulnerable
- Smb

## Ports
- 445:445/tcp
- 137-139:137-139/tcp
- 6699:6699/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_vuln-samba.rule | ```Host(`red_vuln-samba.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_vuln-samba.entrypoints | ```https``` |
| traefik.http.services.red_vuln-samba.loadbalancer.server.port | ```445``` |
| traefik.http.routers.red_vuln-samba.tls | ```true``` |
| traefik.http.routers.red_vuln-samba.tls.certresolver | ```default``` |
| traefik.http.routers.red_vuln-samba.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vulnerable SambaCry``` |
| mafl.description | ```Vulnerable Samba Installation - CVE-2017-7494``` |
| mafl.link | ```https://red_vuln-samba.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vulnerable``` |
| mafl.icon.url | ```https://media.ilsoftware.it/images/500x500/img_15843.jpg``` |

