# Plex-meta-manager

![Logo](images/Plexmetamanager.png)

## Description
Plex\-meta\-manager is a Python 3 script that can be continuously run using YAML configuration files to update on a schedule the metadata of the movies, shows, and collections in your libraries as well as automatically build collections based on various methods all detailed in the wiki.

## Image
linuxserver/plex-meta-manager:latest

## Categories
- Mediamanagement

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/plex-meta-manager |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```America/Chicago``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| PMM_CONFIG | PMM_CONFIG | ```/config/config.yml``` | ```Specify a custom config file to use.``` |
| PMM_TIME | PMM_TIME | ```03:00``` | ```Comma-separated list of times to update each day. Format: `HH:MM`.``` |
| PMM_RUN | PMM_RUN | ```False``` | ```Set to `True` to run without the scheduler.``` |
| PMM_TEST | PMM_TEST | ```False``` | ```Set to `True` to run in debug mode with only collections that have `test: true`.``` |
| PMM_NO_MISSING | PMM_NO_MISSING | ```False``` | ```Set to `True` to run without any of the missing movie/show functions.``` |

