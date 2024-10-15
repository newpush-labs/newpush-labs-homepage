# Ipfs

## Description
Ipfs \- A peer\-to\-peer hypermedia protocol designed to make the web faster, safer, and more open.

## Image
linuxserver/ipfs:latest

## Categories
- P2p

## Ports
- 80:80/tcp
- 4001:4001/tcp
- 5001:5001/tcp
- 8080:8080/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/ipfs |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ipfs.rule | ```Host(`ipfs.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ipfs.entrypoints | ```https``` |
| traefik.http.services.ipfs.loadbalancer.server.port | ```80``` |
| traefik.http.routers.ipfs.tls | ```true``` |
| traefik.http.routers.ipfs.tls.certresolver | ```default``` |
| traefik.http.routers.ipfs.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ipfs``` |
| mafl.description | ```Ipfs - A peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open.``` |
| mafl.link | ```https://ipfs.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```P2p``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/480px-Ipfs-logo-1024-ice-text.png``` |

