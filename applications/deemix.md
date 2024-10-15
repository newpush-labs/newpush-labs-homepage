# deemix

![Logo](images/deemix.png)

## Description
Deemix is a deezer downloader built from the ashes of Deezloader Remix.

## Notes
Deemix may take a few minutes to install. Be sure to check the logs for details. Refer to [this page](https://notabug.org/RemixDevs/DeezloaderRemix/wiki/Login+via+userToken) for userToken details.

## Image
registry.gitlab.com/bockiii/deemix-docker

## Categories
- Other
- Music

## Ports
- 6595:6595/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/deemix |
| /downloads | /appdata/downloads |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.deemix.rule | ```Host(`deemix.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.deemix.entrypoints | ```https``` |
| traefik.http.services.deemix.loadbalancer.server.port | ```6595``` |
| traefik.http.routers.deemix.tls | ```true``` |
| traefik.http.routers.deemix.tls.certresolver | ```default``` |
| traefik.http.routers.deemix.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```DeeMix``` |
| mafl.description | ```Deemix is a deezer downloader built from the ashes of Deezloader Remix.``` |
| mafl.link | ```https://deemix.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/deemix.png``` |

