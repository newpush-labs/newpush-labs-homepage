# terraria-server

![Logo](images/terrariaserver.png)

## Description
Docker container for a Terraria dedicated server.

## Notes
Link to [Official documentation 🗗](https://terraria.fandom.com/wiki/Guide:Setting_up_a_Terraria_server) for setting up the server.

## Image
passivelemon/terraria-docker:latest

## Categories
- Games

## Ports
- 7777:7777/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /usr/share/tesseract-ocr/5/tessdata | /opt/appdata/libraries/stirlingpdf/tessdata |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| WORLD | World name | ```dockerworld``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.terraria-server.rule | ```Host(`terraria-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.terraria-server.entrypoints | ```https``` |
| traefik.http.services.terraria-server.loadbalancer.server.port | ```7777``` |
| traefik.http.routers.terraria-server.tls | ```true``` |
| traefik.http.routers.terraria-server.tls.certresolver | ```default``` |
| traefik.http.routers.terraria-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Terraria Server {shmolf}``` |
| mafl.description | ```Docker container for a Terraria dedicated server.``` |
| mafl.link | ```https://terraria-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Games``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/shmolf/portainer-templates/main/assets/logos/terraria-server.png``` |

