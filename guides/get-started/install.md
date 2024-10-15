---
title: Installation
order: 3
---

# Installation

Follow these steps to install and set up NewPush Labs on your virtual machine.

:::warning
A dedicated Debian-based virtual machine is required for the lab.
:::


:::tip
You can use your local machine to run the Ansible roles for remote targets, or you can execute the Ansible scripts directly on the remote machine.
:::
## Steps

1. **Clone the Repository**

   Open your terminal and run the following command to clone the NewPush Labs repository:

   ```sh
   git clone https://github.com/newpush-labs/newpush-labs.git
   ```

2. **Navigate to the Project Directory**

   Change to the project directory:

   ```sh
   cd newpush-labs
   ```

3. **Install Dependencies**

   Install the required dependencies using npm:

   ```sh
   pip3 install -r provisioning/ansible/requirements.txt
   ansible-galaxy install -r provisioning/ansible/requirements.yml
   ```

4. **Copy and Edit Configuration File**

   Copy the example configuration file to the appropriate location:

   ```sh
   cp provisioning/ansible/group_vars/lab.yaml.example provisioning/ansible/group_vars/lab.yaml
   ```

   Open the `lab.yaml` file in your preferred text editor and update the configuration settings as needed to match your environment and requirements.


5. **Run the Installer**

   Install to local machine the lab:

   ```sh
   make setup HOSTS_FILE=./provisioning/ansible/inventory/hosts       
   ```
 