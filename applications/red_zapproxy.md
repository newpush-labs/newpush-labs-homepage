# red_zap-proxy

## Description
Official in\-browser version of ZAP.

## Notes
Since it is hosted on the same LAN as the target containers, usage should be faster. It is also possible to use the exposed remote proxy with a local instance of ZAP. Point your browser to http://your\-docker\-machine\-ip:8081/?anonym\=true\&app\=ZAP once done. If not, you will be asked to authenticate to a null account.

## Image
owasp/zap2docker-stable

## Categories
- Offensive
- Webserver
- Bare

## Ports
- 8081:8080/tcp
- 8090:8090/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_zap-proxy.rule | ```Host(`red_zap-proxy.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_zap-proxy.entrypoints | ```https``` |
| traefik.http.services.red_zap-proxy.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.red_zap-proxy.tls | ```true``` |
| traefik.http.routers.red_zap-proxy.tls.certresolver | ```default``` |
| traefik.http.routers.red_zap-proxy.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ZAP Proxy WebSwing``` |
| mafl.description | ```Official in-browser version of ZAP.``` |
| mafl.link | ```https://red_zap-proxy.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://www.owasp.org/images/1/11/Zap128x128.png``` |

