# wallos

![Logo](images/wallos.png)

## Description
Open\-Source Personal Subscription Tracker.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/ellite/Wallos>  
**Official Docker Documentation:** <https://github.com/ellite/Wallos>  
  
  


## Image
bellamy/wallos:latest

## Categories
- Finance

## Ports
- 8282:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/www/html/db | /opt/appdata/wallos/db |
| /var/www/html/images/uploads/logos | /opt/appdata/wallos/logos |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/Chicago``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.wallos.rule | ```Host(`wallos.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.wallos.entrypoints | ```https``` |
| traefik.http.services.wallos.loadbalancer.server.port | ```80``` |
| traefik.http.routers.wallos.tls | ```true``` |
| traefik.http.routers.wallos.tls.certresolver | ```default``` |
| traefik.http.routers.wallos.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Wallos``` |
| mafl.description | ```Open-Source Personal Subscription Tracker.``` |
| mafl.link | ```https://wallos.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Finance``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/ellite/Wallos/main/images/wallossolidwhite.png``` |

