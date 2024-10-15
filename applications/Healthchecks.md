# Healthchecks

![Logo](images/Healthchecks.png)

## Description
Healthchecks is a watchdog for your cron jobs. It's a web server that listens for pings from your cron jobs, plus a web interface.

## Image
linuxserver/healthchecks:latest

## Categories
- Taskserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/healthchecks |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| SITE_ROOT | SITE_ROOT | ```<SITE_ROOT>``` | ```The site's top-level URL and the port it listens to if differrent than 80 or 443 (e.g., https://healthchecks.example.com:8000)``` |
| SITE_NAME | SITE_NAME | ```<SITE_NAME>``` | ```The site's name (e.g., 'Example Corp HealthChecks')``` |
| DEFAULT_FROM_EMAIL | DEFAULT_FROM_EMAIL | ```<DEFAULT_FROM_EMAIL>``` | ```From email for alerts``` |
| EMAIL_HOST | EMAIL_HOST | ```<EMAIL_HOST>``` | ```SMTP host``` |
| EMAIL_PORT | EMAIL_PORT | ```<EMAIL_PORT>``` | ```SMTP port``` |
| EMAIL_HOST_USER | EMAIL_HOST_USER | ```<EMAIL_HOST_USER>``` | ```SMTP user``` |
| EMAIL_HOST_PASSWORD | EMAIL_HOST_PASSWORD | ```<EMAIL_HOST_PASSWORD>``` | ```SMTP password``` |
| EMAIL_USE_TLS | EMAIL_USE_TLS | ```<True or False>``` | ```Use TLS for SMTP (`True` or `False`)``` |
| ALLOWED_HOSTS | ALLOWED_HOSTS | ```<ALLOWED_HOSTS>``` | ```array of valid hostnames for the server `['test.com','test2.com']` (default: `['*']`)``` |
| SUPERUSER_EMAIL | SUPERUSER_EMAIL | ```<SUPERUSER_EMAIL>``` | ```Superuser email``` |
| SUPERUSER_PASSWORD | SUPERUSER_PASSWORD | ```<SUPERUSER_PASSWORD>``` | ```Superuser password``` |
| REGENERATE_SETTINGS | REGENERATE_SETTINGS | ```True/False``` | ```Defaults to False. Set to true to always override the `local_settings.py` file with values from environment variables. Do not set to True if you have made manual modifications to this file.``` |
| SITE_LOGO_URL | SITE_LOGO_URL | ```<SITE_LOGO_URL>``` | ```Custom site logo URL``` |
| SECRET_KEY | SECRET_KEY | ```<SECRET_KEY>``` | ```A secret key used for cryptographic signing. docker-healthchecks will generate a secure value if one does not exist``` |
| APPRISE_ENABLED | APPRISE_ENABLED | ```True/False``` | ```Defaults to False. A boolean that turns on/off the Apprise integration (https://github.com/caronc/apprise)``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.healthchecks.rule | ```Host(`healthchecks.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.healthchecks.entrypoints | ```https``` |
| traefik.http.services.healthchecks.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.healthchecks.tls | ```true``` |
| traefik.http.routers.healthchecks.tls.certresolver | ```default``` |
| traefik.http.routers.healthchecks.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Healthchecks``` |
| mafl.description | ```Healthchecks is a watchdog for your cron jobs.``` |
| mafl.link | ```https://healthchecks.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Taskserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/healthchecks/healthchecks/master/static/img/up.png``` |

