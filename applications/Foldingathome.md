# Foldingathome

![Logo](images/Foldingathome.png)

## Description
Folding@home is a distributed computing project for simulating protein dynamics, including the process of protein folding and the movements of proteins implicated in a variety of diseases. It brings together citizen scientists who volunteer to run simulations of protein dynamics on their personal computers. Insights from this data are helping scientists to better understand biology, and providing new opportunities for developing therapeutics.

## Image
linuxserver/foldingathome:latest

## Categories
- Tools

## Ports
- 7396:7396/tcp
- 36330:36330/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/foldingathome |

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
| traefik.http.routers.foldingathome.rule | ```Host(`foldingathome.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.foldingathome.entrypoints | ```https``` |
| traefik.http.services.foldingathome.loadbalancer.server.port | ```7396``` |
| traefik.http.routers.foldingathome.tls | ```true``` |
| traefik.http.routers.foldingathome.tls.certresolver | ```default``` |
| traefik.http.routers.foldingathome.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Foldingathome``` |
| mafl.description | ```Folding@home is a distributed computing project for simulating protein dynamics, including the process of protein folding and the movements of proteins implicated in a variety of diseases.``` |
| mafl.link | ```https://foldingathome.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://foldingathome.org/wp-content/uploads/2016/09/folding-at-home-logo.png``` |

