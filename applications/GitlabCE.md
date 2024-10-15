# Gitlab CE

![Logo](images/GitlabCE.png)

## Description
Open\-source end\-to\-end software development platform

## Notes
Default username is **root**. Check the [Gitlab documentation](https://docs.gitlab.com/omnibus/docker/README.html#after-starting-a-container) to get started.

## Image
gitlab/gitlab-ce:latest

## Categories
- Development
- Projectmanagement

## Ports
- 80/tcp
- 443/tcp
- 22/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /etc/gitlab |  |
| /var/log/gitlab |  |
| /var/opt/gitlab |  |

