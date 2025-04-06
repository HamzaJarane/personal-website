[//]: # "published_at: 2025-01-22"
[//]: # "title: Pi-hole: The Ultimate Network Ad Blocker"
[//]: # "categories: Server,Networking,Security,OpenSource"
[//]: # "description: Pi-hole, a network-level ad blocker that acts as a DNS sinkhole, blocking ads for every device connected to your network. Unlike browser-based ad blockers, Pi-hole provides protection across your entire network, ensuring a cleaner, faster, and more private online experience."

<div class="markdown-image-center" style="margin-top:10px;margin-bottom:10px;">
  <img width="150" src="/content/pi-hole/logo.png" />
</div>

In today’s digital age, ads are everywhere. While they help support free content on the internet, they can also slow down your browsing, compromise privacy, and disrupt user experience. Enter [Pi-hole](https://pi-hole.net/), a network-level ad blocker that acts as a DNS sinkhole, blocking ads for every device connected to your network. Unlike browser-based ad blockers, Pi-hole provides protection across your entire network, ensuring a cleaner, faster, and more private online experience.

## Why Use Pi-hole?

Pi-hole offers several advantages that make it an essential tool for anyone looking to optimize their network:

1. **Network-Wide Ad Blocking**: Block ads on every device, from smartphones and tablets to smart TVs and IoT devices.
2. **Enhanced Privacy**: Prevent tracking scripts and malicious domains from collecting your data.
3. **Improved Network Performance**: By blocking ads at the DNS level, Pi-hole reduces bandwidth consumption and speeds up page loading times.
4. **Customizable and Open Source**: Pi-hole is open-source and highly customizable, giving you full control over its functionality.
5. **Device Compatibility**: Works with any device that connects to your network without needing additional configuration.

## Benefits of Using Pi-hole

- **No More Ads**: Eliminate intrusive banners, pop-ups, and video ads.
- **Reduced Data Usage**: Save bandwidth by preventing ads from downloading.
- **Parental Control**: Block inappropriate or harmful websites for family safety.
- **Centralized Management**: Manage DNS and ad-blocking settings for your entire network from a single interface.

## How to Install Pi-hole with Docker

Installing Pi-hole on Docker is straightforward and ensures an isolated, manageable setup. Follow these steps to get started:

### Prerequisites
- A machine with Docker installed (e.g., Raspberry Pi, Linux server, or any Docker-compatible device).
- Basic knowledge of terminal commands.

### Installation Steps

1. **Pull the Pi-hole Docker Image**:
   ```bash
   docker pull pihole/pihole:latest
   ```

2. **Create a Docker Network (Optional)**:
   To isolate Pi-hole, you can create a custom Docker network:
   ```bash
   docker network create pihole_network
   ```

3. **Run the Pi-hole Container**:

   Using docker command:
   ```bash
   docker run -d \
     --name pihole \
     --net=pihole_network \
     -e TZ="<Your_Timezone>" \
     -e WEBPASSWORD="<Your_Admin_Password>" \
     -v pihole_data:/etc/pihole \
     -v dnsmasq_data:/etc/dnsmasq.d \
     -p 80:80 \
     -p 53:53/tcp \
     -p 53:53/udp \
     --restart=unless-stopped \
     pihole/pihole:latest
   ```

   Using docker-compose configuration file:
   ```yml
   # More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/
   services:
   pihole:
      container_name: pihole
      image: pihole/pihole:latest
      # For DHCP it is recommended to remove these ports and instead add: network_mode: "host"
      ports:
         - "53:53/tcp"
         - "53:53/udp"
         - "67:67/udp" # Only required if you are using Pi-hole as your DHCP server
         - "80:80/tcp"
      environment:
         TZ: 'America/Chicago'
         # WEBPASSWORD: 'set a secure password here or it will be random'
      # Volumes store your data between container upgrades
      volumes:
         - './etc-pihole:/etc/pihole'
         - './etc-dnsmasq.d:/etc/dnsmasq.d'
      #   https://github.com/pi-hole/docker-pi-hole#note-on-capabilities
      cap_add:
         - NET_ADMIN # Required if you are using Pi-hole as your DHCP server, else not needed
      restart: unless-stopped
   ```

   Replace `<Your_Timezone>` with your local timezone (e.g., `Morocco/Casablanca`) and `<Your_Admin_Password>` with a secure password.

4. **Verify the Installation**:
   After a few moments, visit `http://<Your_Server_IP>/admin` in your browser to access the Pi-hole dashboard. Log in using the admin password you set.

<div class="markdown-image-center">
  <img width="800" src="/content/pi-hole/dashboard.png" />
</div>

## How to Configure Pi-hole on Your Router

To make Pi-hole work for all devices on your network, configure your router to use Pi-hole as the primary DNS server:

1. **Access Your Router Settings**:
   - Open a browser and enter your router’s IP address (commonly `192.168.1.1` or `192.168.0.1`).
   - Log in using your router’s credentials.

2. **Locate the DNS Settings**:
   - Navigate to the DHCP or LAN settings section (varies by router).

3. **Set Pi-hole as the DNS Server**:
   - Replace the primary DNS server with your Pi-hole’s IP address (e.g., `192.168.1.2`).
   - Leave the secondary DNS server blank or set it to a fallback DNS (e.g., `1.1.1.1` for Cloudflare).

4. **Save and Restart**:
   - Save the changes and restart your router to apply the new settings.

5. **Verify the Configuration**:
   - On any device connected to your network, visit the Pi-hole dashboard and check the query log to ensure DNS requests are being routed through Pi-hole.

<div class="markdown-image-center">
  <img width="800" src="/content/pi-hole/query-log.png" />
</div>

## Conclusion

Pi-hole is a powerful tool for anyone looking to block ads, enhance privacy, and improve network performance. By combining it with Docker, you can set up a robust and manageable ad-blocking solution in no time. Once configured with your router, Pi-hole provides a seamless ad-free experience across all devices on your network. Try it today and take control of your internet experience!

