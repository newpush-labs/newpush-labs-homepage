# Flame

![Logo](images/Flame.png)

## Description
Flame is self\-hosted startpage for your server. Its design is inspired (heavily) by SUI. Flame is very easy to setup and use. With built\-in editors, it allows you to setup your very own application hub in no time \- no file editing necessary.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/pawelmalak/flame>  
**Official Docker Documentation:** [https://github.com/pawelmalak/flame\#with\-docker\-recommended](https://github.com/pawelmalak/flame#with-docker-recommended)  
  
  


## Image
pawelmalak/flame:multiarch

## Categories
- Other
- Tools

## Ports
- 5005:5005/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/flame/data |
| /var/run/docker.sock | /var/run/docker.sock |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PASSWORD | Flame Password | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.flame.rule | ```Host(`flame.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.flame.entrypoints | ```https``` |
| traefik.http.services.flame.loadbalancer.server.port | ```5005``` |
| traefik.http.routers.flame.tls | ```true``` |
| traefik.http.routers.flame.tls.certresolver | ```default``` |
| traefik.http.routers.flame.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Flame``` |
| mafl.description | ```Flame is self-hosted startpage for your server.``` |
| mafl.link | ```https://flame.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/flame.png``` |

