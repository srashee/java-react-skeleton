# Product Management System

A minimal skeleton project with Spring Boot backend and React frontend for managing products.

## Project Structure

```
java-react/
├── backend/                 # Spring Boot application
├── frontend/               # React application
├── docker-compose.yml      # PostgreSQL database setup
└── README.md              # This file
```

## Prerequisites

- Java 21 or higher
- Node.js 16+ and pnpm
- Docker and Docker Compose

## Quick Start

### 1. Start the Database and Backend

```bash
# Start PostgreSQL and Spring Boot backend
docker-compose up -d
```

The backend will be available at: http://localhost:8080

### 2. Start the Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

The frontend will be available at: http://localhost:5173

## API Endpoints

- `GET /products` - Get all products (3 sample products are automatically loaded)

## Development

### Backend
- Spring Boot 3.2.x
- Spring JDBC
- PostgreSQL database
- Runs on port 8080
- Java 21

### Frontend
- React 18
- Vite build tool
- Runs on port 5173
- Displays list of products (read-only)

### Database
- PostgreSQL 13
- Runs on port 5432
- Database: `productdb`
- Username: `postgres`
- Password: `password`
- Automatically populated with 3 sample products on startup

## Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (clears database)
docker-compose down -v
```
