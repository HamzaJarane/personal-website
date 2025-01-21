[//]: # "title: Nginx Proxy Manager: Web Server Management"
[//]: # "categories: Server,Free & OpenSource"
[//]: # "description: Managing web servers and configuring proxies can be a daunting task, especially for those without deep technical knowledge. Nginx Proxy Manager (NPM) simplifies this process by offering a user-friendly interface to configure and manage reverse proxies, SSL certificates, and redirections. This blog post explores what Nginx Proxy Manager is, its features, and how to get started with it"

# Simplifying Web Server Management with Nginx Proxy Manager

<div class="markdown-image-center" style="margin-top:40px;margin-bottom:40px;">
   <img width="200" src="/content/nginx-proxy-manager/logo.svg" />
</div>

Managing web servers and configuring proxies can be a daunting task, especially for those without deep technical knowledge. Nginx Proxy Manager (NPM) simplifies this process by offering a user-friendly interface to configure and manage reverse proxies, SSL certificates, and redirections. This blog post explores what Nginx Proxy Manager is, its features, and how to get started with it.

## What is Nginx Proxy Manager?

Nginx Proxy Manager is an open-source tool that provides a graphical user interface (GUI) for managing Nginx web servers. It is designed for ease of use, allowing developers and non-developers alike to manage reverse proxies, configure SSL certificates, and route traffic to different services without needing to dive into complex Nginx configuration files.

<div class="markdown-image-center">
    <img width="800" src="/content/nginx-proxy-manager/proxy-hosts.png" />
</div>

## Key Features of Nginx Proxy Manager

### 1. **User-Friendly Interface**
   - The intuitive web interface makes it easy to set up and manage proxies.
   - Even users with minimal technical expertise can configure advanced server settings.

### 2. **Reverse Proxy Management**
   - Route incoming traffic to different backend services or applications.
   - Supports hostname and IP-based routing.

### 3. **SSL Certificate Management**
   - Automated SSL certificate provisioning using Let’s Encrypt.
   - Ability to import custom SSL certificates.
   - Ensures secure connections to your services.

### 4. **Access Control**
   - Protect your services with basic authentication.
   - Restrict access based on IP addresses or other criteria.

### 5. **Custom Redirections**
   - Easily set up URL redirections.
   - Supports both temporary (302) and permanent (301) redirects.

### 6. **Docker Support**
   - Nginx Proxy Manager can be deployed as a Docker container, making it simple to integrate into existing Docker setups.

<div class="markdown-image-center">
   <img width="800" src="/content/nginx-proxy-manager/dashboard.png" />
</div>

## Why Use Nginx Proxy Manager?

Nginx Proxy Manager streamlines server management tasks that are typically complex and time-consuming. Here are some reasons to consider using it:

- **Ease of Use**: No need to edit configuration files manually.
- **Time-Saving**: Quickly set up and manage proxies and certificates.
- **Security**: Built-in support for SSL certificates ensures secure communication.
- **Versatility**: Suitable for managing multiple domains and services.

## Getting Started with Nginx Proxy Manager

### Prerequisites

- A server or virtual machine with Docker and Docker Compose installed.
- Basic knowledge of how to use Docker.

### Installation

1. **Set Up Docker Compose File**:
   Create a `docker-compose.yml` file with the following content:

   ```yaml
   services:
   app:
      image: 'docker.io/jc21/nginx-proxy-manager:latest'
      restart: unless-stopped
      ports:
         - '80:80'
         - '81:81'
         - '443:443'
      volumes:
         - ./data:/data
         - ./letsencrypt:/etc/letsencrypt
   ```

2. **Run Docker Compose**:
   In the same directory as your `docker-compose.yml`, run:
   ```bash
   docker-compose up -d
   ```

3. **Access the Web Interface**:
   Open your browser and navigate to `http://<server-ip>:81`. The default login credentials are:
   - **Username**: admin@example.com
   - **Password**: changeme

4. **Change Default Credentials**:
   After logging in, update the default credentials to secure your Nginx Proxy Manager instance.

<div class="markdown-image-center">
   <img width="800" src="/content/nginx-proxy-manager/proxy-hosts-add.png" />
</div>

### Setting Up a Proxy Host

1. Click on "Proxy Hosts" in the dashboard.
2. Click the "+ Add Proxy Host" button.
3. Fill in the details:
   - **Domain Names**: Enter the domain name(s) for the proxy.
   - **Forward Hostname/IP**: Enter the IP address or hostname of the backend service.
   - **Forward Port**: Specify the port of the backend service.
   - **SSL**: Enable SSL and request a Let’s Encrypt certificate if needed.
4. Save the configuration.

## Conclusion

Nginx Proxy Manager is a powerful yet simple tool for managing web servers and proxies. Whether you are a developer hosting multiple applications or a small business looking to secure your web services, NPM provides an accessible and efficient solution. With its user-friendly interface and robust feature set, Nginx Proxy Manager removes much of the complexity associated with server management, letting you focus on your core tasks.

