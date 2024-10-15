# red_msf-postgresql

## Description
Debian Metasploit build with Postgres and additional helper scripts

## Image
phocean/msf

## Categories
- Offensive
- Database
- Stack

## Ports
- 4444:4444/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.frontend.rule | ```PathPrefixStrip:/msf``` |
| traefik.port | ```4444``` |
| traefik.enable | ```true``` |
| traefik.http.routers.red_msf-postgresql.rule | ```Host(`red_msf-postgresql.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_msf-postgresql.entrypoints | ```https``` |
| traefik.http.services.red_msf-postgresql.loadbalancer.server.port | ```4444``` |
| traefik.http.routers.red_msf-postgresql.tls | ```true``` |
| traefik.http.routers.red_msf-postgresql.tls.certresolver | ```default``` |
| traefik.http.routers.red_msf-postgresql.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Metasploit - Stable + Postgresql``` |
| mafl.description | ```Debian Metasploit build with Postgres and additional helper scripts``` |
| mafl.link | ```https://red_msf-postgresql.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://i.imgur.com/OE5fgz7.png``` |

