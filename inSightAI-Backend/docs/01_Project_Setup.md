# 🚀 InsightAI Backend

> **Pack 01 – Project Setup**
>
> **Project:** InsightAI
>
> **Author:** Vikas Chenna
>
> **Version:** 1.0.0
>
> **Status:** ✅ Completed

---

# 📑 Table of Contents

- Overview
- Objectives
- Technology Stack
- Project Structure
- Installed Dependencies
- Application Architecture
- Configuration Files
- Express Middleware
- Available API
- Environment Variables
- Security Considerations
- Completed Features
- Next Pack

---

# 📖 Overview

Pack 01 lays the foundation of the InsightAI backend.

The goal of this pack is to initialize a scalable Node.js backend using modern development practices. No business logic or database operations are implemented at this stage. Instead, the focus is on creating a clean architecture that future modules can build upon.

The backend is designed to integrate directly with the existing React + Vite frontend without requiring changes to the frontend architecture.

---

# 🎯 Objectives

The following objectives are completed in this pack:

- Initialize Node.js project
- Configure ES Modules
- Install required dependencies
- Create scalable folder structure
- Configure Express application
- Configure CORS
- Configure Cookie Parser
- Configure environment variables
- Create health check endpoint
- Prepare backend for MongoDB integration

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Module System | ES Modules |
| Environment | dotenv |
| Database | MongoDB *(Configured in Pack 02)* |
| ODM | Mongoose *(Configured in Pack 02)* |
| Authentication | JWT *(Pack 03 & 04)* |
| Password Encryption | bcrypt |
| Validation | express-validator |
| File Upload | multer |
| Excel Parsing | xlsx |
| CSV Parsing | csv-parser |

---

# 📁 Project Structure

```text
backend
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── uploads
├── utils
│
├── app.js
├── server.js
├── package.json
├── .env
└── .gitignore
```

### Folder Responsibilities

| Folder | Purpose |
|---------|----------|
| config | Database and application configuration |
| controllers | Business logic |
| middleware | Authentication and request middleware |
| models | MongoDB schemas |
| routes | API endpoints |
| services | Business services |
| uploads | Uploaded files |
| utils | Reusable helper functions |

---

# 📦 Installed Dependencies

## Production Dependencies

| Package | Purpose |
|----------|---------|
| express | Backend framework |
| mongoose | MongoDB ODM |
| dotenv | Environment configuration |
| cors | Cross-Origin Resource Sharing |
| cookie-parser | Cookie handling |
| bcrypt | Password hashing |
| jsonwebtoken | JWT Authentication |
| multer | File upload |
| xlsx | Excel parsing |
| csv-parser | CSV parsing |
| express-validator | Input validation |

---

## Development Dependencies

| Package | Purpose |
|----------|---------|
| nodemon | Auto restart during development |

---

# 🏗️ Application Architecture

```text
                React Frontend
                       │
                       ▼
                 Express Server
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     Routes       Middleware     Utilities
        │
        ▼
   Controllers
        │
        ▼
   MongoDB (Pack 02)
```

---

# ⚙️ Configuration Files

## app.js

Responsibilities

- Configure Express
- Register middleware
- Register routes
- Handle application configuration

---

## server.js

Responsibilities

- Load environment variables
- Start Express server
- Connect backend services

---

## package.json

Configured with

- ES Modules
- Development script
- Production script

---

## .env

Contains

```env
PORT

MONGO_URI

JWT_SECRET

CLIENT_URL
```

---

## .gitignore

Ignored

```text
node_modules/
.env
uploads/
```

---

# 🔄 Express Middleware

The following middleware is configured:

| Middleware | Purpose |
|------------|----------|
| express.json() | Parse JSON requests |
| express.urlencoded() | Parse Form Data |
| cors() | Enable frontend communication |
| cookieParser() | Parse Cookies |

---

# 🌐 Available API

## Health Check

### Endpoint

```http
GET /
```

### Authentication

Not Required

### Response

```json
{
  "success": true,
  "message": "InsightAI Backend Running 🚀"
}
```

### Status Code

```text
200 OK
```

---

# 🌍 Environment Variables

| Variable | Description |
|-----------|-------------|
| PORT | Express Server Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key |
| CLIENT_URL | React Frontend URL |

---

# 🔒 Security Considerations

Current Security

- Environment variables
- CORS configuration
- Cookie parsing

Upcoming Security

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- Authorization Middleware

---

# ✅ Completed Features

- Node.js Backend Initialization
- Express Configuration
- ES Modules
- Professional Folder Structure
- Environment Configuration
- CORS Setup
- Cookie Parser
- Health Check Endpoint

---

# 📊 Pack Summary

| Item | Status |
|------|--------|
| Backend Initialized | ✅ |
| Express Configured | ✅ |
| ES Modules | ✅ |
| Environment Variables | ✅ |
| Folder Structure | ✅ |
| Health Check API | ✅ |

---

# 🚀 Next Pack

## Pack 02 – MongoDB Integration

The next pack introduces:

- MongoDB Atlas
- Mongoose
- Database Connection
- Environment Configuration
- Connection Verification

---

# 📝 Notes

- No database operations are implemented in this pack.
- No authentication is available yet.
- This pack focuses entirely on establishing a clean and scalable backend foundation.
- All future backend modules build upon this architecture.

---

**End of Pack 01 Documentation**