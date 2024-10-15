---
title: Coder Stack
order: 2
---
# Overview

Coder is a powerful tool that allows you to deploy pre-defined development environments based on templates using Terraform. This enables you to quickly set up consistent and reproducible development environments, ensuring that all team members have the same setup and can work efficiently.

![coder](images/coder.png)

## Architecture

```mermaid
graph TD
    subgraph WebNetwork [Web Network]
        coder_create_admin[Coder Create Admin]
        coder[Coder]
    end
    
    subgraph DatabaseNetwork [Database Network]
        database[PostgreSQL Database]
    end
    
    coder_create_admin -->|Depends On| database
    coder -->|Depends On| database
    
    coder -->|Exposes Port 7080| traefik[Traefik Router]
    traefik -->|Routes Traffic| web_client[Web Client]
    
    database -.->|Volume: coder_data| storage[Persistent Storage]
    
    coder_create_admin -->|Docker Group Access| docker_socket[Docker Socket]
    coder -->|Docker Group Access| docker_socket
```

## Manage

To start the lab, use the following CLI command:

```sh
newpush-lab start lab-tools-coder
```

or visit Dockge and start the `lab-tools-coder` stack. 