# jfa-go

![Logo](images/jfago.png)

## Description
jfa\-go is a user management app for Jellyfin (and now Emby) that provides invite\-based account creation as well as other features that make one's instance much easier to manage.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://jfa\-go.com/](https://jfa-go.com/)  
**Official Docker Documentation:** [https://wiki.jfa\-go.com/](https://wiki.jfa-go.com/)  
  
  
This system is setup to work with either Emby or Jellyfin out of the box. During the initial setup the user will have the option of which server they will be administering.

## Image
hrfee/jfa-go:latest

## Categories
- Video
- Music
- Photos
- Management

## Ports
- 8056:8056/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /jf | /opt/appdata/jelllyfin |
| /data | /opt/appdata/jfago |
| /etc/localtime | /etc/localtime |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.jfa-go.rule | ```Host(`jfa-go.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.jfa-go.entrypoints | ```https``` |
| traefik.http.services.jfa-go.loadbalancer.server.port | ```8056``` |
| traefik.http.routers.jfa-go.tls | ```true``` |
| traefik.http.routers.jfa-go.tls.certresolver | ```default``` |
| traefik.http.routers.jfa-go.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Jellyfin-Accounts``` |
| mafl.description | ```jfa-go is a user management app for Jellyfin (and now Emby) that provides invite-based account creation as well as other features that make one's instance much easier to manage.``` |
| mafl.link | ```https://jfa-go.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Video``` |
| mafl.icon.url | ```https://github.com/hrfee/jfa-go/raw/main/images/jfa-go-icon.png``` |

