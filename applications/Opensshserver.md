# Openssh-server

![Logo](images/Opensshserver.png)

## Description
Openssh\-server is a sandboxed environment that allows ssh access without giving keys to the entire server. Giving ssh access via private key often means giving full access to the server. This container creates a limited and sandboxed environment that others can ssh into. The users only have access to the folders mapped and the processes running inside this container.

## Image
linuxserver/openssh-server:latest

## Categories
- Managementutilityserver

## Ports
- 2222:2222/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /config | /opt/appdata/openssh-server |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| PUID | PUID | ```1024``` | ```for GroupID``` |
| PGID | PGID | ```100``` | ```for UserID``` |
| TZ | TZ | ```Europe/Amsterdam``` | ```Specify a timezone to use for example Europe/Amsterdam``` |
| PUBLIC_KEY | PUBLIC_KEY | ```yourpublickey``` | ```Optional ssh public key, which will automatically be added to authorized_keys.``` |
| PUBLIC_KEY_FILE | PUBLIC_KEY_FILE | ```/path/to/file``` | ```Optionally specify a file containing the public key (works with docker secrets).``` |
| PUBLIC_KEY_DIR | PUBLIC_KEY_DIR | ```/path/to/directory/containing/_only_/pubkeys``` | ```Optionally specify a directory containing the public keys (works with docker secrets).``` |
| PUBLIC_KEY_URL | PUBLIC_KEY_URL | ```https://github.com/username.keys``` | ```Optionally specify a URL containing the public key.``` |
| SUDO_ACCESS | SUDO_ACCESS | ```false``` | ```Set to `true` to allow `linuxserver.io`, the ssh user, sudo access. Without `USER_PASSWORD` set, this will allow passwordless sudo access.``` |
| PASSWORD_ACCESS | PASSWORD_ACCESS | ```false``` | ```Set to `true` to allow user/password ssh access. You will want to set `USER_PASSWORD` or `USER_PASSWORD_FILE` as well.``` |
| USER_PASSWORD | USER_PASSWORD | ```password``` | ```Optionally set a sudo password for `linuxserver.io`, the ssh user. If this or `USER_PASSWORD_FILE` are not set but `SUDO_ACCESS` is set to true, the user will have passwordless sudo access.``` |
| USER_PASSWORD_FILE | USER_PASSWORD_FILE | ```/path/to/file``` | ```Optionally specify a file that contains the password. This setting supersedes the `USER_PASSWORD` option (works with docker secrets).``` |
| USER_NAME | USER_NAME | ```linuxserver.io``` | ```Optionally specify a user name (Default:`linuxserver.io`)``` |

## Labels
| Key | Value |
|-----|-------|
| traefik.enable | ```true``` |
| traefik.http.routers.openssh-server.rule | ```Host(`openssh-server.{$TRAEFIK_INGRESS_DOMAIN}`)``` |
| traefik.http.routers.openssh-server.entrypoints | ```https``` |
| traefik.http.services.openssh-server.loadbalancer.server.port | ```2222``` |
| traefik.http.routers.openssh-server.tls | ```true``` |
| traefik.http.routers.openssh-server.tls.certresolver | ```default``` |
| traefik.http.routers.openssh-server.middlewares | ```traefik-forward-auth``` |
| mafl.enable | ```true``` |
| mafl.title | ```Openssh-server``` |
| mafl.description | ```Openssh-server is a sandboxed environment that allows ssh access without giving keys to the entire server.``` |
| mafl.link | ```https://openssh-server.{$TRAEFIK_INGRESS_DOMAIN}``` |
| mafl.icon.wrap | ```true``` |
| mafl.icon.color | ```#007acc``` |
| mafl.status.enabled | ```true``` |
| mafl.status.interval | ```60``` |
| mafl.group | ```Managementutilityserver``` |
| mafl.icon.url | ```https://upload.wikimedia.org/wikipedia/en/6/65/OpenSSH_logo.png``` |

