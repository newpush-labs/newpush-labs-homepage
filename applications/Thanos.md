# Thanos

## Description
Thanos is a tool that allows you to shrink your minecraft worlds by deleting unused chuncks.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://github.com/aternosorg/thanos>  
**Official Docker Documentation:** <https://github.com/aternosorg/thanos>  
  
  


## Image
cristianeduardmihai/thanos:latest

## Categories
- Other
- Tools
- Minecraft

## Volumes
| Container | Bind |
|-----------|------|
| /output | /appdata/files/mc/output |
| /watch | /appdata/mc/input |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```America/Chicago``` | ```Specify a timezone to use for example America/Chicago``` |

