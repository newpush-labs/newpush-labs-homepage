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

The Ansible configuration in NewPush Labs typically this structure:

```
ansible/
├── inventory/
├── group_vars/
├── roles/
├── playbooks/
│   ├── lab.yaml
```

### Running Playbooks

To apply configuration changes:

```bash
ansible-playbook -i inventory/lab.yml -p provisioning/ansible/lab.yaml
```
## Makefile

The Makefile in the project directory defines a couple of macros for easier use. Refer to the `Makefile` for the list
of up to date macros. 

