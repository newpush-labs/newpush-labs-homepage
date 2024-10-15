# flame-dashboard

![Logo](images/flamedashboard.png)

## Description
Flame is self\-hosted startpage for your server. Its design is inspired (heavily) by SUI. Flame is very easy to setup and use. With built\-in editors, it allows you to setup your very own application hub in no time \- no file editing necessary.

## Image
pawelmalak/flame

## Categories
- Dashboardserver

## Ports
- 5005:5005/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/flame-dashboard |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.flame-dashboard.rule | ```Host(`flame-dashboard.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.flame-dashboard.entrypoints | ```https``` |
| traefik.http.services.flame-dashboard.loadbalancer.server.port | ```5005``` |
| traefik.http.routers.flame-dashboard.tls | ```true``` |
| traefik.http.routers.flame-dashboard.tls.certresolver | ```default``` |
| traefik.http.routers.flame-dashboard.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Flame-Dashboard``` |
| mafl.description | ```Flame is self-hosted startpage for your server.``` |
| mafl.link | ```https://flame-dashboard.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Dashboardserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/xneo1/portainer_templates/master/Images/flame.png``` |

