# Fail2ban

![Logo](images/Fail2ban.png)

## Description
Fail2ban is a daemon to ban hosts that cause multiple authentication errors.

## Image
linuxserver/fail2ban:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/fail2ban/config |
| /var/log:ro | /opt/appdata/fail2ban/var/log:ro |
| /remotelogs/airsonic:ro | /opt/appdata/fail2ban/remotelogs/airsonic:ro |
| /remotelogs/apache2:ro | /opt/appdata/fail2ban/remotelogs/apache2:ro |
| /remotelogs/authelia:ro | /opt/appdata/fail2ban/remotelogs/authelia:ro |
| /remotelogs/emby:ro | /opt/appdata/fail2ban/remotelogs/emby:ro |
| /remotelogs/filebrowser:ro | /opt/appdata/fail2ban/remotelogs/filebrowser:ro |
| /remotelogs/homeassistant:ro | /opt/appdata/fail2ban/remotelogs/homeassistant:ro |
| /remotelogs/lighttpd:ro | /opt/appdata/fail2ban/remotelogs/lighttpd:ro |
| /remotelogs/nextcloud:ro | /opt/appdata/fail2ban/remotelogs/nextcloud:ro |
| /remotelogs/nginx:ro | /opt/appdata/fail2ban/remotelogs/nginx:ro |
| /remotelogs/nzbget:ro | /opt/appdata/fail2ban/remotelogs/nzbget:ro |
| /remotelogs/overseerr:ro | /opt/appdata/fail2ban/remotelogs/overseerr:ro |
| /remotelogs/prowlarr:ro | /opt/appdata/fail2ban/remotelogs/prowlarr:ro |
| /remotelogs/radarr:ro | /opt/appdata/fail2ban/remotelogs/radarr:ro |
| /remotelogs/sabnzbd:ro | /opt/appdata/fail2ban/remotelogs/sabnzbd:ro |
| /remotelogs/sonarr:ro | /opt/appdata/fail2ban/remotelogs/sonarr:ro |
| /remotelogs/unificontroller:ro | /opt/appdata/fail2ban/remotelogs/unificontroller:ro |
| /remotelogs/vaultwarden:ro | /opt/appdata/fail2ban/remotelogs/vaultwarden:ro |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| VERBOSITY | VERBOSITY | ```-vv``` | ```Set the container log verbosity. Valid options are -v, -vv, -vvv, -vvvv, or leaving the value blank or not setting the variable.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.fail2ban.rule | ```Host(`fail2ban.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.fail2ban.entrypoints | ```https``` |
| traefik.http.services.fail2ban.loadbalancer.server.port | ```80``` |
| traefik.http.routers.fail2ban.tls | ```true``` |
| traefik.http.routers.fail2ban.tls.certresolver | ```default``` |
| traefik.http.routers.fail2ban.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Fail2ban``` |
| mafl.description | ```Fail2ban is a daemon to ban hosts that cause multiple authentication errors.``` |
| mafl.link | ```https://fail2ban.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/fail2ban-logo.png``` |

