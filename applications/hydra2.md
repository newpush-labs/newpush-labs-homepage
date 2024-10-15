# hydra2

![Logo](images/hydra2.png)

## Description
NZBHydra is a meta search for NZB indexers and the "spiritual successor" to NZBmegasearcH. It provides easy access to a number of raw and newznab based indexers.

## Image
linuxserver/hydra2:latest

## Categories

## Ports
- 5076/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config |  |
| /downloads |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | `````` | `````` |
| PGID | PGID | `````` | `````` |
| TZ | TZ | `````` | `````` |

