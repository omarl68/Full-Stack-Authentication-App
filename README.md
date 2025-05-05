# Full-Stack Authentication App

A full-stack application with user authentication featuring separate backend and frontend codebases.

## Project Structure

```
├── backend/         # Node.js, Express, TypeScript, MongoDB
└── frontend/        # React, TypeScript
```

## Features

- User registration (signup)
- User authentication (login)
- Protected dashboard page
- JWT-based authentication
- MongoDB for data persistence

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Authenticate a user
- GET /api/users/me - Get current user info (protected route)