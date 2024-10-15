# gitea

![Logo](images/gitea.png)

## Description
Git with a cup of tea! Painless self\-hosted all\-in\-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD.

## Notes
Use SQLite3 for the database unless you have an external one setup.

## Image
gitea/gitea:latest

## Categories
- Web
- Tools

## Ports
- 3000:3000/tcp
- 222:22/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/gitea |
| /etc/timezone:ro | /etc/timezone |
| /etc/localtime:ro | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.gitea.rule | ```Host(`gitea.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.gitea.entrypoints | ```https``` |
| traefik.http.services.gitea.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.gitea.tls | ```true``` |
| traefik.http.routers.gitea.tls.certresolver | ```default``` |
| traefik.http.routers.gitea.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Gitea``` |
| mafl.description | ```Git with a cup of tea!``` |
| mafl.link | ```https://gitea.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Web``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/gitea.png``` |

