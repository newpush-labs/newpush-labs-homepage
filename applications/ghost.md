# ghost

![Logo](images/ghost.png)

## Description
Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/docker\-library/docs/tree/master/ghost](https://github.com/docker-library/docs/tree/master/ghost)  
**Official Docker Documentation:** <https://hub.docker.com/_/ghost>  
  
  


## Image
ghost:latest

## Categories
- Other
- Tools

## Ports
- 2368:2368/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/ghost/content | /opt/appdata/ghost |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| NODE_ENV | NODE_ENV | ```development``` | `````` |
| url | url | ```http://localhost/``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ghost.rule | ```Host(`ghost.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ghost.entrypoints | ```https``` |
| traefik.http.services.ghost.loadbalancer.server.port | ```2368``` |
| traefik.http.routers.ghost.tls | ```true``` |
| traefik.http.routers.ghost.tls.certresolver | ```default``` |
| traefik.http.routers.ghost.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ghost``` |
| mafl.description | ```Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.``` |
| mafl.link | ```https://ghost.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/ghost.png``` |

