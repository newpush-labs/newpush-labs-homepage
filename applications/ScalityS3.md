# Scality S3

![Logo](images/ScalityS3.png)

## Description
Standalone AWS S3 protocol server

## Image
scality/s3server

## Categories
- Storage

## Ports
- 8000/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /usr/src/app/localData |  |
| /usr/src/app/localMetadata |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| SCALITY_ACCESS_KEY | Scality S3 access key | `````` | `````` |
| SCALITY_SECRET_KEY | Scality S3 secret key | `````` | `````` |

