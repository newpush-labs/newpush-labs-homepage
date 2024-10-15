# Nano-wallet

![Logo](images/Nanowallet.png)

## Description
Nano\-wallet is a digital payment protocol designed to be accessible and lightweight, with a focus on removing inefficiencies present in other cryptocurrencies. With ultrafast transactions and zero fees on a secure, green and decentralized network, this makes Nano ideal for everyday transactions. This container is a simple nginx wrapper for the light wallet located here. You will need to pass a valid RPC host when accessing this container.

## Image
linuxserver/nano-wallet:latest

## Categories
- Tools

## Ports
- 80:80/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.nano-wallet.rule | ```Host(`nano-wallet.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.nano-wallet.entrypoints | ```https``` |
| traefik.http.services.nano-wallet.loadbalancer.server.port | ```80``` |
| traefik.http.routers.nano-wallet.tls | ```true``` |
| traefik.http.routers.nano-wallet.tls.certresolver | ```default``` |
| traefik.http.routers.nano-wallet.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Nano-wallet``` |
| mafl.description | ```Nano-wallet is a digital payment protocol designed to be accessible and lightweight, with a focus on removing inefficiencies present in other cryptocurrencies.``` |
| mafl.link | ```https://nano-wallet.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nano_logo.png/640px-Nano_logo.png``` |

