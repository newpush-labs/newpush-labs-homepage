# Zusam

![Logo](images/Zusam.png)

## Description
Zusam is a free and open\-source way to self\-host private forums for groups of friends.

## Image
zusam/zusam

## Categories
- Social
- Forum

## Ports
- 4180:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /zusam/data | /opt/appdata/zusam |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| INIT_USER | INIT_USER | ```email@domain.example``` | `````` |
| INIT_PASSWORD | INIT_PASSWORD | ```initpass zusam``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.zusam.rule | ```Host(`zusam.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.zusam.entrypoints | ```https``` |
| traefik.http.services.zusam.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.zusam.tls | ```true``` |
| traefik.http.routers.zusam.tls.certresolver | ```default``` |
| traefik.http.routers.zusam.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Zus.am``` |
| mafl.description | ```Zusam is a free and open-source way to self-host private forums for groups of friends.``` |
| mafl.link | ```https://zusam.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Social``` |
| mafl.icon.url | ```https://github.com/zusam/zusam/raw/master/app/src/assets/zusam_logo.png``` |

