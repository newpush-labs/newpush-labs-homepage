# nginx-proxy-manager-sqlite

![Logo](images/nginxproxymanagersqlite.png)

## Description
Nginx Proxy Manager v2 with Sqlite enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt. Please see the install document at https://github.com/pi\-hosted/pi\-hosted/tree/master/docs installing the template

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://nginxproxymanager.com/>  
**Official Docker Documentation:** <https://nginxproxymanager.com/setup/>  
### **Pi\-Hosted dedicated documentation:** [nginx\_proxy\_manager.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/nginx_proxy_manager.md)

  
  
  
**Youtube Video:** [Novaspirit Tech \- Installing Nginx Proxy Manager on Docker](https://www.youtube.com/watch?v=yl2Laxbqvo8&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=10)  
  


## Image
jc21/nginx-proxy-manager:latest

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
| /data | /opt/appdata/nginx-proxy-manager/data |
| /etc/letsencrypt | /opt/appdata/nginx-proxy-manager/letsencrypt |

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
| traefik.http.routers.nginx-proxy-manager-sqlite.rule | ```Host(`nginx-proxy-manager-sqlite.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nginx-proxy-manager-sqlite.entrypoints | ```https``` |
| traefik.http.services.nginx-proxy-manager-sqlite.loadbalancer.server.port | ```80``` |
| traefik.http.routers.nginx-proxy-manager-sqlite.tls | ```true``` |
| traefik.http.routers.nginx-proxy-manager-sqlite.tls.certresolver | ```default``` |
| traefik.http.routers.nginx-proxy-manager-sqlite.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nginx Proxy Manager v2 with Sqllite``` |
| mafl.description | ```Nginx Proxy Manager v2 with Sqlite enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.``` |
| mafl.link | ```https://nginx-proxy-manager-sqlite.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxy``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/proxy_mgr.png``` |

