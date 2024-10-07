# Tailscale exit node in Google Cloud

## Steps to Set Up Tailscale Exit Node in Google Cloud

In this exercise, we will guide you through the process of creating a micro virtual machine (VM) in Google Cloud Platform (GCP) that will serve as an exit node for Tailscale. An exit node allows you to route your internet traffic through a specific device on your Tailscale network, providing enhanced security and privacy. By following these steps, you will set up a secure and efficient exit node using Tailscale and GCP.

1. **Create a Tailscale Account and API Key**

   - Go to the [Tailscale website](https://tailscale.com/).
   - Sign up for a new account or log in if you already have one.
   - Navigate to the [API Keys section](https://login.tailscale.com/admin/settings/keys).
   - Generate a new API key and save it for later use.

2. **Download and Install the Tailscale Client**

   - Go to the [Tailscale Downloads page](https://tailscale.com/download).
   - Select the appropriate client for your operating system (Windows, macOS, Linux, etc.).
   - Follow the installation instructions provided for your operating system.
   - Once installed, log in to the Tailscale client using your Tailscale account credentials.

3. **Clone the Repository**

   ```sh
   git clone https://github.com/jlucktay/terraform-google-tailscale-exit-node
   ```

4. **Create a New Project in GCP**

   - Go to the [GCP Console](https://console.cloud.google.com/).
   - Navigate to **Organization Policies**: [Organization Policies](https://console.cloud.google.com/iam-admin/orgpolicies/list).
   - Search for `constraints/compute.vmExternalIpAccess`.
   - Click on **Edit Policy**, select **Override parent's policy**, choose **Replace**, and add a rule to **Allow**.

5. **Verify the Project**

   ```sh
   gcloud projects list
   ```

6. **Set Environment Variables**

   ```sh
   export TAILSCALE_API_KEY=tskey-api-.....
   export GOOGLE_CLOUD_PROJECT=np-....
   ```

7. **Authenticate and Initialize Terraform**

   ```sh
   gcloud auth login
   terraform init
   terraform apply
   ```

8. **Enter the Region**

   When prompted, enter the region, for example: `us-central1`.

9. **Wait for the Tailscale Client to Connect**

   - Go to the [Tailscale admin console](https://login.tailscale.com/admin/machines).
   - Find the newly connected node in the list of machines.
   - Click on the node to edit its settings.
   - Enable the option to allow the node to act as an exit node.
   - Approve the changes.

10. **Connect with the Tailscale Client**

   - Open the Tailscale client on your device.
   - Ensure you are logged in with your Tailscale account.
   - Verify that the newly created node appears in the list of connected devices.
   - If the node is not visible, check the Tailscale admin console for any connection issues.
   - Once the node is visible, you can start using it as an exit node.