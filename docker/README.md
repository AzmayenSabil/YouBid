# Project Setup and Docker Commands

- **Frontend:** React application running on port 5173.
- **Backend:** Node.js and Express application running on port 3000.
- **Database:** PostgreSQL for data storage and management.

## Docker Commands

### Start and Build Containers

#### Start Containers
To start all containers defined in your `docker-compose.yml` file:
```bash
docker compose up
```

#### Build Containers
To build the Docker images for all services defined in your `docker-compose.yml` file:
```bash
docker compose build
```

#### Stopping and Removing Containers
To stop all running containers without removing them:
```bash
docker compose down
```
To remove all stopped containers, networks, and images:
```bash
docker system prune -a
```

#### Listing Containers and Images
```bash
docker ps -a
```

#### Viewing Logs
View Logs of a Specific Container
To view the logs of a specific container (e.g., frontend_c):
```bash
docker compose logs frontend
```
View Logs of All Containers
To view the logs of all containers:
```bash
docker compose logs
```