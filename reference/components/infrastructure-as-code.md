---
title: Infrastructure as Code
order: 9
---

# Infrastructure as Code with Ansible

NewPush Labs uses Ansible for infrastructure as code (IaC), ensuring consistency, reproducibility, and scalability in lab environments.

## Key Concepts

1. **Playbooks**: Ansible playbooks define the desired state of your infrastructure and applications.

2. **Roles**: Reusable components that encapsulate tasks, handlers, and variables.

3. **Inventories**: Define the hosts and groups that Ansible manages.

4. **Variables**: Used to customize playbooks for different environments or use cases.

## Using Ansible in NewPush Labs

### Structure

The Ansible configuration in NewPush Labs typically follows this structure:

```
ansible/
├── inventories/
│   ├── production/
│   └── staging/
├── playbooks/
│   ├── site.yml
│   ├── webservers.yml
│   └── databases.yml
├── roles/
│   ├── common/
│   ├── webserver/
│   └── database/
└── ansible.cfg
```

### Running Playbooks

To apply configuration changes:

```bash
ansible-playbook -i inventories/production site.yml
```

## Customization

You can customize the Ansible configuration by:

1. Modifying existing playbooks and roles
2. Creating new roles for specific applications or services
3. Adjusting variables to change behavior across environments

## Best Practices

- Use version control (e.g., Git) for your Ansible code
- Test changes in a staging environment before applying to production
- Use Ansible Vault for sensitive information
- Keep playbooks idempotent (safe to run multiple times)
- Regularly update Ansible and its dependencies

## Further Reading

For more detailed information on using Ansible, refer to the [official Ansible documentation](https://docs.ansible.com/).