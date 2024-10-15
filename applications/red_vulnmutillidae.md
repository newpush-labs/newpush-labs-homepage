# red_vuln-mutillidae

## Description
Docker container for OWASP Mutillidae II Web Pen\-Test Practice Application

## Notes
Point your browser to http://your\-docker\-machine\-ip:8087 to access it.

## Image
citizenstig/nowasp

## Categories
- Vulnerable
- Smb

## Ports
- 8087:80/tcp
- 3306:3306/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| MYSQL_PASS | Database root password | ```Chang3ME!``` | ```Password used by the MySQL root user.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_vuln-mutillidae.rule | ```Host(`red_vuln-mutillidae.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_vuln-mutillidae.entrypoints | ```https``` |
| traefik.http.services.red_vuln-mutillidae.loadbalancer.server.port | ```80``` |
| traefik.http.routers.red_vuln-mutillidae.tls | ```true``` |
| traefik.http.routers.red_vuln-mutillidae.tls.certresolver | ```default``` |
| traefik.http.routers.red_vuln-mutillidae.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```OWASP Mutillidae II``` |
| mafl.description | ```Docker container for OWASP Mutillidae II Web Pen-Test Practice Application``` |
| mafl.link | ```https://red_vuln-mutillidae.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Vulnerable``` |
| mafl.icon.url | ```https://i.imgur.com/SFDsPDQ.jpg``` |

