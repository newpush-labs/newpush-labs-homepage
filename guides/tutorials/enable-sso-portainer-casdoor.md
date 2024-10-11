---
order: 2
---
# Enable SSO in Portainer with Casdoor

This guide will walk you through the process of enabling Single Sign-On (SSO) in Portainer using Casdoor as the authentication provider.

## Prerequisites

- Portainer is installed and running
- Casdoor is set up and configured
- Access to Portainer and Casdoor admin interfaces

## Steps

1. **Configure Casdoor**

   First, you need to set up an application in Casdoor for Portainer:

   a. Log in to your Casdoor admin interface.
   b. Go to the "Applications" section.
   c. Click "Add" to create a new application.
   d. Fill in the details:
      - Name: Portainer
      - Client ID: Generate a unique ID or use the one provided
      - Client Secret: Generate a secret or use the one provided
      - Redirect URL: `https://your-portainer-url/oauth/oidc/callback`
      - Sign-in URL: `https://your-portainer-url/#/auth`
   e. Save the application.

2. **Configure Portainer**

   Now, you'll need to enable and configure SSO in Portainer:

   a. Log in to your Portainer admin interface.
   b. Go to "Settings" > "Authentication".
   c. Scroll down to the "OAuth" section.
   d. Enable OAuth authentication.
   e. Select "Custom" as the OAuth provider.
   f. Fill in the following details:
      - Authentication URL: `https://your-casdoor-url/login/oauth/authorize`
      - Access Token URL: `https://your-casdoor-url/api/login/oauth/access_token`
      - Resource URL: `https://your-casdoor-url/api/userinfo`
      - Client ID: Use the Client ID from Casdoor
      - Client Secret: Use the Client Secret from Casdoor
      - Scopes: `openid profile email`
      - User Identifier: `preferred_username`
      - Redirect URL: `https://your-portainer-url/oauth/oidc/callback`
   g. Click "Save Settings".

3. **Map Casdoor Roles to Portainer Teams (Optional)**

   If you want to map Casdoor roles to Portainer teams:

   a. In Portainer, go to "Settings" > "Authentication".
   b. Scroll down to the "Team Membership" section.
   c. Enable "Automatically sync team memberships".
   d. Add mappings between Casdoor roles and Portainer teams.

4. **Test SSO**

   a. Log out of Portainer.
   b. Go to the Portainer login page.
   c. Click on the "Login with SSO" or similar button.
   d. You should be redirected to the Casdoor login page.
   e. Enter your Casdoor credentials.
   f. After successful authentication, you should be redirected back to Portainer and logged in.

## Troubleshooting

- If you encounter any issues, check the Portainer and Casdoor logs for error messages.
- Ensure that the URLs, Client ID, and Client Secret are correctly configured in both Casdoor and Portainer.
- Verify that the Redirect URL in Casdoor matches the one in Portainer.
- Make sure that the user you're trying to log in with has the necessary permissions in both Casdoor and Portainer.

By following these steps, you should now have SSO enabled in Portainer using Casdoor as the authentication provider. Users will be able to log in to Portainer using their Casdoor credentials, simplifying the authentication process and improving security.