# nginx-proxy-manager-v3

![Logo](images/nginxproxymanagerv3.png)

## Description
\[DEVEL] Not ready for production. Nginx Proxy Manager v3 Develop enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt. Please see the install document at https://github.com/pi\-hosted/pi\-hosted/tree/master/docs installing the template

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://nginxproxymanager.com/>  
**Official Docker Documentation:** <https://nginxproxymanager.com/setup/>  
### **Pi\-Hosted dedicated documentation:** [nginx\_proxy\_manager.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/nginx_proxy_manager.md)

  
  
  
**Youtube Video:** [Novaspirit Tech \- Installing Nginx Proxy Manager on Docker](https://www.youtube.com/watch?v=yl2Laxbqvo8&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=10)  
  


## Image
jc21/nginx-proxy-manager:v3

## Categories
- Proxy
- Tools

## Ports
- 80:80/tcp
- 81:81/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/nginx-proxy-manager-v3/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nginx-proxy-manager-v3.rule | ```Host(`nginx-proxy-manager-v3.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nginx-proxy-manager-v3.entrypoints | ```https``` |
| traefik.http.services.nginx-proxy-manager-v3.loadbalancer.server.port | ```80``` |
| traefik.http.routers.nginx-proxy-manager-v3.tls | ```true``` |
| traefik.http.routers.nginx-proxy-manager-v3.tls.certresolver | ```default``` |
| traefik.http.routers.nginx-proxy-manager-v3.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nginx Proxy Manager v3 [DEVEL] NOT READY FOR USE``` |
| mafl.description | ```[DEVEL] Not ready for production.``` |
| mafl.link | ```https://nginx-proxy-manager-v3.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxy``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/proxy_mgr.png``` |

