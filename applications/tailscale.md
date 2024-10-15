# tailscale

![Logo](images/tailscale.png)

## Description
Connect your devices and users together in your own secure Zero config virtual private network. 

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://tailscale.com/>  
**Official Docker Documentation:** <https://hub.docker.com/r/tailscale/tailscale>  
  
  


## Image
tailscale/tailscale:stable

## Categories
- Other
- Vpn

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/tailscale | /opt/appdata/tailscale |
| /dev/net/tun | /dev/net/tun |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| AUTH_KEY | AUTH_KEY | `````` | ```Get AUTH KEY from your tailscale.com user panel``` |

