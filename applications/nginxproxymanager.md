# nginx-proxy-manager

![Logo](images/nginxproxymanager.png)

## Description
Nginx Proxy Manager enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.

## Image
jc21/nginx-proxy-manager

## Categories
- Proxyserver

## Ports
- 80:80/tcp
- 81:81/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/nginx-proxy/data |
| /etc/letsencrypt | /opt/appdata/nginx-proxy/letsencrypt |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| DB_SQLITE_FILE | DB_SQLITE_FILE | ```/data/database.sqlite``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nginx-proxy-manager.rule | ```Host(`nginx-proxy-manager.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nginx-proxy-manager.entrypoints | ```https``` |
| traefik.http.services.nginx-proxy-manager.loadbalancer.server.port | ```80``` |
| traefik.http.routers.nginx-proxy-manager.tls | ```true``` |
| traefik.http.routers.nginx-proxy-manager.tls.certresolver | ```default``` |
| traefik.http.routers.nginx-proxy-manager.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nginx Proxy Manager``` |
| mafl.description | ```Nginx Proxy Manager enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.``` |
| mafl.link | ```https://nginx-proxy-manager.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxyserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/proxy_mgr.png``` |

