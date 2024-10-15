# libreddit

![Logo](images/libreddit.png)

## Description
An alternative private front\-end to Reddit

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://libreddit.silkky.cloud/>  
**Official Docker Documentation:** [https://github.com/spikecodes/libreddit\#2\-docker](https://github.com/spikecodes/libreddit#2-docker)  
  
  


## Image
libreddit/libreddit:armv7

## Categories
- Other
- Tools

## Ports
- 8088:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/libreddit |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.libreddit.rule | ```Host(`libreddit.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.libreddit.entrypoints | ```https``` |
| traefik.http.services.libreddit.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.libreddit.tls | ```true``` |
| traefik.http.routers.libreddit.tls.certresolver | ```default``` |
| traefik.http.routers.libreddit.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```libreddit``` |
| mafl.description | ```An alternative private front-end to Reddit``` |
| mafl.link | ```https://libreddit.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/libreddit.png``` |

