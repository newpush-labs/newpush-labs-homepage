# collabora

![Logo](images/collabora.png)

## Description
Please see the install document at https://github.com/pi\-hosted/pi\-hosted/tree/master/docs for instructions on installing the template to work with NextCloud.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.collaboraoffice.com/>  
**Official Docker Documentation:** <https://sdk.collaboraonline.com/docs/installation/CODE_Docker_image.html>  
  
  


## Image
collabora/code:latest

## Categories
- Other
- Tools

## Ports
- 9980:9980/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| username | username | ```admin``` | ```User name for the admin console.``` |
| password | password | ```z#wYaMnS4!?9RK``` | ```Password for the admin console.``` |
| DONT_GEN_SSL_CERT | DONT_GEN_SSL_CERT | `````` | ```When this environment variable is set (is not “”), then startup script will not generate a new SSL certificate signed by a dummy CA. It is useful, if you want to use your own SSL certificate for some reason.``` |
| cert_domain | cert_domain | `````` | ```When this environment variable is set (is not “”), then startup script will generate a new SSL certificate signed by a dummy CA for this domain, not for localhost``` |
| server_name | server_name | ```collabora.domain.tld | http://IP:Port``` | ```When this environment variable is set (is not “”), then its value will be used as server name in /etc/coolwsd/coolwsd.xml. Without this, CODE is not delivering a correct host for the websocket connection in case of a proxy in front of it.``` |
| dictionaries | dictionaries | `````` | ```By default only limited set of spelling dictionaries and thesauri are configured for CODE, mainly for performance reasons. The default set of languages is the following: de_DE en_GB en_US es_ES fr_FR it nl pt_BR pt_PT ru. With the dictionaries environment variable you can change this list. The dictionaries environment variable should contain the space separated list of language codes (optionally followed by country code). In order to save resources, it makes sense to load only those dictionaries that are actually needed.``` |
| extra_params | extra_params | ```--o:ssl.enable=false --o:ssl.termination=true``` | ```You can pass extra command line parameters to coolwsd via this environment variable. For example, if you want to start coolwsd without SSL, when you test or develop, the syntax is: -e ''extra_params=--o:ssl.enable=false''. To learn about all possible options, refer to the self-documented /etc/coolwsd/coolwsd.xml configuration file in the Docker image.``` |
| domain | domain | ```nextcloud.domain.tld``` | ```The domain of your NextCloud instance.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.collabora.rule | ```Host(`collabora.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.collabora.entrypoints | ```https``` |
| traefik.http.services.collabora.loadbalancer.server.port | ```9980``` |
| traefik.http.routers.collabora.tls | ```true``` |
| traefik.http.routers.collabora.tls.certresolver | ```default``` |
| traefik.http.routers.collabora.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Collabora Online Development Edition (CODE)``` |
| mafl.description | ```Please see the install document at https://github.``` |
| mafl.link | ```https://collabora.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://www.collaboraoffice.com/wp-content/uploads/2022/03/collabora-productivity-nav-icon.png``` |

