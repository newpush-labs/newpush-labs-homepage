# Dokuwiki

![Logo](images/Dokuwiki.png)

## Description
Dokuwiki is a simple to use and highly versatile Open Source wiki software that doesn't require a database. It is loved by users for its clean and readable syntax. The ease of maintenance, backup and integration makes it an administrator's favorite. Built in access controls and authentication connectors make DokuWiki especially useful in the enterprise context and the large number of plugins contributed by its vibrant community allow for a broad range of use cases beyond a traditional wiki.

## Image
linuxserver/dokuwiki:latest

## Categories
- Notesserver

## Ports
- 80:80/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/dokuwiki |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.dokuwiki.rule | ```Host(`dokuwiki.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.dokuwiki.entrypoints | ```https``` |
| traefik.http.services.dokuwiki.loadbalancer.server.port | ```80``` |
| traefik.http.routers.dokuwiki.tls | ```true``` |
| traefik.http.routers.dokuwiki.tls.certresolver | ```default``` |
| traefik.http.routers.dokuwiki.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Dokuwiki``` |
| mafl.description | ```Dokuwiki is a simple to use and highly versatile Open Source wiki software that doesn't require a database.``` |
| mafl.link | ```https://dokuwiki.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Notesserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/dokuwiki-icon.png``` |

