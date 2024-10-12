---
title: Application Templates
order: 4
---
# Application Templates with Portainer

NewPush Labs utilizes Portainer to provide pre-configured application templates, enabling quick deployment and management of containerized applications.

## Features

- Wide range of pre-configured application templates
- Easy deployment with **just** a few clicks
- Customizable templates to suit your needs
- Integration with NewPush Labs' networking and storage solutions

## Accessing Portainer

Portainer is typically accessible at `https://portainer.yourdomain.com`. Use your SSO credentials to log in.

## Using Application Templates

To deploy an application using a template:

1. Log in to Portainer
2. Navigate to the "App Templates" section
3. Browse or search for the desired application
4. Click on the application to view its details
5. Configure any necessary settings
6. Click "Deploy the container" to launch the application

## Custom Templates

You can also create your own custom templates:

1. Go to the "Custom Templates" section in Portainer
2. Click "Add custom template"
3. Provide a name, description, and the Docker Compose or stack file for your application
4. Save the template

Your custom template will now be available alongside the pre-configured ones.

## Best Practices

- Review the template configuration before deployment
- Use environment variables for sensitive information
- Regularly update your deployed applications
- Monitor resource usage of deployed applications