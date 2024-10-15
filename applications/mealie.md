# mealie

![Logo](images/mealie.png)

## Description
A self\-hosted recipe manager and meal planner

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://hay\-kot.github.io/mealie/](https://hay-kot.github.io/mealie/)  
**Official Docker Documentation:** [https://hay\-kot.github.io/mealie/documentation/getting\-started/install/](https://hay-kot.github.io/mealie/documentation/getting-started/install/)  
  
  
Default Credentials: Username: changeme@email.com Password: MyPassword. Documentation is Available [here](https://hay-kot.github.io/mealie/documentation/getting-started/install/).

## Image
hkotel/mealie:v0.4.3

## Categories
- Other
- Tools

## Ports
- 9925:9000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app/data | /opt/appdata/mealie |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| TZ | TZ | ```America/New_York``` | `````` |
| WEB_CONCURRENCY | WEB_CONCURRENCY | ```2``` | `````` |
| MAX_WORKERS | MAX_WORKERS | ```8``` | `````` |
| RECIPE_PUBLIC | RECIPE_PUBLIC | ```true``` | `````` |
| RECIPE_SHOW_NUTRITION | RECIPE_SHOW_NUTRITION | ```true``` | `````` |
| RECIPE_SHOW_ASSETS | RECIPE_SHOW_ASSETS | ```true``` | `````` |
| RECIPE_LANDSCAPE_VIEW | RECIPE_LANDSCAPE_VIEW | ```true``` | `````` |
| RECIPE_DISABLE_COMMENTS | RECIPE_DISABLE_COMMENTS | ```false``` | `````` |
| RECIPE_DISABLE_AMOUNT | RECIPE_DISABLE_AMOUNT | ```false``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.mealie.rule | ```Host(`mealie.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.mealie.entrypoints | ```https``` |
| traefik.http.services.mealie.loadbalancer.server.port | ```9000``` |
| traefik.http.routers.mealie.tls | ```true``` |
| traefik.http.routers.mealie.tls.certresolver | ```default``` |
| traefik.http.routers.mealie.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Mealie``` |
| mafl.description | ```A self-hosted recipe manager and meal planner``` |
| mafl.link | ```https://mealie.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/mealie.png``` |

