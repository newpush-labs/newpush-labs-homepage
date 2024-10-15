# Syslog-ng

![Logo](images/Syslogng.png)

## Description
syslog\-ng allows you to flexibly collect, parse, classify, rewrite and correlate logs from across your infrastructure and store or route them to log analysis tools.

## Image
linuxserver/syslog-ng:latest

## Categories
- Taskserver

## Ports
- 514:5514/udp
- 601:6601/tcp
- 6514:6514/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/syslog-ng/config |
| /var/log | /var/log |

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
| traefik.http.routers.syslog-ng.rule | ```Host(`syslog-ng.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.syslog-ng.entrypoints | ```https``` |
| traefik.http.services.syslog-ng.loadbalancer.server.port | ```6601``` |
| traefik.http.routers.syslog-ng.tls | ```true``` |
| traefik.http.routers.syslog-ng.tls.certresolver | ```default``` |
| traefik.http.routers.syslog-ng.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Syslog-ng``` |
| mafl.description | ```syslog-ng allows you to flexibly collect, parse, classify, rewrite and correlate logs from across your infrastructure and store or route them to log analysis tools.``` |
| mafl.link | ```https://syslog-ng.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/syslog-ng-logo.png``` |

