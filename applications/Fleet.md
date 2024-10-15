# Fleet

## Description
Fleet provides an online web interface which displays a set of maintained images from one or more owned repositories.

## Image
linuxserver/fleet:latest

## Categories
- Uncategorized Services

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/fleet |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| fleet_admin_authentication_type | fleet_admin_authentication_type | ```DATABASE``` | ```A switch to define how Fleet manages user logins. If set to DATABASE, see the related optional params. Can be set to either DATABASE or PROPERTIES.``` |
| fleet_database_url | fleet_database_url | ```jdbc:mariadb://<url>:3306/fleet``` | ```The full JDBC connection string to the Fleet database``` |
| fleet_database_username | fleet_database_username | ```fleet_user``` | ```The username with the relevant GRANT permissions for the database``` |
| fleet_database_password | fleet_database_password | ```dbuserpassword``` | ```The database user's password.``` |
| fleet_admin_secret | fleet_admin_secret | ```randomstring``` | ```A string used as part of the password key derivation process.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.fleet.rule | ```Host(`fleet.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.fleet.entrypoints | ```https``` |
| traefik.http.services.fleet.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.fleet.tls | ```true``` |
| traefik.http.routers.fleet.tls.certresolver | ```default``` |
| traefik.http.routers.fleet.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Fleet``` |
| mafl.description | ```Fleet provides an online web interface which displays a set of maintained images from one or more owned repositories.``` |
| mafl.link | ```https://fleet.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | `````` |

