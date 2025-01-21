[//]: # "title: WireGuard Easy (wg-easy): A Simple WireGuard VPN Server Web UI"
[//]: # "categories: Server,VPN,Networking,Security,OpenSource"
[//]: # "description: WireGuard Easy (wg-easy) is a user-friendly web interface for managing a WireGuard VPN server. This tool simplifies the process of setting up and managing a WireGuard VPN server through an intuitive web UI, making it accessible even for users without extensive networking knowledge."

# WireGuard Easy (wg-easy): A Simple WireGuard VPN Server Web UI

<div class="markdown-image-center" style="margin-top:40px;margin-bottom:40px;">
  <img width="600" src="/content/wireguard/wireguard.svg" />
</div>

WireGuard Easy (wg-easy) is a user-friendly web interface for managing a WireGuard VPN server. This tool simplifies the process of setting up and managing a WireGuard VPN server through an intuitive web UI, making it accessible even for users without extensive networking knowledge.



## What is WireGuard Easy?

WireGuard Easy is an all-in-one solution that combines the robust capabilities of WireGuard with an easy-to-use web interface. It simplifies the process of installing and managing VPN clients, making it accessible for both beginners and seasoned IT professionals. Whether you’re managing a small office network or a global team, WireGuard Easy ensures secure communication with minimal effort.



## Key Features

WireGuard Easy comes packed with features that make it a standout choice for VPN management:

1. **User-Friendly Web UI**: Manage clients effortlessly with a graphical interface.
2. **Client Management**: List, create, edit, enable, or disable clients with ease.
3. **QR Code Generation**: Share VPN configurations securely using QR codes.
4. **Traffic Stats and Analytics**: Monitor client connectivity and data transfer.
5. **Light/Dark Mode**: Automatic theme switching to suit your preferences.
6. **Multilingual Support**: Available in various languages, making it globally accessible.
7. **Prometheus Metrics**: Integration for advanced monitoring with tools like Grafana.
8. **One-Time Links and Expiry**: Ensure secure and time-bound sharing of VPN credentials.

<div class="markdown-image-center" style="margin-top:40px;margin-bottom:40px;">
  <img width="600" src="/content/wireguard/screenshot.png" />
</div>



## System Requirements

To deploy WireGuard Easy, ensure the following:

- A Linux host with a modern kernel supporting WireGuard.
- Docker installed on the host.



## Installation Guide

### Step 1: Install Docker

Begin by installing Docker on your system:

```bash
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker $(whoami)
exit
```

Log back into your session to apply changes.

### Step 3: Generate password:

Generating bcrypt password hashes with Docker is simple. Here’s how:

#### Generate Hash with a Password

Run the following command, replacing `YOUR_PASSWORD` with your desired password:

```sh
docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw 'YOUR_PASSWORD'
PASSWORD_HASH='$2b$12$coPqCsPtcFO.Ab99xylBNOW4.Iu7OOA2/ZIboHN6/oyxca3MWo7fW' # Example Output
```

#### Prompt for Password Input

If you prefer not to include the password in the command, `wg-password` will prompt you for one:

```sh
docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw
Enter your password:      # Hidden input
PASSWORD_HASH='$2b$12$coPqCsPtcFO.Ab99xylBNOW4.Iu7OOA2/ZIboHN6/oyxca3MWo7fW'
```

#### Important Notes

#### Quoting Passwords

Always enclose your password in **single quotes** when running the `docker run` command to avoid issues:

```bash
# Incorrect Examples
echo $2b$12$coPqCsPtcF      # Misinterpreted

echo "$2b$12$coPqCsPtcF"  # Misinterpreted

# Correct Example
echo '$2b$12$coPqCsPtcF'    # Properly Interpreted
$2b$12$coPqCsPtcF
```

#### Using Password Hashes in `docker-compose.yml`

When using a generated password hash in `docker-compose.yml`, replace each `$` in the hash with two `$$`. For example:

```yaml
- PASSWORD_HASH=$$2y$$10$$hBCoykrB95WSzuV4fafBzOHWKu9sbyVa34GJr8VV5R/pIelfEMYyG
```

This modification ensures the YAML file correctly parses the hash. The above example corresponds to the password `foobar123`, hashed using the command:

```bash
docker run ghcr.io/wg-easy/wg-easy wgpw 'foobar123'
```

### Step 2: Deploy WireGuard Easy

Run the following command to set up WireGuard Easy:

```bash
docker run --detach \
  --name wg-easy \
  --env WG_HOST=<YOUR_SERVER_IP> \
  --env PASSWORD_HASH='<YOUR_ADMIN_PASSWORD_HASH>' \
  --env PORT=51821 \
  --env WG_PORT=51820 \
  --volume ~/.wg-easy:/etc/wireguard \
  --publish 51820:51820/udp \
  --publish 51821:51821/tcp \
  --cap-add NET_ADMIN \
  --cap-add SYS_MODULE \
  --sysctl 'net.ipv4.conf.all.src_valid_mark=1' \
  --sysctl 'net.ipv4.ip_forward=1' \
  --restart unless-stopped \
  ghcr.io/wg-easy/wg-easy
```

Or use the docker-compose configuration:

```yaml
volumes:
  etc_wireguard:

services:
  wg-easy:
    environment:
      # Change Language:
      # (Supports: en, ua, ru, tr, no, pl, fr, de, ca, es, ko, vi, nl, is, pt, chs, cht, it, th, hi, ja, si)
      - LANG=en
      # ⚠️ Required:
      # Change this to your host's public address
      - WG_HOST=raspberrypi.local

      # Optional:
      # - PASSWORD_HASH=$$2y$$10$$hBCoykrB95WSzuV4fafBzOHWKu9sbyVa34GJr8VV5R/pIelfEMYyG # (needs double $$, hash of 'foobar123'; see "How_to_generate_an_bcrypt_hash.md" for generate the hash)
      # - PORT=51821
      # - WG_PORT=51820
      # - WG_CONFIG_PORT=92820
      # - WG_DEFAULT_ADDRESS=10.8.0.x
      # - WG_DEFAULT_DNS=1.1.1.1
      # - WG_MTU=1420
      # - WG_ALLOWED_IPS=192.168.15.0/24, 10.0.1.0/24
      # - WG_PERSISTENT_KEEPALIVE=25
      # - WG_PRE_UP=echo "Pre Up" > /etc/wireguard/pre-up.txt
      # - WG_POST_UP=echo "Post Up" > /etc/wireguard/post-up.txt
      # - WG_PRE_DOWN=echo "Pre Down" > /etc/wireguard/pre-down.txt
      # - WG_POST_DOWN=echo "Post Down" > /etc/wireguard/post-down.txt
      # - UI_TRAFFIC_STATS=true
      # - UI_CHART_TYPE=0 # (0 Charts disabled, 1 # Line chart, 2 # Area chart, 3 # Bar chart)
      # - WG_ENABLE_ONE_TIME_LINKS=true
      # - UI_ENABLE_SORT_CLIENTS=true
      # - WG_ENABLE_EXPIRES_TIME=true
      # - ENABLE_PROMETHEUS_METRICS=false
      # - PROMETHEUS_METRICS_PASSWORD=$$2a$$12$$vkvKpeEAHD78gasyawIod.1leBMKg8sBwKW.pQyNsq78bXV3INf2G # (needs double $$, hash of 'prometheus_password'; see "How_to_generate_an_bcrypt_hash.md" for generate the hash)

    image: ghcr.io/wg-easy/wg-easy
    container_name: wg-easy
    volumes:
      - etc_wireguard:/etc/wireguard
    ports:
      - "51820:51820/udp"
      - "51821:51821/tcp"
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
      # - NET_RAW # ⚠️ Uncomment if using Podman
    sysctls:
      - net.ipv4.ip_forward=1
      - net.ipv4.conf.all.src_valid_mark=1
```

- Replace `<YOUR_SERVER_IP>` with your server’s IP or dynamic DNS hostname.
- Replace `<YOUR_ADMIN_PASSWORD_HASH>` with the generated password.

The web interface will be available at `http://<YOUR_SERVER_IP>:51821`.

<div class="markdown-image-center" style="margin-top:40px;margin-bottom:40px;">
  <img width="600" src="/content/wireguard/wireguard.png" />
</div>

## Advanced Features

WireGuard Easy provides a host of configuration options via environment variables. These include setting default DNS servers, customizing IP ranges, enabling traffic stats, and more. For a detailed list of options, refer to the [official documentation](https://github.com/wg-easy/wg-easy).

### Example Use Cases

1. **Integrating with Pi-Hole**: Enhance privacy by routing all VPN traffic through Pi-Hole.
2. **Securing with Nginx and SSL**: Use an Nginx reverse proxy with SSL for secure web access.

## Updating WireGuard Easy

Keeping your deployment updated is simple. Stop the container, remove it, and pull the latest image:

```bash
docker stop wg-easy
docker rm wg-easy
docker pull ghcr.io/wg-easy/wg-easy
```

Then, re-run the `docker run` command with your configuration.

## Why Choose WireGuard Easy?

WireGuard Easy stands out for its simplicity, reliability, and robust feature set. Whether you're an individual setting up a personal VPN or an organization managing multiple clients, WireGuard Easy ensures a hassle-free experience.

## Conclusion

WireGuard Easy democratizes VPN setup by combining the powerful WireGuard protocol with an intuitive interface. Its feature-rich design and straightforward installation process make it a top choice for VPN enthusiasts and IT professionals alike. Explore the [WireGuard Easy GitHub repository](https://github.com/wg-easy/wg-easy) to get started and elevate your VPN experience today.