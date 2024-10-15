# ContentBox

![Logo](images/ContentBox.png)

## Description
Open\-source modular CMS

## Image
ortussolutions/contentbox:latest

## Categories
- Cms

## Ports
- 8080/tcp
- 8443/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data/contentbox/db |  |
| /app/includes/shared/media |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| express |  | ```true``` | `````` |
| install |  | ```true``` | `````` |
| CFENGINE |  | ```lucee@4.5``` | `````` |

