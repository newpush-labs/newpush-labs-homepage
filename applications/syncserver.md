# syncserver

![Logo](images/syncserver.png)

## Description
Run\-Your\-Own Firefox Sync Server

## Image
mozilla/syncserver:latest

## Categories
- Tools

## Ports
- 5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/syncserver |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| SYNCSERVER_PUBLIC_URL | SYNCSERVER_PUBLIC_URL | ```https://syncserver.depot.lan``` | `````` |
| SYNCSERVER_SECRET_FILE | SYNCSERVER_SECRET_FILE | ```/data/secret_key``` | `````` |
| SYNCSERVER_SQLURI | SYNCSERVER_SQLURI | ```sqlite:////data/syncserver.db``` | `````` |
| SYNCSERVER_BATCH_UPLOAD_ENABLED | SYNCSERVER_BATCH_UPLOAD_ENABLED | ```true``` | `````` |
| SYNCSERVER_FORCE_WSGI_ENVIRON | SYNCSERVER_FORCE_WSGI_ENVIRON | ```false``` | `````` |
| PORT | PORT | ```5000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.services.syncservere.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.syncserver.entrypoints | ```https``` |
| traefik.http.routers.syncserver.tls.certresolver | ```default``` |
| traefik.http.routers.syncserver.rule | ```Host(`syncserver.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.services.syncserver.loadbalancer.server.port | ```8443``` |
| traefik.http.routers.syncserver.tls | ```true``` |
| traefik.http.routers.syncserver.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mozilla Syncserver``` |
| mafl.description | ```Run-Your-Own Firefox Sync Server``` |
| mafl.link | ```https://syncserver.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://mediadepot.github.io/templates/img/firefox-logo.png``` |

