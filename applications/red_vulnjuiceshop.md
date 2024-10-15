# red_vuln-juiceshop

## Description
OWASP Juice Shop is an intentionally insecure web application written entirely in JavaScript which encompasses the entire range of OWASP Top Ten and other severe security flaws.

## Notes
Point your browser to http://your\-docker\-machine\-ip:8084 to access it.

## Image
bkimminich/juice-shop

## Categories
- Vulnerable
- Webserver

## Ports
- 8084:3000/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_vuln-juiceshop.rule | ```Host(`red_vuln-juiceshop.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_vuln-juiceshop.entrypoints | ```https``` |
| traefik.http.services.red_vuln-juiceshop.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.red_vuln-juiceshop.tls | ```true``` |
| traefik.http.routers.red_vuln-juiceshop.tls.certresolver | ```default``` |
| traefik.http.routers.red_vuln-juiceshop.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```JuiceShop``` |
| mafl.description | ```OWASP Juice Shop is an intentionally insecure web application written entirely in JavaScript which encompasses the entire range of OWASP Top Ten and other severe security flaws.``` |
| mafl.link | ```https://red_vuln-juiceshop.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vulnerable``` |
| mafl.icon.url | ```https://www.owasp.org/images/6/66/JuiceShop_Logo.png``` |

