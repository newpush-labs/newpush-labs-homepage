# pgadmin

![Logo](images/pgadmin.png)

## Description
PGAdmin is a web\-based GUI tool used to interact with the Postgres database sessions, both locally and remote servers as well. You can use PGAdmin to perform any sort of database administration required for a Postgres database.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.pgadmin.org/>  
**Official Docker Documentation:** <https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html>  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_pgadmin.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_pgadmin.sh \| bash

  
  


## Image
dpage/pgadmin4:latest

## Categories
- Other
- Tools

## Ports
- 5050:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/pgadmin | /opt/appdata/pgadmin |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| PGADMIN_DEFAULT_EMAIL | PGADMIN_DEFAULT_EMAIL | `````` | `````` |
| PGADMIN_DEFAULT_PASSWORD | PGADMIN_DEFAULT_PASSWORD | `````` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pgadmin.rule | ```Host(`pgadmin.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pgadmin.entrypoints | ```https``` |
| traefik.http.services.pgadmin.loadbalancer.server.port | ```80``` |
| traefik.http.routers.pgadmin.tls | ```true``` |
| traefik.http.routers.pgadmin.tls.certresolver | ```default``` |
| traefik.http.routers.pgadmin.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```pgAdmin``` |
| mafl.description | ```PGAdmin is a web-based GUI tool used to interact with the Postgres database sessions, both locally and remote servers as well.``` |
| mafl.link | ```https://pgadmin.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pgadmin.png``` |

