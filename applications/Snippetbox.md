# Snippet-box

![Logo](images/Snippetbox.png)

## Description
Snippet Box is a simple self\-hosted app for organizing your code snippets.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/pawelmalak/snippet\-box](https://github.com/pawelmalak/snippet-box)  
**Official Docker Documentation:** [https://github.com/pawelmalak/snippet\-box\#with\-docker](https://github.com/pawelmalak/snippet-box#with-docker)  
  
  
**Youtube Video:** [Novaspirit Tech \- My Most used container! Snippet Box](https://www.youtube.com/watch?v=v-jUyB3fvAo)  
  
Label\-oriented interface with search. Supports various programming languages, markdown, plain text.

## Image
pawelmalak/snippet-box:arm

## Categories
- Other
- Tools

## Ports
- 5010:5000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/snippet-box |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.snippet-box.rule | ```Host(`snippet-box.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.snippet-box.entrypoints | ```https``` |
| traefik.http.services.snippet-box.loadbalancer.server.port | ```5000``` |
| traefik.http.routers.snippet-box.tls | ```true``` |
| traefik.http.routers.snippet-box.tls.certresolver | ```default``` |
| traefik.http.routers.snippet-box.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Snippet-box``` |
| mafl.description | ```Snippet Box is a simple self-hosted app for organizing your code snippets.``` |
| mafl.link | ```https://snippet-box.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/snibox.png``` |

