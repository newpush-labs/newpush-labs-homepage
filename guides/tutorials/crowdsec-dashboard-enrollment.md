---
order: 1
title: CrowdSec Enrollment 
---

# CrowdSec

CrowdSec is an open-source and collaborative security engine designed to protect servers, services, containers, and applications from malicious activities. It works by analyzing logs and generating security decisions based on observed behavior.

CrowdSec integrated as a middleware in Traefik to provide real-time threat detection and mitigation. This integration allows Traefik to automatically block malicious IP addresses and protect your applications from various types of attacks, such as brute force attempts, web scraping, and DDoS attacks. 

## Enrollment 

CrowdSec is deployed by default with your NewPush Lab, providing an additional layer of security for your environment. If you want to access and view the CrowdSec dashboard on the CrowdSec webpage, which offers detailed insights into your security events and metrics, you'll need to enroll your instance. 

### Get the enrollment key

To enroll your CrowdSec instance and access the dashboard, follow these steps:

1. **Create a CrowdSec Account**

   - Go to the [CrowdSec Console website](https://app.crowdsec.net/).
   - Sign up for a new account or log in if you already have one.

2. **Get the Enrollment Key**

   - Once logged in, navigate to "Security Engine" in the left sidebar.
   - Click on "Engines" in the submenu.
   - Copy the enrollment key that is displayed on the bottom of the page. It should look something like this: `clwvs1j5u0007l208s7pz25p1`

3. **Enroll Your Instance**

   Now that you have the enrollment key, you can use it to enroll your CrowdSec instance:

   - Open a terminal or SSH into your NewPush Lab environment.
   - Run the following command, replacing `<your_enrollment_key>` with the key you copied:

     ```sh
     docker exec -it crowdsec cscli console enroll -e <your_enrollment_key>
     ```

     For example, if your key is `clwvs1j5u0007l208s7pz25p1`, the command would be:

     ```sh
     docker exec -it crowdsec cscli console enroll -e clwvs1j5u0007l208s7pz25p1
     ```

 
4. **Verify Enrollment**

   After running the command, you should see a confirmation message. You can now go back to the CrowdSec Console website and refresh the page. Your instance should appear in the list of enrolled engines.

   Once enrolled, you'll be able to view detailed security events, metrics, and insights for your NewPush Lab environment directly on the CrowdSec Console website.

   More information about the enrollment can be found [here](https://docs.crowdsec.net/u/getting_started/post_installation/console).


## Managing Decisions

CrowdSec allows you to manage decisions (such as IP bans) directly from the command line. When running CrowdSec in a Docker container, you can use the following commands to list and remove decisions.

### Listing Decisions

To list all current decisions:

```sh
docker exec -it crowdsec cscli decisions list
```

### Removing Decisions

To remove a specific decision:

```sh
docker exec -it crowdsec cscli decisions delete --ip <IP_ADDRESS>
```

Replace `<IP_ADDRESS>` with the IP address of the decision you want to remove.

To remove all decisions:

```sh
docker exec -it crowdsec cscli decisions delete --all
```

:::info
Be cautious when removing decisions, especially when using the `--all` flag, as this will remove all active bans and other security decisions.
:::