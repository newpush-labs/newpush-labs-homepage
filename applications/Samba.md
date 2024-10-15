# Samba

![Logo](images/Samba.png)

## Description
Samba has provided secure, stable and fast file and print services for all clients using the SMB/CIFS protocol, such as all versions of DOS and Windows, OS/2, Linux and many others.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.samba.org/>  
**Official Docker Documentation:** <https://github.com/dperson/samba>  
  
  
**Youtube Videos:**  
* [Novaspirit Tech \- Setting up Raspberry Pi Samba Server For File Sharing on Docker](https://www.youtube.com/watch?v=2zZ3_1GRWrM&list=PL846hFPMqg3jwkxcScD1xw2bKXrJVvarc&index=11)
* [Novaspirit Tech \- Building NAS with Container](https://www.youtube.com/watch?v=9ln6UFH4z8o)

  
  


## Image
dperson/samba:latest

## Categories
- Other
- Tools

## Ports
- 139:139/tcp
- 445:445/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /share | /appdata/downloads |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| USERID | USERID | ```1000``` | `````` |
| GROUPID | GROUPID | ```1000``` | `````` |
| USER | USER | ```guest;guest``` | `````` |
| PERMISSIONS | PERMISSIONS | ```true``` | `````` |
| SHARE | SHARE | ```portainer;/share;yes;no;yes;guest``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.samba.rule | ```Host(`samba.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.samba.entrypoints | ```https``` |
| traefik.http.services.samba.loadbalancer.server.port | ```139``` |
| traefik.http.routers.samba.tls | ```true``` |
| traefik.http.routers.samba.tls.certresolver | ```default``` |
| traefik.http.routers.samba.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Samba``` |
| mafl.description | ```Samba has provided secure, stable and fast file and print services for all clients using the SMB/CIFS protocol, such as all versions of DOS and Windows, OS/2, Linux and many others.``` |
| mafl.link | ```https://samba.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/samba.png``` |

