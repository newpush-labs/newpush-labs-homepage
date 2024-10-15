# FlareSolverr

![Logo](images/FlareSolverr.svg)

## Description
FlareSolverr is a proxy server to bypass Cloudflare and DDoS\-GUARD protection.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Docker Documentation:** [https://github.com/FlareSolverr/FlareSolverr\#installation](https://github.com/FlareSolverr/FlareSolverr#installation)  
  
  


## Image
ghcr.io/flaresolverr/flaresolverr:latest

## Categories
- Other
- Tools

## Ports
- 8191:8191/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| LOG_LEVEL | LOG_LEVEL | ```info``` | `````` |
| LOG_HTML | LOG_HTML | ```false``` | `````` |
| CAPTCHA_SOLVER | CAPTCHA_SOLVER | ```none``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.flaresolverr.rule | ```Host(`flaresolverr.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.flaresolverr.entrypoints | ```https``` |
| traefik.http.services.flaresolverr.loadbalancer.server.port | ```8191``` |
| traefik.http.routers.flaresolverr.tls | ```true``` |
| traefik.http.routers.flaresolverr.tls.certresolver | ```default``` |
| traefik.http.routers.flaresolverr.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```FlareSolverr``` |
| mafl.description | ```FlareSolverr is a proxy server to bypass Cloudflare and DDoS-GUARD protection.``` |
| mafl.link | ```https://flaresolverr.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/FlareSolverr/FlareSolverr/c48d342b9cfb65d7696b96e9867fcff0ae87a0e2/resources/flaresolverr_logo.svg``` |

