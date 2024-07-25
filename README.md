# Rozetka Parse

### Showcase

<p align="center">
   <img src="./readme-assets/showcase.png" width="1024"><br>
</p>

### About project

The project consists in parsing products from the site [rozetka.com.ua](https://rozetka.com.ua "rozetka.com.ua") and displaying them on the page

### Requirements for launching the project

To start the project, you will need:

1. Docker >= **26.0.0**
2. Docker Compose >= **1.29.2**

### How to launch the project?

1. Clone a repository:

   `git clone https://github.com/shavlenkov/rozetka-parse.git`

2. Go to the rozetka-parse folder:

   `cd rozetka-parse`

3. Make an .env file from the .env.example file:

   `cp .env.example .env`

   `cp ./frontend/.env.example ./frontend/.env`

   `cp ./backend/.env.example ./backend/.env`

4. Update the following lines in the .env file:
   ```
   POSTGRES_PASSWORD=
   POSTGRES_USER=
   POSTGRES_DB=
   ```
   Update the following line in the backend/.env file:
   ```
   DATABASE_URL=postgresql://POSTGRES_USER:POSTGRES_PASSWORD@postgres:5432/POSTGRES_DB
   ```
   
5. Run containers using Docker Compose:

   `docker-compose up -d`

6. Open a browser and go to the address:
   [http://localhost:3000](http://localhost:3000 "http://localhost:3000")
