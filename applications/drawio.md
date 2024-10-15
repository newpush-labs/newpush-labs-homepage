# draw.io

## Description
draw.io (formerly Diagramly) is free online diagram software. You can use it as a flowchart maker, network diagram software, to create UML online, as an ER diagram tool, to design database schema, to build BPMN online, as a circuit diagram maker, and more. draw.io can import .vsdx, Gliffy™ and Lucidchart™ files.

## Image
jgraph/drawio:latest

## Categories
- Managementutilityserver

## Ports
- 8080:8080/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.draw.io.rule | ```Host(`draw.io.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.draw.io.entrypoints | ```https``` |
| traefik.http.services.draw.io.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.draw.io.tls | ```true``` |
| traefik.http.routers.draw.io.tls.certresolver | ```default``` |
| traefik.http.routers.draw.io.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```draw.io``` |
| mafl.description | ```draw.``` |
| mafl.link | ```https://draw.io.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/qwerty00007/portainer_templates/master/Images/draw.io.png``` |

