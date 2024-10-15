# SurrealDB

## Description
SurrealDB is an end\-to\-end cloud native database for web, mobile, serverless, jamstack, backend, and traditional applications.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://surrealdb.com/>  
**Official Docker Documentation:** <https://hub.docker.com/r/surrealdb/surrealdb>  
  
  


## Image
surrealdb/surrealdb:latest

## Categories
- Other
- Tool

## Ports
- 8020:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/surrealdb/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| SDB_USERNAME | SDB_USERNAME | ```default_username``` | `````` |
| SDB_PASSWORD | SDB_PASSWORD | ```default_password``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.surrealdb.rule | ```Host(`surrealdb.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.surrealdb.entrypoints | ```https``` |
| traefik.http.services.surrealdb.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.surrealdb.tls | ```true``` |
| traefik.http.routers.surrealdb.tls.certresolver | ```default``` |
| traefik.http.routers.surrealdb.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SurrealDB``` |
| mafl.description | ```SurrealDB is an end-to-end cloud native database for web, mobile, serverless, jamstack, backend, and traditional applications.``` |
| mafl.link | ```https://surrealdb.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | `````` |

