# Minio

![Logo](images/Minio.png)

## Description
A distributed object storage server built for cloud applications and devops

## Image
minio/minio:latest

## Categories
- Storage
- Exfiltration

## Ports
- 9000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data |  |
| /root/.minio |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| MINIO_ACCESS_KEY | Minio access key | `````` | `````` |
| MINIO_SECRET_KEY | Minio secret key | `````` | `````` |

