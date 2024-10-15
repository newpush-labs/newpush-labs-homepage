# Kasm

![Logo](images/Kasm.png)

## Description
Kasm Workspaces is a docker container streaming platform for delivering browser\-based access to desktops, applications, and web services. Kasm uses devops\-enabled Containerized Desktop Infrastructure (CDI) to create on\-demand, disposable, docker containers that are accessible via web browser. Example use\-cases include Remote Browser Isolation (RBI), Data Loss Prevention (DLP), Desktop as a Service (DaaS), Secure Remote Access Services (RAS), and Open Source Intelligence (OSINT) collections. The rendering of the graphical\-based containers is powered by the open\-source project KasmVNC.

## Image
linuxserver/kasm:latest

## Categories
- Uncategorized Services

## Ports
- 3000:3000/tcp
- 443:443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /opt | /opt/appdata/kasm/opt |
| /profiles | /opt/appdata/kasm/profiles |
| /dev/input | /dev/input |
| /run/udev/data | /run/udev/data |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| KASM_PORT | KASM_PORT | ```443``` | ```Specify the port you bind to the outside for Kasm Workspaces.``` |
| DOCKER_HUB_USERNAME | DOCKER_HUB_USERNAME | ```USER``` | ```Optionally specify a DockerHub Username to pull private images.``` |
| DOCKER_HUB_PASSWORD | DOCKER_HUB_PASSWORD | ```PASS``` | ```Optionally specify a DockerHub password to pull private images.``` |
| DOCKER_MTU | DOCKER_MTU | ```1500``` | ```Optionally specify the mtu options passed to dockerd.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.kasm.rule | ```Host(`kasm.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.kasm.entrypoints | ```https``` |
| traefik.http.services.kasm.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.kasm.tls | ```true``` |
| traefik.http.routers.kasm.tls.certresolver | ```default``` |
| traefik.http.routers.kasm.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Kasm``` |
| mafl.description | ```Kasm Workspaces is a docker container streaming platform for delivering browser-based access to desktops, applications, and web services.``` |
| mafl.link | ```https://kasm.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://kasm-ci.s3.amazonaws.com/kasm_wide.png``` |

