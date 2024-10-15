# ArchiSteamFarm

![Logo](images/ArchiSteamFarm.png)

## Description
Capplication with primary purpose of farming Steam cards from multiple accounts simultaneously.

## Notes
Requires an ASF.json with headless enabled, IPCPassword set and an IPC.config described by the wiki in order to work. Please generate the former [here](https://justarchinet.github.io/ASF-WebConfigGenerator) and copy the latter from [here](https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Docker#ipc).

## Image
justarchi/archisteamfarm:latest

## Categories
- Other
- Tools

## Ports
- 1242:1242/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/config | /opt/appdata/archisteamfarm/config |
| /app/plugins/customplugins | /opt/appdata/archisteamfarm/plugins |
| /app/logs | /opt/appdata/archisteamfarm/logs |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.archisteamfarm.rule | ```Host(`archisteamfarm.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.archisteamfarm.entrypoints | ```https``` |
| traefik.http.services.archisteamfarm.loadbalancer.server.port | ```1242``` |
| traefik.http.routers.archisteamfarm.tls | ```true``` |
| traefik.http.routers.archisteamfarm.tls.certresolver | ```default``` |
| traefik.http.routers.archisteamfarm.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```ArchiSteamFarm``` |
| mafl.description | ```Capplication with primary purpose of farming Steam cards from multiple accounts simultaneously.``` |
| mafl.link | ```https://archisteamfarm.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/ASF.png``` |

