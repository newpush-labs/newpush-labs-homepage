# revealjs

![Logo](images/revealjs.jpg)

## Description
It is an open source HTML presentation framework. It enables anyone with a web browser to create fully featured and beautiful presentations for free \| Production Mode

## Image
cloudogu/reveal.js

## Categories
- Presentation

## Ports
- 6060:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /reveal/docs/slides | /opt/appdata/revealjs/docs/slides |
| /resources | /opt/appdata/revealjs/scripts/test |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.revealjs.rule | ```Host(`revealjs.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.revealjs.entrypoints | ```https``` |
| traefik.http.services.revealjs.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.revealjs.tls | ```true``` |
| traefik.http.routers.revealjs.tls.certresolver | ```default``` |
| traefik.http.routers.revealjs.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Reveal.js``` |
| mafl.description | ```It is an open source HTML presentation framework.``` |
| mafl.link | ```https://revealjs.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Presentation``` |
| mafl.icon.url | ```https://pbs.twimg.com/profile_images/1260911777929400325/_ClbHpsz_400x400.jpg``` |

