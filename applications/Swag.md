# Swag

![Logo](images/Swag.gif)

## Description
SWAG \- Secure Web Application Gateway (formerly known as letsencrypt, no relation to Let's Encrypt™) sets up an Nginx webserver and reverse proxy with php support and a built\-in certbot client that automates free SSL server certificate generation and renewal processes (Let's Encrypt and ZeroSSL). It also contains fail2ban for intrusion prevention.

## Image
linuxserver/swag:latest

## Categories
- Uncategorized Services

## Ports
- 443:443/tcp
- 80:80/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/swag |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for UserID``` |
| PGID | PGID | ```100``` | ```for GroupID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```specify a timezone to use, see this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).``` |
| URL | URL | ```yourdomain.url``` | ```Top url you have control over (`customdomain.com` if you own it, or `customsubdomain.ddnsprovider.com` if dynamic dns).``` |
| VALIDATION | VALIDATION | ```http``` | ```Certbot validation method to use, options are `http` or `dns` (`dns` method also requires `DNSPLUGIN` variable set).``` |
| SUBDOMAINS | SUBDOMAINS | ```www,``` | ```Subdomains you'd like the cert to cover (comma separated, no spaces) ie. `www,ftp,cloud`. For a wildcard cert, set this *exactly* to `wildcard` (wildcard cert is available via `dns` validation only)``` |
| CERTPROVIDER | CERTPROVIDER | `````` | ```Optionally define the cert provider. Set to `zerossl` for ZeroSSL certs (requires existing [ZeroSSL account](https://app.zerossl.com/signup) and the e-mail address entered in `EMAIL` env var). Otherwise defaults to Let's Encrypt.``` |
| DNSPLUGIN | DNSPLUGIN | ```cloudflare``` | ```Required if `VALIDATION` is set to `dns`. Options are `acmedns`, `aliyun`, `azure`, `bunny`, `cloudflare`, `cpanel`, `desec`, `digitalocean`, `directadmin`, `dnsimple`, `dnsmadeeasy`, `dnspod`, `do`, `domeneshop`, `dreamhost`, `duckdns`, `dynudns`, `freedns`, `gandi`, `gehirn`, `glesys`, `godaddy`, `google`, `he`, `hetzner`, `infomaniak`, `inwx`, `ionos`, `linode`, `loopia`, `luadns`, `namecheap`, `netcup`, `njalla`, `nsone`, `ovh`, `porkbun`, `rfc2136`, `route53`, `sakuracloud`, `standalone`, `transip`, and `vultr`. Also need to enter the credentials into the corresponding ini (or json for some plugins) file under `/config/dns-conf`.``` |
| PROPAGATION | PROPAGATION | `````` | ```Optionally override (in seconds) the default propagation time for the dns plugins.``` |
| EMAIL | EMAIL | `````` | ```Optional e-mail address used for cert expiration notifications (Required for ZeroSSL).``` |
| ONLY_SUBDOMAINS | ONLY_SUBDOMAINS | ```false``` | ```If you wish to get certs only for certain subdomains, but not the main domain (main domain may be hosted on another machine and cannot be validated), set this to `true```` |
| EXTRA_DOMAINS | EXTRA_DOMAINS | `````` | ```Additional fully qualified domain names (comma separated, no spaces) ie. `extradomain.com,subdomain.anotherdomain.org,*.anotherdomain.org```` |
| STAGING | STAGING | ```false``` | ```Set to `true` to retrieve certs in staging mode. Rate limits will be much higher, but the resulting cert will not pass the browser's security test. Only to be used for testing purposes.``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.swag.rule | ```Host(`swag.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.swag.entrypoints | ```https``` |
| traefik.http.services.swag.loadbalancer.server.port | ```443``` |
| traefik.http.routers.swag.tls | ```true``` |
| traefik.http.routers.swag.tls.certresolver | ```default``` |
| traefik.http.routers.swag.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Swag``` |
| mafl.description | ```SWAG - Secure Web Application Gateway (formerly known as letsencrypt, no relation to Let's Encrypt™) sets up an Nginx webserver and reverse proxy with php support and a built-in certbot client that automates free SSL server certificate generation and renewal processes (Let's Encrypt and ZeroSSL).``` |
| mafl.link | ```https://swag.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Services``` |
| mafl.icon.url | ```https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/swag.gif``` |

