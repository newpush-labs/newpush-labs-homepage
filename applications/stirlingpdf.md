# stirling-pdf

![Logo](images/stirlingpdf.svg)

## Description
Your locally hosted one\-stop\-shop for all your PDF needs.

## Notes
To support multiple languages for OCR, per the [Official documentation 🗗](https://github.com/Stirling-Tools/Stirling-PDF/blob/main/HowToUseOCR.md), download your Tess Data from [from another repo 🗗](https://github.com/tesseract-ocr/tessdata).   
Then, place said 'traineddata' files into `/portainer/Files/AppData/Libraries/StirlingPDF/tessdata`   
For more information about login, read [the official documentation 🗗](https://github.com/Stirling-Tools/Stirling-PDF?tab=readme-ov-file#prerequisites).

## Image
frooodle/s-pdf:0.18.1

## Categories
- Tools
- Pdf

## Ports
- 5417:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /configs | /opt/appdata/stirlingpdf |
| /usr/share/tesseract-ocr/5/tessdata | /opt/appdata/libraries/stirlingpdf/tessdata |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1000``` | `````` |
| PGID | PGID | ```1000``` | `````` |
| DOCKER_ENABLE_SECURITY | Enable Login | `````` | ```If you want to enable the login, you'll also need to enable login through the Config's settings.yml``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.stirling-pdf.rule | ```Host(`stirling-pdf.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.stirling-pdf.entrypoints | ```https``` |
| traefik.http.services.stirling-pdf.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.stirling-pdf.tls | ```true``` |
| traefik.http.routers.stirling-pdf.tls.certresolver | ```default``` |
| traefik.http.routers.stirling-pdf.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Stirling PDF {shmolf}``` |
| mafl.description | ```Your locally hosted one-stop-shop for all your PDF needs.``` |
| mafl.link | ```https://stirling-pdf.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Tools``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/shmolf/portainer-templates/main/assets/logos/stirling-pdf.svg``` |

