# red_beagle

## Description
Incident response and digital forensics tool which transforms data sources and logs into graphs. Supported data sources include FireEye HX Triages, Windows EVTX files, SysMon logs and Raw Windows memory images.

## Notes
Point your browser to http://your\-docker\-machine\-ip:8000 to access it.

## Image
yampelo/beagle

## Categories
- Utils
- Dfir
- Osint

## Ports
- 8000:8000/tcp

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.red_beagle.rule | ```Host(`red_beagle.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.red_beagle.entrypoints | ```https``` |
| traefik.http.services.red_beagle.loadbalancer.server.port | ```8000``` |
| traefik.http.routers.red_beagle.tls | ```true``` |
| traefik.http.routers.red_beagle.tls.certresolver | ```default``` |
| traefik.http.routers.red_beagle.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Beagle``` |
| mafl.description | ```Incident response and digital forensics tool which transforms data sources and logs into graphs.``` |
| mafl.link | ```https://red_beagle.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Utils``` |
| mafl.icon.url | ```https://i.imgur.com/QDBYkY1.jpg``` |

