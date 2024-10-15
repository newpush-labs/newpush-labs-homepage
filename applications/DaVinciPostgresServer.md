# DaVinci Postgres Server

![Logo](images/DaVinciPostgresServer.png)

## Description
DaVinci Resolve Postgresql Server, Davinci requires a specific version of postgres db, this container will install the version needed

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/docs/davinci.md](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/docs/davinci.md)  
**Official Docker Documentation:** [https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/docs/davinci.md](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/docs/davinci.md)  
  
  


## Image
postgres:13

## Categories
- Tool

## Ports
- 5432:5432/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/postgresql/data | /opt/appdata/davinciserver/ |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| POSTGRES_DB | POSTGRES_DB | ```database``` | `````` |
| POSTGRES_USER | POSTGRES_USER | ```postgres``` | `````` |
| POSTGRES_PASSWORD | POSTGRES_PASSWORD | ```DaVinci``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.davincipostgresserver.rule | ```Host(`davincipostgresserver.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.davincipostgresserver.entrypoints | ```https``` |
| traefik.http.services.davincipostgresserver.loadbalancer.server.port | ```5432``` |
| traefik.http.routers.davincipostgresserver.tls | ```true``` |
| traefik.http.routers.davincipostgresserver.tls.certresolver | ```default``` |
| traefik.http.routers.davincipostgresserver.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```DaVinci Postgres Server``` |
| mafl.description | ```DaVinci Resolve Postgresql Server, Davinci requires a specific version of postgres db, this container will install the version needed``` |
| mafl.link | ```https://davincipostgresserver.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tool``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/resolve.png``` |

