# Monitoring with Grafana and Loki

NewPush Labs includes a comprehensive monitoring solution using Grafana for visualization and Loki for log aggregation and analysis.

## Grafana

Grafana is used to create dashboards and visualize metrics from various sources.

### Features

- Pre-configured dashboards for system and application metrics
- Ability to create custom dashboards
- Alerting capabilities
- Integration with multiple data sources

### Accessing Grafana

Grafana is typically accessible at `https://grafana.yourdomain.com`. Use your SSO credentials to log in.

## Loki

Loki is a log aggregation system designed to store and query logs from all your applications and infrastructure.

### Features

- Efficient log storage and indexing
- Integration with Grafana for log visualization
- Powerful query language (LogQL) for searching and analyzing logs

### Using Loki

Loki is integrated with Grafana, allowing you to query and visualize logs directly from the Grafana interface.

To query logs in Grafana:

1. Create a new dashboard or edit an existing one
2. Add a new panel
3. Select Loki as the data source
4. Use LogQL to query your logs

Example LogQL query:

```
{app="myapp"} |= "error"
```

This query will show all logs from "myapp" that contain the word "error".

## Best Practices

- Use labels effectively to organize your metrics and logs
- Set up alerts for critical metrics and log patterns
- Regularly review and optimize your dashboards
- Implement log rotation and retention policies to manage storage