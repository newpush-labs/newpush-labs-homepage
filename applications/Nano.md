# Nano

![Logo](images/Nano.png)

## Description
Nano is a digital payment protocol designed to be accessible and lightweight, with a focus on removing inefficiencies present in other cryptocurrencies. With ultrafast transactions and zero fees on a secure, green and decentralized network, this makes Nano ideal for everyday transactions.

## Image
linuxserver/nano:latest

## Categories
- Tools

## Ports
- 8075:8075/tcp
- 7076:3000/tcp
- 7077:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/nano |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| PEER_HOST | PEER_HOST | ```localhost``` | ```Default peer host (can be overidden with an array by command line options)``` |
| LIVE_GENESIS_PUB | LIVE_GENESIS_PUB | ```GENESIS_PUBLIC``` | ```Genesis block public key``` |
| LIVE_GENESIS_ACCOUNT | LIVE_GENESIS_ACCOUNT | ```nano_xxxxxx``` | ```Genesis block account``` |
| LIVE_GENESIS_WORK | LIVE_GENESIS_WORK | ```WORK_FOR_BLOCK``` | ```Genesis block proof of work``` |
| LIVE_GENESIS_SIG | LIVE_GENESIS_SIG | ```BLOCK_SIGNATURE``` | ```Genesis block signature``` |
| CLI_OPTIONS | CLI_OPTIONS | ```--config node.enable_voting=true``` | ```Node run command cli args``` |
| LMDB_BOOTSTRAP_URL | LMDB_BOOTSTRAP_URL | ```http://example.com/Nano_64_version_20.7z``` | ```HTTP/HTTPS endpoint to download a 7z file with the data.ldb to bootstrap to this node``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nano.rule | ```Host(`nano.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nano.entrypoints | ```https``` |
| traefik.http.services.nano.loadbalancer.server.port | ```8075``` |
| traefik.http.routers.nano.tls | ```true``` |
| traefik.http.routers.nano.tls.certresolver | ```default``` |
| traefik.http.routers.nano.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nano``` |
| mafl.description | ```Nano is a digital payment protocol designed to be accessible and lightweight, with a focus on removing inefficiencies present in other cryptocurrencies.``` |
| mafl.link | ```https://nano.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nano_logo.png/640px-Nano_logo.png``` |

