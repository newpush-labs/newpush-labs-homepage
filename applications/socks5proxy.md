# socks5-proxy

![Logo](images/socks5proxy.png)

## Description
Simple socks5 server using go\-socks5 with authentication options

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://hub.docker.com/r/serjs/go\-socks5\-proxy](https://hub.docker.com/r/serjs/go-socks5-proxy)  
**Official Docker Documentation:** [https://hub.docker.com/r/serjs/go\-socks5\-proxy](https://hub.docker.com/r/serjs/go-socks5-proxy)  
  
  
**Youtube Video:** [Novaspirit Tech \- Route Docker Traffic Through VPN Container](https://www.youtube.com/watch?v=IWj1-j2QWvo)  
  


## Image
serjs/go-socks5-proxy:latest

## Categories
- Proxy

## Ports
- 8080:8080/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.socks5-proxy.rule | ```Host(`socks5-proxy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.socks5-proxy.entrypoints | ```https``` |
| traefik.http.services.socks5-proxy.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.socks5-proxy.tls | ```true``` |
| traefik.http.routers.socks5-proxy.tls.certresolver | ```default``` |
| traefik.http.routers.socks5-proxy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Go-Socks5-Proxy``` |
| mafl.description | ```Simple socks5 server using go-socks5 with authentication options``` |
| mafl.link | ```https://socks5-proxy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxy``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/socks5.png``` |

