# Netbox

## Description
Netbox is an IP address management (IPAM) and data center infrastructure management (DCIM) tool. Initially conceived by the network engineering team at DigitalOcean, NetBox was developed specifically to address the needs of network and infrastructure engineers. It is intended to function as a domain\-specific source of truth for network operations.

## Image
linuxserver/netbox:latest

## Categories
- Managementutilityserver

## Ports
- 8000:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/netbox |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| SUPERUSER_EMAIL | SUPERUSER_EMAIL | ```<SUPERUSER_EMAIL>``` | ```Email address for `admin` account``` |
| SUPERUSER_PASSWORD | SUPERUSER_PASSWORD | ```<SUPERUSER_PASSWORD>``` | ```Password for `admin` account``` |
| ALLOWED_HOST | ALLOWED_HOST | ```<ALLOWED_HOST>``` | ```The hostname you will use to access the app (i.e., netbox.example.com)``` |
| DB_NAME | DB_NAME | ```<DB_NAME>``` | ```Database name (default: netbox)``` |
| DB_USER | DB_USER | ```<DB_USER>``` | ```Database user``` |
| DB_PASSWORD | DB_PASSWORD | ```<DB_PASSWORD>``` | ```Database password``` |
| DB_HOST | DB_HOST | ```<DB_HOST>``` | ```Database host (default: postgres)``` |
| DB_PORT | DB_PORT | ```<DB_PORT>``` | ```Database port (defaul: 5432)``` |
| REDIS_HOST | REDIS_HOST | ```<REDIS_HOST>``` | ```Redis host (default: redis)``` |
| REDIS_PORT | REDIS_PORT | ```<REDIS_PORT>``` | ```Redis port number (default: 6379)``` |
| REDIS_PASSWORD | REDIS_PASSWORD | ```<REDIS_PASSWORD>``` | ```Redis password (default: none)``` |
| REDIS_DB_TASK | REDIS_DB_TASK | ```<REDIS_DB_TASK>``` | ```Redis database ID for tasks (default: 0)``` |
| REDIS_DB_CACHE | REDIS_DB_CACHE | ```<REDIS_DB_CACHE>``` | ```Redis database ID for caching (default: 1)``` |
| BASE_PATH | BASE_PATH | ```<BASE_PATH>``` | ```The path you will use to access the app (i.e., /netbox, optional, default: none)``` |
| REMOTE_AUTH_ENABLED | REMOTE_AUTH_ENABLED | ```<REMOTE_AUTH_ENABLED>``` | ```Enable remote authentication (optional, default: False)``` |
| REMOTE_AUTH_BACKEND | REMOTE_AUTH_BACKEND | ```<REMOTE_AUTH_BACKEND>``` | ```Python path to the custom Django authentication backend to use for external user authentication (optional, default: netbox.authentication.RemoteUserBackend)``` |
| REMOTE_AUTH_HEADER | REMOTE_AUTH_HEADER | ```<REMOTE_AUTH_HEADER>``` | ```Name of the HTTP header which informs NetBox of the currently authenticated user. (optional, default: HTTP_REMOTE_USER)``` |
| REMOTE_AUTH_AUTO_CREATE_USER | REMOTE_AUTH_AUTO_CREATE_USER | ```<REMOTE_AUTH_AUTO_CREATE_USER>``` | ```If true, NetBox will automatically create local accounts for users authenticated via a remote service (optional, default: False)``` |
| REMOTE_AUTH_DEFAULT_GROUPS | REMOTE_AUTH_DEFAULT_GROUPS | ```<REMOTE_AUTH_DEFAULT_GROUPS>``` | ```The list of groups to assign a new user account when created using remote authentication (optional, default: [])``` |
| REMOTE_AUTH_DEFAULT_PERMISSIONS | REMOTE_AUTH_DEFAULT_PERMISSIONS | ```<REMOTE_AUTH_DEFAULT_PERMISSIONS>``` | ```A mapping of permissions to assign a new user account when created using remote authentication (optional, default: {})``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.netbox.rule | ```Host(`netbox.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.netbox.entrypoints | ```https``` |
| traefik.http.services.netbox.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.netbox.tls | ```true``` |
| traefik.http.routers.netbox.tls.certresolver | ```default``` |
| traefik.http.routers.netbox.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Netbox``` |
| mafl.description | ```Netbox is an IP address management (IPAM) and data center infrastructure management (DCIM) tool.``` |
| mafl.link | ```https://netbox.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/netbox-community/netbox/develop/docs/netbox_logo.png``` |

