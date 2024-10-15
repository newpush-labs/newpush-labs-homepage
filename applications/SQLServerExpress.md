# SQL Server Express

![Logo](images/SQLServerExpress.png)

## Description
Microsoft SQL Server Express for Windows containers

## Notes
Password needs to include at least 8 characters including uppercase, lowercase letters, base\-10 digits and/or non\-alphanumeric symbols.

## Image
microsoft/mssql-server-windows-express:latest

## Categories
- Database

## Ports
- 1433/tcp

## Volumes
| Container | Bind |
|-----------|------|
| C:/temp/ |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| ACCEPT_EULA |  | ```Y``` | `````` |
| sa_password | SA password | `````` | `````` |

