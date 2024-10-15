# flatnotes

![Logo](images/flatnotes.png)

## Description
A distraction\-free, database\-less note taking app that puts your content first.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/Dullage/flatnotes>  
**Official Docker Documentation:** <https://hub.docker.com/r/dullage/flatnotes>  
  
### **[Pre\-installation script](https://github.com/pi-hosted/pi-hosted/blob/master/tools/install_flatnotes.sh) must be RAN before you install:** wget \-qO\- https://raw.githubusercontent.com/pi\-hosted/pi\-hosted/master/tools/install\_flatnotes.sh \| bash

  
  


## Image
dullage/flatnotes:latest

## Categories
- Other
- Tools

## Ports
- 8715:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/flatnotes/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| FLATNOTES_AUTH_TYPE | FLATNOTES_AUTH_TYPE | ```password``` | `````` |
| FLATNOTES_USERNAME | FLATNOTES_USERNAME | ```admin``` | `````` |
| FLATNOTES_PASSWORD | FLATNOTES_PASSWORD | ```changeme``` | `````` |
| FLATNOTES_SECRET_KEY | FLATNOTES_SECRET_KEY | ```aLongRandomSeriesOfCharacters``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.flatnotes.rule | ```Host(`flatnotes.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.flatnotes.entrypoints | ```https``` |
| traefik.http.services.flatnotes.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.flatnotes.tls | ```true``` |
| traefik.http.routers.flatnotes.tls.certresolver | ```default``` |
| traefik.http.routers.flatnotes.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```flatnotes``` |
| mafl.description | ```A distraction-free, database-less note taking app that puts your content first.``` |
| mafl.link | ```https://flatnotes.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/spandan13/pi-hosted/master/images/flatnotes.png``` |

