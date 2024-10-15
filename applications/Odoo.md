# Odoo

![Logo](images/Odoo.png)

## Description
Open\-source business apps

## Image
odoo:latest

## Categories
- Projectmanagement
- Phishing

## Ports
- 8069/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/odoo |  |
| /mnt/extra-addons |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| HOST | PostgreSQL database host | `````` | `````` |
| USER | Database user | `````` | `````` |
| PASSWORD | Database password | `````` | `````` |

