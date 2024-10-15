# PostgreSQL

![Logo](images/PostgreSQL.png)

## Description
The most advanced open\-source database

## Image
postgres:latest

## Categories
- Database

## Ports
- 5432/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /var/lib/postgresql/data |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| POSTGRES_USER | Superuser | `````` | `````` |
| POSTGRES_PASSWORD | Superuser password | `````` | `````` |

