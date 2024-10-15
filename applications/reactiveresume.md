# reactive-resume

![Logo](images/reactiveresume.png)

## Description
A one\-of\-a\-kind resume builder that's not out to get your data. Completely secure, customizable, portable, open\-source and free forever.

## Image
amruthpillai/reactive-resume:latest

## Categories
- Other
- Tools

## Ports
- 80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /usr/src/app | /opt/appdata/reactiveresume |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.reactive-resume.rule | ```Host(`reactive-resume.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.reactive-resume.entrypoints | ```https``` |
| traefik.http.services.reactive-resume.loadbalancer.server.port | ```4242``` |
| traefik.http.routers.reactive-resume.tls | ```true``` |
| traefik.http.routers.reactive-resume.tls.certresolver | ```default``` |
| traefik.http.routers.reactive-resume.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Reactive-Resume``` |
| mafl.description | ```A one-of-a-kind resume builder that's not out to get your data.``` |
| mafl.link | ```https://reactive-resume.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/reactiveresume.png``` |

