# Mastodon

![Logo](images/Mastodon.png)

## Description
Mastodon is a free, open\-source social network server based on ActivityPub where users can follow friends and discover new ones..

## Image
linuxserver/mastodon:latest

## Categories
- Social

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/mastodon |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| LOCAL_DOMAIN | LOCAL_DOMAIN | ```example.com``` | ```This is the unique identifier of your server in the network. It cannot be safely changed later.``` |
| REDIS_HOST | REDIS_HOST | ```redis``` | ```Redis server hostname``` |
| REDIS_PORT | REDIS_PORT | ```6379``` | ```Redis port``` |
| DB_HOST | DB_HOST | ```db``` | ```Postgres database hostname``` |
| DB_USER | DB_USER | ```mastodon``` | ```Postgres username``` |
| DB_NAME | DB_NAME | ```mastodon``` | ```Postgres db name``` |
| DB_PASS | DB_PASS | ```mastodon``` | ```Postgres password``` |
| DB_PORT | DB_PORT | ```5432``` | ```Portgres port``` |
| ES_ENABLED | ES_ENABLED | ```false``` | ```Enable or disable Elasticsearch (requires a separate ES instance)``` |
| SECRET_KEY_BASE | SECRET_KEY_BASE | `````` | ```Browser session secret. Changing it will break all active browser sessions.``` |
| OTP_SECRET | OTP_SECRET | `````` | ```MFA secret. Changing it after initial setup will break two-factor authentication.``` |
| VAPID_PRIVATE_KEY | VAPID_PRIVATE_KEY | `````` | ```Push notification private key. Changing it after initial setup will break push notifications.``` |
| VAPID_PUBLIC_KEY | VAPID_PUBLIC_KEY | `````` | ```Push notification public key. Changing it after initial setup will break push notifications.``` |
| SMTP_SERVER | SMTP_SERVER | ```mail.example.com``` | ```SMTP server for email notifications``` |
| SMTP_PORT | SMTP_PORT | ```25``` | ```SMTP server port``` |
| SMTP_LOGIN | SMTP_LOGIN | `````` | ```SMTP username``` |
| SMTP_PASSWORD | SMTP_PASSWORD | `````` | ```SMTP password``` |
| SMTP_FROM_ADDRESS | SMTP_FROM_ADDRESS | ```notifications@example.com``` | ```From address for emails send from Mastodon``` |
| S3_ENABLED | S3_ENABLED | ```false``` | ```Enable or disable S3 storage of uploaded files``` |
| WEB_DOMAIN | WEB_DOMAIN | ```mastodon.example.com``` | ```This can be set if you want your server identifier to be different to the subdomain hosting Mastodon. See [https://docs.joinmastodon.org/admin/config/#basic](https://docs.joinmastodon.org/admin/config/#basic)``` |
| ES_HOST | ES_HOST | ```es``` | ```Elasticsearch server hostname``` |
| ES_PORT | ES_PORT | ```9200``` | ```Elasticsearch port``` |
| ES_USER | ES_USER | ```elastic``` | ```Elasticsearch username``` |
| ES_PASS | ES_PASS | ```elastic``` | ```Elasticsearch password``` |
| S3_BUCKET | S3_BUCKET | `````` | ```S3 bucket hostname``` |
| AWS_ACCESS_KEY_ID | AWS_ACCESS_KEY_ID | `````` | ```S3 bucket access key ID``` |
| AWS_SECRET_ACCESS_KEY | AWS_SECRET_ACCESS_KEY | `````` | ```S3 bucket secret access key``` |
| S3_ALIAS_HOST | S3_ALIAS_HOST | `````` | ```Alternate hostname for object fetching if you are front the S3 connections.``` |
| SIDEKIQ_ONLY | SIDEKIQ_ONLY | ```false``` | ```Only run the sidekiq service in this container instance. For large scale instances that need better queue handling.``` |
| SIDEKIQ_QUEUE | SIDEKIQ_QUEUE | `````` | ```The name of the sidekiq queue to run in this container. See [notes](https://docs.joinmastodon.org/admin/scaling/#sidekiq-queues).``` |
| SIDEKIQ_DEFAULT | SIDEKIQ_DEFAULT | ```false``` | ```Set to `true` on the main container if you're running additional sidekiq instances. It will run the `default` queue.``` |
| SIDEKIQ_THREADS | SIDEKIQ_THREADS | ```5``` | ```The number of threads for sidekiq to use. See [notes](https://docs.joinmastodon.org/admin/scaling/#sidekiq-threads).``` |
| DB_POOL | DB_POOL | ```5``` | ```The size of the DB connection pool, must be *at least* the same as `SIDEKIQ_THREADS`. See [notes](https://docs.joinmastodon.org/admin/scaling/#sidekiq-threads).``` |
| NO_CHOWN | NO_CHOWN | `````` | ```Set to `true` to skip chown of /config on init. *READ THE APPLICATION NOTES BEFORE SETTING THIS*.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mastodon.rule | ```Host(`mastodon.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mastodon.entrypoints | ```https``` |
| traefik.http.services.mastodon.loadbalancer.server.port | ```80``` |
| traefik.http.routers.mastodon.tls | ```true``` |
| traefik.http.routers.mastodon.tls.certresolver | ```default``` |
| traefik.http.routers.mastodon.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mastodon``` |
| mafl.description | ```Mastodon is a free, open-source social network server based on ActivityPub where users can follow friends and discover new ones.``` |
| mafl.link | ```https://mastodon.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Social``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mastodon-banner.png``` |

