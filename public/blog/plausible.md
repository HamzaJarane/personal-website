[//]: # "published_at: 2025-04-13"
[//]: # "title: Plausible Analytics: A Simple, Privacy-Friendly Google Analytics Alternative"
[//]: # "categories: Server,Analytics,Privacy,OpenSource"
[//]: # "description: In today’s web ecosystem, analytics are essential—but the tools we use shouldn’t compromise user privacy or overwhelm us with complexity. That’s where **Plausible Analytics** comes in. It's a lightweight, open-source alternative to Google Analytics that focuses on simplicity and privacy. Whether you're a solo developer, a startup founder, or managing websites for clients, Plausible offers a fast, GDPR-compliant way to track what's really important."

<div class="markdown-image-center" style="margin-top:30px;margin-bottom:30px;">
  <img width="150" src="/content/plausible/logo.png" />
</div>

In today’s web ecosystem, analytics are essential—but the tools we use shouldn’t compromise user privacy or overwhelm us with complexity. That’s where **Plausible Analytics** comes in. It's a lightweight, open-source alternative to Google Analytics that focuses on simplicity and privacy. Whether you're a solo developer, a startup founder, or managing websites for clients, Plausible offers a fast, GDPR-compliant way to track what's really important.

## Why Use Plausible Analytics?

Traditional analytics tools like Google Analytics come with trade-offs—bloated scripts, invasive tracking, and complex dashboards filled with data you might not need. Plausible, by contrast, is built with a clear purpose: **to give you meaningful insights while respecting your users’ privacy**.

Unlike many platforms, Plausible doesn't rely on cookies, and it doesn’t track individual users across the web. This makes it compliant with privacy laws like **GDPR**, **CCPA**, and **PECR** right out of the box. Plus, since it’s open-source, you can host it yourself and retain full control over your data.

## Benefits of Using Plausible

Here are some of the most compelling reasons to consider Plausible for your analytics needs:

- **Privacy-first**: No cookies, no personal data collection.
- **Lightweight**: The tracking script is under 1 KB, ensuring faster page loads.
- **Open-source**: Self-host it and own your analytics.
- **Transparent and ethical**: Built by a small, independent team with no hidden agenda.
- **Real-time analytics**: See what’s happening on your site instantly.
- **Simple interface**: Focused dashboard with only the metrics that matter (like pageviews, bounce rates, top sources, etc.).
- **No dark patterns**: Your users aren’t tracked across sites, and there’s no need for intrusive cookie banners.

<div class="markdown-image-center" style="margin-top:30px;margin-bottom:30px;">
  <img width="800" src="/content/plausible/dashboard-overview.jpg" style="border-radius:10px;" />
</div>

## How to Install with Docker Compose

Self-hosting Plausible is straightforward using Docker Compose. Below is a simple setup to get you started:

### 1. Create a `docker-compose.yml` file:

```yaml
services:
  plausible_db:
    image: postgres:17-alpine
    hostname: plausible_db
    security_opt:
      - no-new-privileges:true
    volumes:
      - ./db:/var/lib/postgresql/data:rw
    environment:
      POSTGRES_DB: plausible_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    restart: on-failure:5

  plausible_events_db:
    image: clickhouse/clickhouse-server:24.12-alpine
    ulimits:
      nofile:
        soft: 262144
        hard: 262144
    hostname: plausible_events_db
    security_opt:
      - no-new-privileges:true
    user: 1026:100
    environment:
      CLICKHOUSE_SKIP_USER_SETUP: 1
    volumes:
      - ./data:/var/lib/clickhouse:rw
      - ./logs:/var/log/clickhouse-server:rw
    restart: on-failure:5

  plausible:
    image: ghcr.io/plausible/community-edition:latest
    container_name: Plausible
    command: sh -c "/entrypoint.sh db createdb && /entrypoint.sh db migrate && /entrypoint.sh run"
    hostname: plausible
    security_opt:
      - no-new-privileges:true
    ulimits:
      nofile:
        soft: 65535
        hard: 65535
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:8000/ || exit 1
    ports:
      - 8000:8000
    environment:
      BASE_URL: https://plausible.example.com
      MAILER_EMAIL: site@example.com
      SMTP_HOST_ADDR: smtp.gmail.com
      SMTP_HOST_PORT: 587
      SMTP_USER_NAME: youremail@example.com
      SMTP_USER_PWD: verysecurepassword
      DISABLE_REGISTRATION: false
      SECRET_KEY: random_64_characters
      TOTP_VAULT_KEY: random_base64_string
      DATABASE_URL: postgres://postgres:postgres@plausible_db:5432/plausible_db
    restart: on-failure:5
    depends_on:
      - plausible_db
      - plausible_events_db
```

### 2. Start the services:

```bash
docker compose up -d
```

### 3. Visit `http://localhost:8000` (or your domain) and finish setup via the web interface.

## Conclusion

Plausible is the analytics tool for those who care about speed, simplicity, and privacy. It offers all the essential metrics without the complexity or privacy baggage of traditional tools. Whether you’re running a blog, a SaaS platform, or managing multiple client sites, Plausible is a modern, ethical choice.
Hosting it with Docker Compose gives you full ownership of your data, with minimal effort. If you're looking to make a privacy-conscious switch without sacrificing functionality, give Plausible a try—you might be surprised how little you miss the alternatives.