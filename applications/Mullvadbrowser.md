# Mullvad-browser

![Logo](images/Mullvadbrowser.png)

## Description
The Mullvad Browser is a privacy\-focused web browser developed in a collaboration between Mullvad VPN and the Tor Project. It’s designed to minimize tracking and fingerprinting. You could say it’s a Tor Browser to use without the Tor Network. Instead, you can use it with a trustworthy VPN.

## Image
linuxserver/mullvad-browser:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 3001:3001/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mullvad-browser |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| LOCAL_NET | LOCAL_NET | ```192.168.0.0/16``` | ```If using a VPN, set this to your local LAN IP range using CIDR notation. Without it you will be unable to access the web interface. If you have multiple ranges or a complex LAN setup you will need to manage this yourself in the wg0.conf, see the App Setup section for details.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mullvad-browser.rule | ```Host(`mullvad-browser.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mullvad-browser.entrypoints | ```https``` |
| traefik.http.services.mullvad-browser.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.mullvad-browser.tls | ```true``` |
| traefik.http.routers.mullvad-browser.tls.certresolver | ```default``` |
| traefik.http.routers.mullvad-browser.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mullvad-browser``` |
| mafl.description | ```The Mullvad Browser is a privacy-focused web browser developed in a collaboration between Mullvad VPN and the Tor Project.``` |
| mafl.link | ```https://mullvad-browser.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mullvad-browser-logo.png``` |

