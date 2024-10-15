# LinkStack

![Logo](images/LinkStack.png)

## Description
The Ultimate Link Management Solution

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://linkstack.org/>  
**Official Docker Documentation:** [https://github.com/linkstackorg/linkstack\#readme](https://github.com/linkstackorg/linkstack#readme)  
  
  


## Image
linkstackorg/linkstack:latest

## Categories
- Other
- Web

## Ports
- 8822:80/tcp
- 8844:443/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| SERVER_ADMIN | SERVER_ADMIN | ```name@domain.tld``` | `````` |
| HTTP_SERVER_NAME | HTTP_SERVER_NAME | ```HTTP_Domain``` | `````` |
| HTTPS_SERVER_NAME | HTTPS_SERVER_NAME | ```HTTPS_Domain``` | `````` |
| LOG_LEVEL | LOG_LEVEL | ```info``` | `````` |
| TZ | TZ | ```America/Chicago``` | `````` |
| PHP_MEMORY_LIMIT | PHP_MEMORY_LIMIT | ```256M``` | `````` |
| UPLOAD_MAX_FILESIZE | UPLOAD_MAX_FILESIZE | ```8M``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.linkstack.rule | ```Host(`linkstack.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.linkstack.entrypoints | ```https``` |
| traefik.http.services.linkstack.loadbalancer.server.port | ```80``` |
| traefik.http.routers.linkstack.tls | ```true``` |
| traefik.http.routers.linkstack.tls.certresolver | ```default``` |
| traefik.http.routers.linkstack.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```linkstack``` |
| mafl.description | ```The Ultimate Link Management Solution``` |
| mafl.link | ```https://linkstack.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/LinkStackOrg/branding/main/logo/png/logo.png``` |

