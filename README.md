# Realtime Coaching Feed Application

A small realtime coaching feed application built using Node.js, Express, MongoDB, Redis, Socket.IO, and Next.js.

This project demonstrates:

* REST API development
* Realtime communication
* Redis caching
* Database integration
* Scalable architecture
* Error handling
* Frontend realtime updates
* Production-oriented backend structure

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Redis
* Socket.IO
* Zod Validation
* Helmet
* Express Rate Limit

## Frontend

* Next.js
* Axios
* Socket.IO Client

---

# Features

## Backend Features

* Create Feed API
* Get Feed API
* Redis caching for GET requests
* Realtime Socket.IO updates
* Global error handling
* Validation middleware
* Security middleware
* Rate limiting
* Modular folder structure

## Frontend Features

* Realtime feed updates without refresh
* Admin page to create feeds
* API error handling
* Socket reconnect handling
* Loading states
* Duplicate socket event prevention

---

# Project Structure

## Backend

```bash
backend/
├── src/
│   ├── config/
│   ├── middleware/
│   ├── modules/
│   │   └── feed/
│   ├── socket/
│   ├── app.js
│   └── server.js
├── .env
└── package.json
```

---

## Frontend

```bash
frontend/
├── app/
│   ├── page.js
│   └── admin/page.js
├── lib/
├── services/
├── .env.local
└── package.json
```

---

# Backend Setup

## 1. Clone Repository

```bash
git clone <https://github.com/Jumaniv/realtime-feed-app.git>
```

---

## 2. Move to Backend

```bash
cd backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create Environment File

Create `.env`

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/realtime-feed

REDIS_URL=redis://localhost:6379
```

---

## 5. Start Redis Using Docker

```bash
docker run -d --name redis-server -p 6379:6379 redis
```

---

## 6. Run Backend

```bash
npm run dev
```

---

# Frontend Setup

## 1. Move to Frontend

```bash
cd frontend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment File

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 4. Run Frontend

```bash
npm run dev
```

---

# API Endpoints

## GET Feed

```http
GET /feed
```

Returns all feeds.

---

## POST Feed

```http
POST /feed
```

### Request Body

```json
{
  "title": "Realtime Architecture",
  "description": "Learning Redis and Socket.IO"
}
```

---

# Realtime Flow

```text
Admin Page
   ↓
POST /feed
   ↓
Save Data in MongoDB
   ↓
Clear Redis Cache
   ↓
Emit Socket Event
   ↓
Clients Receive Realtime Update
   ↓
Frontend Updates Without Refresh
```

---

# Redis Caching Strategy

The application caches feed data using Redis.

## Flow

```text
First Request
  ↓
MongoDB
  ↓
Store in Redis
```

```text
Next Requests
  ↓
Redis Cache
```

Benefits:

* Faster response
* Reduced DB load
* Better scalability

---

# Socket.IO Realtime Handling

The application uses Socket.IO for realtime feed updates.

## Features

* Instant frontend updates
* Automatic reconnect support
* Event cleanup on component unmount
* Duplicate event prevention

---

# Error Handling

## Backend

Centralized global error middleware:

* Validation errors
* API errors
* Database errors
* Redis errors

## Frontend

* API error handling
* Loading states
* User-friendly alerts
* Socket connection debugging

---

# Security Features

## Helmet

Adds secure HTTP headers.

---

## Rate Limiting

Protects APIs from spam requests.

---

## Zod Validation

Prevents invalid input data.

---

## CORS Configuration

Restricts API access to frontend domain.

---

# Scalability Thinking

The project is designed with scalable architecture concepts.

## Current Architecture

```text
Frontend
   ↓
Express API
   ↓
MongoDB
   ↓
Redis Cache
   ↓
Socket.IO
```

---

## Production Scaling Approach

For large-scale systems:

```text
Load Balancer
     ↓
Multiple Node Servers
     ↓
Redis Pub/Sub
     ↓
Socket.IO Redis Adapter
```

# Common Challenges Solved

## Redis Connection Error

Issue:

```text
ECONNREFUSED 127.0.0.1:6379
```

Solution:

* Start Redis server
* Use Docker container
* Verify Redis port

---

## Socket.IO 404 Error

Issue caused by incorrect frontend API URL.

Correct setup:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

# Author

Developer: Vijay Kumar Jumani

GitHub: <https://github.com/Jumaniv>

