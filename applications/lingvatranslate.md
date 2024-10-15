# lingva-translate

![Logo](images/lingvatranslate.svg)

## Description
Alternative front\-end for Google Translate, serving as a Free and Open Source translator with over a hundred languages available

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** <https://lingva.ml/>  
**Official Docker Documentation:** [https://github.com/TheDavidDelta/lingva\-translate](https://github.com/TheDavidDelta/lingva-translate)  
  
  


## Image
cinetube/lingva-translate:latest

## Categories
- Other
- Tools

## Ports
- 3010:3000/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| dark_theme | dark_theme | ```true``` | `````` |
| site_domain | site_domain | ```lingva.ml``` | `````` |
| default_source_lang | default_source_lang | ```auto``` | `````` |
| default_target_lang | default_target_lang | ```en``` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.lingva-translate.rule | ```Host(`lingva-translate.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.lingva-translate.entrypoints | ```https``` |
| traefik.http.services.lingva-translate.loadbalancer.server.port | ```3000``` |
| traefik.http.routers.lingva-translate.tls | ```true``` |
| traefik.http.routers.lingva-translate.tls.certresolver | ```default``` |
| traefik.http.routers.lingva-translate.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Lingva Translate``` |
| mafl.description | ```Alternative front-end for Google Translate, serving as a Free and Open Source translator with over a hundred languages available``` |
| mafl.link | ```https://lingva-translate.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/lingva-translate.svg``` |

