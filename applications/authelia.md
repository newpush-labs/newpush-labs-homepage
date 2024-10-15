# authelia

![Logo](images/authelia.png)

## Description
An open\-source authentication and authorization server providing 2\-factor authentication and single sign\-on (SSO) for your applications via a web portal.

## Notes
Requires a configuration.yml file in order to work. Documentation is available [here](https://docs.authelia.com/deployment/deployment-ha).

## Image
authelia/authelia:latest

## Categories
- Authenticationserver

## Ports
- 9091:9091/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/authelia/ | /opt/appdata/authelia |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | `````` | `````` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.authelia.rule | ```Host(`authelia.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.authelia.entrypoints | ```https``` |
| traefik.http.services.authelia.loadbalancer.server.port | ```9091``` |
| traefik.http.routers.authelia.tls | ```true``` |
| traefik.http.routers.authelia.tls.certresolver | ```default``` |
| traefik.http.routers.authelia.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Authelia``` |
| mafl.description | ```An open-source authentication and authorization server providing 2-factor authentication and single sign-on (SSO) for your applications via a web portal.``` |
| mafl.link | ```https://authelia.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Authenticationserver``` |
| mafl.icon.url | ```https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/authelia.png``` |

