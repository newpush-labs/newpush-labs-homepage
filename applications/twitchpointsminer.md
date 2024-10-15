# twitch-points-miner

![Logo](images/twitchpointsminer.png)

## Description
A simple script that will watch a stream for you and earn the channel points.

## Notes
Requires run.py, this is your starter script with your configuration. Please copy and modify accordingly Here

## Image
rdavidoff/twitch-channel-points-miner-v2:latest

## Categories
- Tools
- Other

## Ports
- 5000:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /usr/src/app/run.py | /opt/appdata/twitchpointsminer/run.py |
| /usr/src/app/cookies | /opt/appdata/twitchpointsminer/cookies |
| /usr/src/app/logs | /opt/appdata/twitchpointsminer/logs |
| /usr/src/app/analytics | /opt/appdata/twitchpointsminer/analytics |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.twitch-points-miner.rule | ```Host(`twitch-points-miner.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.twitch-points-miner.entrypoints | ```https``` |
| traefik.http.services.twitch-points-miner.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.twitch-points-miner.tls | ```true``` |
| traefik.http.routers.twitch-points-miner.tls.certresolver | ```default``` |
| traefik.http.routers.twitch-points-miner.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Twitch Points Miner``` |
| mafl.description | ```A simple script that will watch a stream for you and earn the channel points.``` |
| mafl.link | ```https://twitch-points-miner.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/twitchpointsminer.png``` |

