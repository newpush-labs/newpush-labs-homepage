# passky-server

![Logo](images/passkyserver.png)

## Description
Passky is a simple, modern, lightweight, open\-source and secure password manager.

## Notes
Do not forget to perform regular backups, especially before each update.

## Image
rabbitcompany/passky-server:latest

## Categories
- Other
- Tools

## Ports
- 8080:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/www/html/databases | /opt/appdata/passky-server |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| ADMIN_USERNAME | ADMIN_USERNAME | ```admin``` | `````` |
| ADMIN_PASSWORD | ADMIN_PASSWORD | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.passky-server.rule | ```Host(`passky-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.passky-server.entrypoints | ```https``` |
| traefik.http.services.passky-server.loadbalancer.server.port | ```80``` |
| traefik.http.routers.passky-server.tls | ```true``` |
| traefik.http.routers.passky-server.tls.certresolver | ```default``` |
| traefik.http.routers.passky-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Passky Server``` |
| mafl.description | ```Passky is a simple, modern, lightweight, open-source and secure password manager.``` |
| mafl.link | ```https://passky-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/passky-icon.png``` |

