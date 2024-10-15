# pi-weather-station

## Description
This is a weather station designed to be used with a Raspberry Pi on the official 7 800x480 touchscreen. The weather station will require you to have API keys from Mapbox and ClimaCell (v4\). Optionally, you can use an API key from LocationIQ to preform reverse geocoding.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://github.com/SeanRiggs/pi\-weather\-station](https://github.com/SeanRiggs/pi-weather-station)  
**Official Docker Documentation:** [https://github.com/SeanRiggs/pi\-weather\-station/blob/master/Docker%20Image/Docker\-ReadMe.md](https://github.com/SeanRiggs/pi-weather-station/blob/master/Docker%20Image/Docker-ReadMe.md)  
  
  
**Youtube Video:** [Novaspirit Tech \- Your Personal Weather Station Docker Container](https://www.youtube.com/watch?v=5JfPzvcm0E8)  
  
MUST DO FIRST! \- create volume call weatherdata

## Image
seanriggs/pi-weather-station

## Categories
- Other
- Tools

## Ports
- 8888:8080/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /app | weatherdata |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.pi-weather-station.rule | ```Host(`pi-weather-station.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.pi-weather-station.entrypoints | ```https``` |
| traefik.http.services.pi-weather-station.loadbalancer.server.port | ```8080``` |
| traefik.http.routers.pi-weather-station.tls | ```true``` |
| traefik.http.routers.pi-weather-station.tls.certresolver | ```default``` |
| traefik.http.routers.pi-weather-station.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```pi-weather-station``` |
| mafl.description | ```This is a weather station designed to be used with a Raspberry Pi on the official 7 800x480 touchscreen.``` |
| mafl.link | ```https://pi-weather-station.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Other``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/weather.png``` |

