# apache-httpd

![Logo](images/apachehttpd.png)

## Description
The Apache HTTP Server is a free and open\-source cross\-platform web server software, released under the terms of Apache License 2\.0\. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://httpd.apache.org/>  
**Official Docker Documentation:** <https://hub.docker.com/_/httpd>  
  
  


## Image
httpd:latest

## Categories
- Web
- Proxy

## Ports
- 8080:80/tcp
- 8443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /usr/local/apache2/htdocs/ | /opt/appdata/apache-httpd |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.apache-httpd.rule | ```Host(`apache-httpd.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.apache-httpd.entrypoints | ```https``` |
| traefik.http.services.apache-httpd.loadbalancer.server.port | ```80``` |
| traefik.http.routers.apache-httpd.tls | ```true``` |
| traefik.http.routers.apache-httpd.tls.certresolver | ```default``` |
| traefik.http.routers.apache-httpd.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Apache Httpd``` |
| mafl.description | ```The Apache HTTP Server is a free and open-source cross-platform web server software, released under the terms of Apache License 2.``` |
| mafl.link | ```https://apache-httpd.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Web``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/apache-httpd.png``` |

