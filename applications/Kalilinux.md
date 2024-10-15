# Kali-linux

![Logo](images/Kalilinux.png)

## Description
Kali\-linux \- is an Advanced Penetration Testing Linux distribution used for Penetration Testing, Ethical Hacking and network security assessments. KALI LINUX ™ is a trademark of OffSec.

## Image
linuxserver/kali-linux:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kali-linux/config |
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| SUBFOLDER | SUBFOLDER | ```/``` | ```Specify a subfolder to use with reverse proxies, IE `/subfolder/```` |
| TITLE | TITLE | ```Kali Linux``` | ```String which will be used as page/tab title in the web browser.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kali-linux.rule | ```Host(`kali-linux.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kali-linux.entrypoints | ```https``` |
| traefik.http.services.kali-linux.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.kali-linux.tls | ```true``` |
| traefik.http.routers.kali-linux.tls.certresolver | ```default``` |
| traefik.http.routers.kali-linux.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kali-linux``` |
| mafl.description | ```Kali-linux - is an Advanced Penetration Testing Linux distribution used for Penetration Testing, Ethical Hacking and network security assessments.``` |
| mafl.link | ```https://kali-linux.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kali-logo.png``` |

