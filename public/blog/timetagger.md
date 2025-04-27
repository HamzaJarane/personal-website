[//]: # "published_at: 2025-04-27"
[//]: # "title: TimeTagger: A Smart Way to Track Your Time"
[//]: # "categories: Server,OpenSource,Time Tracker,Easy"
[//]: # "description: TimeTagger is an open-source, tag-based time tracking application designed for freelancers, remote workers, and productivity enthusiasts. Unlike traditional time trackers that rely on rigid project structures, TimeTagger offers a flexible tagging system, allowing users to log activities with custom labels. This approach provides a more intuitive and adaptable way to monitor how time is spent across various tasks and projects."

<div class="markdown-image-center" style="margin-top:60px;margin-bottom:30px;">
  <img width="500" src="/content/timetagger/logo.svg" />
</div>

[TimeTagger](https://timetagger.app/) is an open-source, tag-based time tracking application designed for freelancers, remote workers, and productivity enthusiasts. Unlike traditional time trackers that rely on rigid project structures, TimeTagger offers a flexible tagging system, allowing users to log activities with custom labels. This approach provides a more intuitive and adaptable way to monitor how time is spent across various tasks and projects.

## Why Use TimeTagger?

TimeTagger stands out in the crowded field of time tracking tools due to its unique combination of features:

- **Tag-Based Tracking**: Instead of confining users to predefined projects, TimeTagger allows for the use of customizable tags, enabling a more granular and personalized tracking experience. 

- **Cross-Platform Accessibility**: The application is web-based and responsive, ensuring a consistent user experience across desktops, tablets, and smartphones. 

- **Offline Functionality**: TimeTagger can operate without an internet connection, syncing data automatically once reconnected.

- **Privacy-Centric Design**: With no reliance on third-party services and no tracking cookies, TimeTagger prioritizes user privacy.

- **Open Source and Self-Hosting**: Users have the option to self-host TimeTagger, providing full control over their data and the application's deployment.

<div class="markdown-image-center" style="margin-top:30px;margin-bottom:30px;">
  <img width="800" src="/content/timetagger/index.png" style="border-radius:10px;" />
</div>

## Benefits of Using TimeTagger

Implementing TimeTagger into your workflow offers several advantages:

- **Enhanced Productivity**: By visualizing time allocation through tags, users can identify time sinks and optimize their schedules accordingly.

- **Accurate Billing**: Freelancers and consultants can generate precise reports for clients, ensuring transparency and fair compensation.

- **Data-Driven Insights**: The application's reporting features allow users to analyze patterns over days, weeks, or months, facilitating informed decision-making. 

- **Accountability**: Regular tracking fosters a sense of responsibility, helping users stay committed to their goals and deadlines.

- **Customization and Flexibility**: The open-source nature of TimeTagger means users can tailor the application to fit their specific needs, from interface tweaks to backend modifications. 

<div class="markdown-image-center" style="margin-top:30px;margin-bottom:30px;">
  <img width="800" src="/content/timetagger/new.png" style="border-radius:10px;" />
</div>

## How to Install TimeTagger with Docker Compose

Setting up TimeTagger using Docker Compose is straightforward. Below is a basic `docker-compose.yml` configuration:


```yaml
services:
  timetagger:
    image: ghcr.io/almarklein/timetagger
    ports:
      - "80:80"
    volumes:
      - ./_timetagger:/root/_timetagger
    environment:
      - TIMETAGGER_BIND=0.0.0.0:80
      - TIMETAGGER_DATADIR=/root/_timetagger
      - TIMETAGGER_LOG_LEVEL=info
      - TIMETAGGER_CREDENTIALS=your_username:your_bcrypt_hashed_password
```

**Steps:**

1. **Generate Credentials**: Use the [TimeTagger Credential Generator](https://timetagger.app/cred) to create a bcrypt-hashed password.

2. **Replace Placeholders**: In the `docker-compose.yml` file, replace `your_username` and `your_bcrypt_hashed_password` with your actual username and the generated hash.

3. **Start the Container**: Navigate to the directory containing your `docker-compose.yml` file and run:

   ```bash
   docker-compose up -d
   ```

4. **Access TimeTagger**: Once the container is running, open your browser and go to `http://localhost` to start using TimeTagger.

<div class="markdown-image-center" style="margin-top:30px;margin-bottom:30px;">
  <img width="800" src="/content/timetagger/edit.png" style="border-radius:10px;" />
</div>

## Conclusion

TimeTagger offers a flexible, privacy-focused solution for time tracking, catering to the needs of freelancers, remote workers, and anyone seeking to gain better insights into their time management. Its open-source nature and ease of deployment via Docker Compose make it an accessible tool for both individuals and organizations. By adopting TimeTagger, users can take control of their time, enhance productivity, and make informed decisions based on accurate data.