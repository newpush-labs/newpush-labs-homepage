# Feed2toot

## Description
Feed2toot automatically parses rss feeds, identifies new posts and posts them on the Mastodon social network.

## Image
linuxserver/feed2toot:latest

## Categories

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/feed2toot |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| FEED_LIMIT | FEED_LIMIT | ```5``` | ```Limit number of RSS entries published at each execution.``` |

