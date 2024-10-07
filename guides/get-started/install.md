# Install the labs

Follow these steps to install and set up NewPush Labs on your local machine:

## Prerequisites

Before you begin, ensure you have a linux virtual machine in no production. The lab is in current development can break things, don't use it on your production environment. The lab is being developed on debian. 

- [Debian](https://www.debian.org/) 
- [Ansible](https://www.ansible.com/)

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
   pip3 install -r requirements.txt
   ansible-galaxy install -r requirements.yml
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
   ansible-playbook -i ./provisioning/ansible/inventory/hosts.local ./provisioning/ansible/lab-install-local.yml
   ```

6. **Test the Lab**

   Once the installation is complete, the lab URL will be shown in the terminal. Open your web browser and navigate to the provided URL to verify that the lab is up and running.