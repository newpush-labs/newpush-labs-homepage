# Sshwifty

![Logo](images/Sshwifty.png)

## Description
Sshwifty is a SSH and Telnet connector made for the Web. It can be deployed on your computer or server to provide SSH and Telnet access interface for any compatible (standard) web browser.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://sshwifty.herokuapp.com/>  
**Official Docker Documentation:** [https://github.com/nirui/sshwifty\#docker\-image](https://github.com/nirui/sshwifty#docker-image)  
  
  


## Image
niruix/sshwifty:latest

## Categories
- Tools
- Web

## Ports
- 8182:8182/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.sshwifty.rule | ```Host(`sshwifty.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.sshwifty.entrypoints | ```https``` |
| traefik.http.services.sshwifty.loadbalancer.server.port | ```8182``` |
| traefik.http.routers.sshwifty.tls | ```true``` |
| traefik.http.routers.sshwifty.tls.certresolver | ```default``` |
| traefik.http.routers.sshwifty.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Sshwifty``` |
| mafl.description | ```Sshwifty is a SSH and Telnet connector made for the Web.``` |
| mafl.link | ```https://sshwifty.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/sshwifty-icon.png``` |

