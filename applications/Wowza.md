# Wowza

![Logo](images/Wowza.png)

## Description
Streaming media server

## Image
sameersbn/wowza:4.1.2-8

## Categories
- Mediaserver

## Ports
- 1935/tcp
- 8086/tcp
- 8087/tcp
- 8088/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/wowza |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| WOWZA_ACCEPT_LICENSE | Agree to Wowza EULA | `````` | `````` |
| WOWZA_KEY | License key | `````` | `````` |

