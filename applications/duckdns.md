# duckdns

![Logo](images/duckdns.png)

## Description
Duck DNS is a free service which will point a DNS (sub domains of duckdns.org) to an IP of your choice. The service is completely free, and doesn't require reactivation or forum posts to maintain its existence.

## Notes
**Configuration**First, go to duckdns site, register your subdomain and retrieve your token  
Then run the docker create command above with your subdomain(s) and token  
It will update your IP with the DuckDNS service every 5 minutes

## Image
linuxserver/duckdns:latest

## Categories
- Dns

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| SUBDOMAINS | SUBDOMAINS | `````` | `````` |
| TOKEN | TOKEN | `````` | `````` |
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```100``` | `````` |

