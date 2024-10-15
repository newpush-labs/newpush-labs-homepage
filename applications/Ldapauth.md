# Ldap-auth

![Logo](images/Ldapauth.jpg)

## Description
Ldap\-auth software is for authenticating users who request protected resources from servers proxied by nginx. It includes a daemon (ldap\-auth) that communicates with an authentication server, and a webserver daemon that generates an authentication cookie based on the user’s credentials. The daemons are written in Python for use with a Lightweight Directory Access Protocol (LDAP) authentication server (OpenLDAP or Microsoft Windows Active Directory 2003 and 2012\).

## Image
linuxserver/ldap-auth:latest

## Categories
- Proxyserver

## Ports
- 8888:8888/tcp
- 9000:9000/tcp

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| FERNETKEY | FERNETKEY | `````` | ```Optionally define a custom fernet key, has to be base64-encoded 32-byte (only needed if container is frequently recreated, or if using multi-node setups, invalidating previous authentications)``` |
| CERTFILE | CERTFILE | `````` | ```Point this to a certificate file to enable HTTP over SSL (HTTPS) for the ldap auth daemon``` |
| KEYFILE | KEYFILE | `````` | ```Point this to the private key file, matching the certificate file referred to in CERTFILE``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.ldap-auth.rule | ```Host(`ldap-auth.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.ldap-auth.entrypoints | ```https``` |
| traefik.http.services.ldap-auth.loadbalancer.server.port | ```8888``` |
| traefik.http.routers.ldap-auth.tls | ```true``` |
| traefik.http.routers.ldap-auth.tls.certresolver | ```default``` |
| traefik.http.routers.ldap-auth.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Ldap-auth``` |
| mafl.description | ```Ldap-auth software is for authenticating users who request protected resources from servers proxied by nginx.``` |
| mafl.link | ```https://ldap-auth.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Proxyserver``` |
| mafl.icon.url | ```https://jumpcloud.com/wp-content/uploads/2016/12/LDAP_Logo-1420591101.jpg``` |

