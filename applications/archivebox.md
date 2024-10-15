# archivebox

![Logo](images/archivebox.png)

## Description
ArchiveBox is a powerful, self\-hosted internet archiving solution to collect, save, and view sites you want to preserve offline.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://archivebox.io/>  
**Official Docker Documentation:** <https://github.com/ArchiveBox/ArchiveBox/wiki/Docker>  
  
  
By default an admin user is not created. You can do so by launching a shell in the container and executing 'archivebox manage createsuperuser'. Documentation is Available [here](https://github.com/ArchiveBox/ArchiveBox/wiki).

## Image
archivebox/archivebox:latest

## Categories
- Other
- Tools

## Ports
- 8002:8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/archivebox |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| ALLOWED_HOSTS | ALLOWED_HOSTS | ```*``` | `````` |
| MEDIA_MAX_SIZE | MEDIA_MAX_SIZE | ```750m``` | `````` |
| PUBLIC_INDEX | PUBLIC_INDEX | ```true``` | `````` |
| PUBLIC_SNAPSHOTS | PUBLIC_SNAPSHOTS | ```true``` | `````` |
| PUBLIC_ADD_VIEW | PUBLIC_ADD_VIEW | ```false``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.archivebox.rule | ```Host(`archivebox.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.archivebox.entrypoints | ```https``` |
| traefik.http.services.archivebox.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.archivebox.tls | ```true``` |
| traefik.http.routers.archivebox.tls.certresolver | ```default``` |
| traefik.http.routers.archivebox.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Archivebox``` |
| mafl.description | ```ArchiveBox is a powerful, self-hosted internet archiving solution to collect, save, and view sites you want to preserve offline.``` |
| mafl.link | ```https://archivebox.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/archivebox.png``` |

