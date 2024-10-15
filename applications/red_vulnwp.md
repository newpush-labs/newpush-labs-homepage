# red_vuln-wp

## Description
Vulnerable WordPress Installation

## Notes
Point your browser to http://your\-docker\-machine\-ip:8085 to access it.

## Image
wpscanteam/vulnerablewordpress

## Categories
- Vulnerable
- Webserver

## Ports
- 8085:80/tcp
- 3306:3306/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_vuln-wp.rule | ```Host(`red_vuln-wp.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_vuln-wp.entrypoints | ```https``` |
| traefik.http.services.red_vuln-wp.loadbalancer.server.port | ```80``` |
| traefik.http.routers.red_vuln-wp.tls | ```true``` |
| traefik.http.routers.red_vuln-wp.tls.certresolver | ```default``` |
| traefik.http.routers.red_vuln-wp.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Vulnerable Wordpress``` |
| mafl.description | ```Vulnerable WordPress Installation``` |
| mafl.link | ```https://red_vuln-wp.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vulnerable``` |
| mafl.icon.url | ```https://i.imgur.com/0DpXEE4.png``` |

