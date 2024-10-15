# tiddlywiki

![Logo](images/tiddlywiki.png)

## Description
A unique, non\-linear notebook wiki.

## Image
mazzolino/tiddlywiki:latest

## Categories
- Notesserver

## Ports
- 8080:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/tiddlywiki | /opt/appdata/tiddlywiki |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.tiddlywiki.rule | ```Host(`tiddlywiki.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.tiddlywiki.entrypoints | ```https``` |
| traefik.http.services.tiddlywiki.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.tiddlywiki.tls | ```true``` |
| traefik.http.routers.tiddlywiki.tls.certresolver | ```default``` |
| traefik.http.routers.tiddlywiki.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```TiddlyWiki``` |
| mafl.description | ```A unique, non-linear notebook wiki.``` |
| mafl.link | ```https://tiddlywiki.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Notesserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/tiddlywiki.png``` |

