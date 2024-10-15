# OPC Router

![Logo](images/OPCRouter.png)

## Description
No\-code middleware for industrial applications. The OPC Router connects PLCs, PCS, SCADA, MES, SQL databases and servers, label printers, e\-mail servers and erp\-systems via OPC UA, MQTT, REST, CSV and many others without any programming effort

## Notes
More information about the [EULA](https://www.opc-router.com/terms-of-use-and-eula/?utm_source=DockerHub_runtime&utm_medium=click&utm_campaign=TermsOfUseAndEula).

## Image
opcrouter/runtime:latest

## Categories
- Edge

## Ports
- 49429/tcp
- 8080/tcp
- 8081/tcp

## Volumes
| Container | Bind |
|-----------|------|
| /data/database |  |
| /inray |  |
| /var/log/opcrouter |  |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| INITIAL_USERNAME | Initial Admin User user | `````` | `````` |
| INITIAL_PASSWORD | Inital Admin User Password | `````` | `````` |
| OR_I_ACCEPT_EULA | Accept EULA | `````` | `````` |

