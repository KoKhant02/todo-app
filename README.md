# To-Do List App

A simple To-Do List web application built with React and Node.js. The backend is powered by Express and MongoDB, and the frontend uses Vite and React for a fast, modern web experience.

## Features

- Add, delete, and view tasks
- Responsive design that works well on both desktop and mobile devices
- Backend with RESTful API to manage tasks
- Frontend with modern, user-friendly UI

## Technologies Used

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, MongoDB
- **Containerization**: Docker, Docker Compose
- **Environment Variables**: `VITE_API_URL` for backend API URL

## Prerequisites

Before begin, ensure developer have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (via Docker container)

## Installation

To get started with the project:

1. Clone this repository:
   ```bash
   git clone https://github.com/KoKhant02/todo-app.git
   cd todo-app
   ```

2. Build and run the app using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. The application will be available at:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## Environment Variables

Create a `.env` file in the `backend` directory to configure the MongoDB connection:

```env
MONGO_URI=mongodb://mongodb:27017/todoApp
```

For the frontend, add the following environment variable to `frontend/.env`:

```env
VITE_API_URL=http://node-backend:5000
```

## Usage

- To view the app in browser, visit `http://localhost:5173`.
- To add a new task, type into the input box and click the "Add" button.
- To delete a task, click the ❌ button next to the task.

## Docker Setup

This project is containerized using Docker. Docker Compose is used to define and run multi-container Docker applications.

- The `mongodb` container runs MongoDB.
- The `node-backend` container runs the backend API using Express and MongoDB.
- The `react-frontend` container serves the React app.

### Docker Compose Commands

- Build and run the containers:
  ```bash
  docker-compose up --build
  ```

- Stop the containers:
  ```bash
  docker-compose down
  ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

---

This README file includes sections on project description, installation, usage, Docker setup, and contribution guidelines. Feel free to modify it according to your needs.
