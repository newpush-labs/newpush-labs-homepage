# Kasm-renderD128

![Logo](images/KasmrenderD128.png)

## Description
Kasm is a web\-accessible desktop environment. Include /dev/dri/renderD128 support make sure your envoirment includes the drivers.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.kasmweb.com/>  
**Official Docker Documentation:** [https://github.com/linuxserver/docker\-kasm](https://github.com/linuxserver/docker-kasm)  
  
  
!!!MAKE SURE YOU USE HTTPS!!!  
!!!MAKE SURE YOU USE PORT 4011 FIRST THEN INSTALL IT  
DO NOT INSTALL EVERYTHING AT ONCE(unless you know what you are doing)!!!  
!!!ALERT!!! MAKE SURE YOU SAVE THE ADMIN USERNAME AND REGULAR USERNAME DO NOT FORGET THIS STEP, IT WOULD BE SOMETHING LIKE THIS admin@kasm.local, user@kasm.local !!!ALERT!!!

## Image
lscr.io/linuxserver/kasm:latest

## Categories
- Utilities
- Tools

## Ports
- 4010:4010/tcp
- 4011:3000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt | /opt/appdata/kasm/opt |
| /profiles | /opt/appdata/kasm/profiles |
| /dev/dri/renderD128 | /dev/dri/renderd128 |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| KASM_PORT | KASM_PORT | ```4010``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kasm-renderd128.rule | ```Host(`kasm-renderd128.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kasm-renderd128.entrypoints | ```https``` |
| traefik.http.services.kasm-renderd128.loadbalancer.server.port | ```4010``` |
| traefik.http.routers.kasm-renderd128.tls | ```true``` |
| traefik.http.routers.kasm-renderd128.tls.certresolver | ```default``` |
| traefik.http.routers.kasm-renderd128.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kasm with renderD128 support``` |
| mafl.description | ```Kasm is a web-accessible desktop environment.``` |
| mafl.link | ```https://kasm-renderd128.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utilities``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/kasm-server.png``` |

