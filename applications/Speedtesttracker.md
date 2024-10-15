# Speedtest-tracker

![Logo](images/Speedtesttracker.png)

## Description
Speedtest\-tracker is a self\-hosted internet performance tracking application that runs speedtest checks against Ookla's Speedtest service.

## Image
linuxserver/speedtest-tracker:latest

## Categories
- Uncategorized Services

## Ports
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/speedtest-tracker |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| APP_KEY | APP_KEY | `````` | ```App key used for encrypting stored data. You can generate a key at [https://speedtest-tracker.dev](https://speedtest-tracker.dev)``` |
| DB_CONNECTION | DB_CONNECTION | ```sqlite``` | ```Set the database type to use. `sqlite`, `pgsql`, or `mysql```` |
| SPEEDTEST_SCHEDULE | SPEEDTEST_SCHEDULE | `````` | ```Set the test schedule in cron format. e.g. `0 */6 * * *```` |
| SPEEDTEST_SERVERS | SPEEDTEST_SERVERS | `````` | ```A comma-separated list of server IDs to test against. Run `docker exec speedtest-tracker php /app/www/artisan app:ookla-list-servers` to get a list of nearby servers.``` |
| DB_HOST | DB_HOST | `````` | ```Database hostname (postgres/mysql).``` |
| DB_PORT | DB_PORT | `````` | ```Database port (postgres/mysql).``` |
| DB_DATABASE | DB_DATABASE | `````` | ```Database name (postgres/mysql).``` |
| DB_USERNAME | DB_USERNAME | `````` | ```Database username (postgres/mysql).``` |
| DB_PASSWORD | DB_PASSWORD | `````` | ```Database password (postgres/mysql).``` |
| DISPLAY_TIMEZONE | DISPLAY_TIMEZONE | ```Etc/UTC``` | ```Timezone for the UI.``` |
| PRUNE_RESULTS_OLDER_THAN | PRUNE_RESULTS_OLDER_THAN | ```0``` | ```Days to keep test results.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.speedtest-tracker.rule | ```Host(`speedtest-tracker.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.speedtest-tracker.entrypoints | ```https``` |
| traefik.http.services.speedtest-tracker.loadbalancer.server.port | ```80``` |
| traefik.http.routers.speedtest-tracker.tls | ```true``` |
| traefik.http.routers.speedtest-tracker.tls.certresolver | ```default``` |
| traefik.http.routers.speedtest-tracker.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Speedtest-tracker``` |
| mafl.description | ```Speedtest-tracker is a self-hosted internet performance tracking application that runs speedtest checks against Ookla's Speedtest service.``` |
| mafl.link | ```https://speedtest-tracker.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/speedtest-tracker-logo.png``` |

