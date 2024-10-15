# minecraft

![Logo](images/minecraft.png)

## Description
This docker image provides a Minecraft Server that will automatically download the latest stable version at startup. You can also run/upgrade to any specific version or the latest snapshot. See the Versions section below for more information.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://www.minecraft.net/en\-us](https://www.minecraft.net/en-us)  
**Official Docker Documentation:** [https://github.com/itzg/docker\-minecraft\-server\#using\-docker\-compose](https://github.com/itzg/docker-minecraft-server#using-docker-compose)  
  
  


## Image
itzg/minecraft-server:latest

## Categories
- Other
- Tools
- Games

## Ports
- 25565:25565/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data | /opt/appdata/minecraft-data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| EULA | EULA | ```TRUE``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.minecraft.rule | ```Host(`minecraft.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.minecraft.entrypoints | ```https``` |
| traefik.http.services.minecraft.loadbalancer.server.port | ```25565``` |
| traefik.http.routers.minecraft.tls | ```true``` |
| traefik.http.routers.minecraft.tls.certresolver | ```default``` |
| traefik.http.routers.minecraft.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Minecraft Server``` |
| mafl.description | ```This docker image provides a Minecraft Server that will automatically download the latest stable version at startup.``` |
| mafl.link | ```https://minecraft.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/minecraft.png``` |

