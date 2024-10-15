# SearXNG

![Logo](images/SearXNG.png)

## Description
Open\-Source Privacy\-respecting metasearch engine

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://docs.searxng.org/>  
**Official Docker Documentation:** [https://docs.searxng.org/admin/installation\-docker.html](https://docs.searxng.org/admin/installation-docker.html)  
### **Pi\-Hosted dedicated documentation:** [searxng.md](https://github.com/pi-hosted/pi-hosted/blob/master/docs/searxng.md)

  
  
  


## Image
searxng/searxng:latest

## Categories
- Other
- Tools

## Ports
- 9017:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/searxng | /opt/appdata/searxng |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| BASE_URL | BASE_URL | ```http://localhost:9017``` | `````` |
| INSTANCE_NAME | INSTANCE_NAME | ```my-instance``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.searxng.rule | ```Host(`searxng.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.searxng.entrypoints | ```https``` |
| traefik.http.services.searxng.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.searxng.tls | ```true``` |
| traefik.http.routers.searxng.tls.certresolver | ```default``` |
| traefik.http.routers.searxng.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```SearXNG``` |
| mafl.description | ```Open-Source Privacy-respecting metasearch engine``` |
| mafl.link | ```https://searxng.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/searx.png``` |

