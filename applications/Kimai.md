# Kimai

![Logo](images/Kimai.png)

## Description
Kimai is a professional grade time\-tracking application, free and open\-source. It handles use\-cases of freelancers as well as companies with dozens or hundreds of users. Kimai was build to track your project times and ships with many advanced features, including but not limited to: JSON API, invoicing, data exports, multi\-timer and punch\-in punch\-out mode, tagging, multi\-user \- multi\-timezones \- multi\-language (over 30 translations existing!), authentication via SAML/LDAP/Database, two\-factor authentication (2FA) with TOTP, customizable role and team permissions, responsive design, user/customer/project specific rates, advanced search \& filtering, money and time budgets, advanced reporting, support for plugins and so much more.

## Image
linuxserver/kimai:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/kimai |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| DATABASE_URL | DATABASE_URL | ```mysql://your_db_user:your_db_pass@your_db_host:3306/your_db_name?charset=your_db_charset&serverVersion=your_db_version``` | ```Configure your database connection, see Application Setup instructions.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kimai.rule | ```Host(`kimai.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kimai.entrypoints | ```https``` |
| traefik.http.services.kimai.loadbalancer.server.port | ```80``` |
| traefik.http.routers.kimai.tls | ```true``` |
| traefik.http.routers.kimai.tls.certresolver | ```default``` |
| traefik.http.routers.kimai.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kimai``` |
| mafl.description | ```Kimai is a professional grade time-tracking application, free and open-source.``` |
| mafl.link | ```https://kimai.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kimai-logo.png``` |

