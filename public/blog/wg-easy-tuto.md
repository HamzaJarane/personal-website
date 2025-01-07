[//]: # "title: WireGuard Easy (wg-easy): A Simple WireGuard VPN Server Web UI"
[//]: # "categories: VPN,Networking,Security"
[//]: # "description: WireGuard Easy (wg-easy) is a user-friendly web interface for managing a WireGuard VPN server. This tool simplifies the process of setting up and managing a WireGuard VPN server through an intuitive web UI, making it accessible even for users without extensive networking knowledge."

# WireGuard Easy (wg-easy): A Simple WireGuard VPN Server Web UI

WireGuard Easy (wg-easy) is a user-friendly web interface for managing a WireGuard VPN server. This tool simplifies the process of setting up and managing a WireGuard VPN server through an intuitive web UI, making it accessible even for users without extensive networking knowledge.

## Features

- Simple web-based interface for managing WireGuard VPN
- Easy client configuration via QR codes
- One-click client config generation
- Automatic IP management
- Docker-based deployment
- Password-protected admin interface
- Real-time connected clients monitoring

## Prerequisites

Before installing wg-easy, ensure you have:
- A server running Linux
- Docker and Docker Compose installed
- Port 51820/UDP open on your firewall
- Port 51821/TCP open for the web UI (optional, can be changed)

## Installation

### Using Docker Compose

Create a `docker-compose.yml` file with the following content:

```yaml
version: "3.8"
services:
  wg-easy:
    environment:
      - WG_HOST=YOUR_SERVER_IP
      - PASSWORD=YOUR_ADMIN_PASSWORD
    container_name: wg-easy
    image: weejewel/wg-easy
    volumes:
      - .:/etc/wireguard
    ports:
      - "51820:51820/udp"
      - "51821:51821/tcp"
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.ip_forward=1
      - net.ipv4.conf.all.src_valid_mark=1
```

Replace `YOUR_SERVER_IP` with your server's public IP address and `YOUR_ADMIN_PASSWORD` with a secure password of your choice.

### Starting the Server

1. Save the docker-compose file in a directory
2. Open terminal and navigate to that directory
3. Run the following command:
```bash
docker-compose up -d
```

## Accessing the Web Interface

Once the container is running, access the web UI at:
```
http://YOUR_SERVER_IP:51821
```

## Managing Clients

### Adding a New Client

1. Log in to the web interface using your admin password
2. Click the "Add Client" button
3. Enter a name for the client
4. Click "Save"

The interface will generate:
- A downloadable configuration file
- A QR code for mobile devices
- The client's private and public keys

### Connecting Clients

#### Mobile Devices:
1. Install the WireGuard app from your device's app store
2. Scan the QR code from the web interface
3. Enable the VPN connection

#### Desktop Devices:
1. Install the WireGuard client for your OS
2. Download the configuration file from the web interface
3. Import the configuration file into the WireGuard client
4. Enable the VPN connection

## Advanced Configuration

### Environment Variables

- `WG_HOST`: Your server's public IP address
- `PASSWORD`: Admin password for the web UI
- `WG_PORT`: WireGuard port (default: 51820)
- `WG_DEFAULT_ADDRESS`: VPN subnet (default: 10.8.0.x)
- `WG_DEFAULT_DNS`: DNS server (default: 1.1.1.1)
- `WG_MTU`: MTU setting (default: 1420)
- `WG_PERSISTENT_KEEPALIVE`: Keep-alive interval (default: 0)
- `WG_POST_UP`: Post-up script (optional)
- `WG_POST_DOWN`: Post-down script (optional)

### Custom DNS Settings

To use custom DNS servers, modify the `WG_DEFAULT_DNS` environment variable:
```yaml
environment:
  - WG_DEFAULT_DNS=8.8.8.8,8.8.4.4
```

## Security Considerations

1. Always use a strong admin password
2. Keep your Docker installation updated
3. Regularly update the wg-easy container
4. Use a firewall to restrict access to the web UI
5. Consider using HTTPS for the web interface

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Check if the container is running
   - Verify firewall settings
   - Ensure ports are properly mapped

2. **Client Can't Connect**
   - Verify the server's public IP is correct
   - Check client configuration
   - Ensure UDP port 51820 is open

3. **Web UI Not Accessible**
   - Check if TCP port 51821 is open
   - Verify the container is running
   - Check Docker logs for errors

### Viewing Logs

To view container logs:
```bash
docker logs wg-easy
```

## Maintenance

### Updating the Container

```bash
docker-compose pull
docker-compose up -d
```

### Backup

The WireGuard configuration is stored in the mounted volume. Back up the entire directory:
```bash
cp -r /path/to/wireguard/config /backup/location
```

## Conclusion

WireGuard Easy provides a simple yet powerful way to manage your WireGuard VPN server. Its web interface makes VPN management accessible to users of all technical levels while maintaining the security and performance benefits of WireGuard.

For more information and support, visit the [official GitHub repository](https://github.com/WeeJeWel/wg-easy).