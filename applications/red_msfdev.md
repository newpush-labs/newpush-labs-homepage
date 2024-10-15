# red_msf-dev

![Logo](images/red_msfdev.jpg)

## Description
Official bare Metasploit Alpine build. Includes beta features from dev branch.

## Image
metasploitframework/metasploit-framework

## Categories
- Offensive
- Bare

## Ports
- 4444:4444/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_msf-dev.rule | ```Host(`red_msf-dev.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_msf-dev.entrypoints | ```https``` |
| traefik.http.services.red_msf-dev.loadbalancer.server.port | ```4444``` |
| traefik.http.routers.red_msf-dev.tls | ```true``` |
| traefik.http.routers.red_msf-dev.tls.certresolver | ```default``` |
| traefik.http.routers.red_msf-dev.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Metasploit - Nightly``` |
| mafl.description | ```Official bare Metasploit Alpine build.``` |
| mafl.link | ```https://red_msf-dev.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Offensive``` |
| mafl.icon.url | ```https://yusufanilakduygu.files.wordpress.com/2016/08/capture1.jpg``` |

