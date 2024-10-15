# Endlessh

![Logo](images/Endlessh.png)

## Description
Endlessh is an SSH tarpit that very slowly sends an endless, random SSH banner. It keeps SSH clients locked up for hours or even days at a time. The purpose is to put your real SSH server on another port and then let the script kiddies get stuck in this tarpit instead of bothering a real server.

## Image
linuxserver/endlessh:latest

## Categories
- Tools

## Ports
- 22:2222/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/endlessh |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| MSDELAY | MSDELAY | ```10000``` | ```The endless banner is sent one line at a time. This is the delay in milliseconds between individual lines.``` |
| MAXLINES | MAXLINES | ```32``` | ```The length of each line is randomized. This controls the maximum length of each line. Shorter lines may keep clients on for longer if they give up after a certain number of bytes.``` |
| MAXCLIENTS | MAXCLIENTS | ```4096``` | ```Maximum number of connections to accept at a time. Connections beyond this are not immediately rejected, but will wait in the queue.``` |
| LOGFILE | LOGFILE | ```false``` | ```By default, the app logs to container log. If this is set to `true`, the log will be output to file under `/config/logs/endlessh` (`/config` needs to be mapped).``` |
| BINDFAMILY | BINDFAMILY | `````` | ```By default, the app binds to IPv4 and IPv6 addresses. Set it to `4` or `6` to bind to IPv4 only or IPv6 only, respectively. Leave blank to bind to both.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.endlessh.rule | ```Host(`endlessh.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.endlessh.entrypoints | ```https``` |
| traefik.http.services.endlessh.loadbalancer.server.port | ```2222``` |
| traefik.http.routers.endlessh.tls | ```true``` |
| traefik.http.routers.endlessh.tls.certresolver | ```default``` |
| traefik.http.routers.endlessh.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Endlessh``` |
| mafl.description | ```Endlessh is an SSH tarpit that very slowly sends an endless, random SSH banner.``` |
| mafl.link | ```https://endlessh.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/openssh-server-logo.png``` |

