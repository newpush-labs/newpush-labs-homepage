# cloudflared-tunnel

![Logo](images/cloudflaredtunnel.svg)

## Description
Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address. With Tunnel, you do not send traffic to an external IP — instead, a lightweight daemon in your infrastructure (cloudflared) creates outbound\-only connections to Cloudflare's edge.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://www.cloudflare.com/products/tunnel/>  
**Official Docker Documentation:** [https://developers.cloudflare.com/cloudflare\-one/connections/connect\-apps/install\-and\-setup/](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/)  
  
  
Requires a token in order to work. You can find the dashboard [here](https://dash.teams.cloudflare.com/). Once you logged in, go to Access followed by Tunnels. Create a tunnel. After you gave it a name you'll see in the command section a long string of chacters. This is your token you must copy.

## Image
cloudflare/cloudflared:latest

## Categories
- Other
- Tools
- Vpn
- Proxy

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TUNNEL_TOKEN | token | ```Your_Tunnel_Token_From_The_Zero_Dashboard_Access_Tunnel``` | `````` |

