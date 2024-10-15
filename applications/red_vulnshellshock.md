# red_vuln-shellshock

## Description
Vulnerable Shellshock Installation \- CVE\-2014\-6271

## Notes
Point your browser to http://your\-docker\-machine\-ip:8086 to access it.

## Image
hmlio/vaas-cve-2014-6271

## Categories
- Vulnerable
- Webserver

## Ports
- 8086:80/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_vuln-shellshock.rule | ```Host(`red_vuln-shellshock.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_vuln-shellshock.entrypoints | ```https``` |
| traefik.http.services.red_vuln-shellshock.loadbalancer.server.port | ```80``` |
| traefik.http.routers.red_vuln-shellshock.tls | ```true``` |
| traefik.http.routers.red_vuln-shellshock.tls.certresolver | ```default``` |
| traefik.http.routers.red_vuln-shellshock.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vulnerable Shellshock``` |
| mafl.description | ```Vulnerable Shellshock Installation - CVE-2014-6271``` |
| mafl.link | ```https://red_vuln-shellshock.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vulnerable``` |
| mafl.icon.url | ```https://i.imgur.com/waYl54r.png``` |

