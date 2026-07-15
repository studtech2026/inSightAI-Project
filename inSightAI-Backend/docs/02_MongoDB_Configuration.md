# 🚀 InsightAI Backend

> **Pack 02 – MongoDB Configuration**
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
- MongoDB Atlas
- Database Architecture
- Folder Structure
- Configuration Files
- Database Connection Flow
- Environment Variables
- Connection Testing
- Security Considerations
- Completed Features
- Next Pack

---

# 📖 Overview

Pack 02 integrates MongoDB Atlas into the InsightAI backend.

This pack establishes the database layer using **MongoDB Atlas** and **Mongoose**, enabling persistent data storage for all future modules such as Authentication, Uploads, Reports, Dashboard, Notifications, Search, and AI.

The backend is configured to start only after a successful database connection, ensuring reliability and preventing runtime failures.

---

# 🎯 Objectives

The following objectives are completed in this pack:

- Configure MongoDB Atlas
- Install and configure Mongoose
- Create reusable database configuration
- Connect backend to MongoDB
- Load database connection from environment variables
- Prevent server startup on database failure
- Verify successful database connection

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Runtime | Node.js |
| Framework | Express.js |
| Environment | dotenv |

---

# ☁️ MongoDB Atlas

MongoDB Atlas is used as the cloud-hosted database for InsightAI.

### Configuration Steps

- Create MongoDB Atlas account
- Create Free Tier (M0) cluster
- Create Database User
- Configure Network Access
- Obtain Connection URI
- Configure environment variables

---

# 🏗️ Database Architecture

```text
               React Frontend
                      │
                      ▼
                Express Server
                      │
                      ▼
               Database Layer
                      │
                      ▼
                config/db.js
                      │
                      ▼
             MongoDB Atlas Cluster
```

---

# 📁 Folder Structure

```text
backend
│
├── config
│     └── db.js
│
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
├── .env
└── package.json
```

---

# ⚙️ Configuration Files

## backend/config/db.js

### Responsibilities

- Connect MongoDB
- Handle connection errors
- Stop server if database connection fails
- Export reusable database connection function

---

## backend/server.js

### Responsibilities

- Load environment variables
- Connect MongoDB
- Start Express server only after successful database connection

---

# 🔄 Database Connection Flow

```text
Server Starts
      │
      ▼
Load Environment Variables
      │
      ▼
Connect MongoDB
      │
      ├──────────────┐
      │              │
Success         Connection Failed
      │              │
      ▼              ▼
Start Server    Exit Process
```

---

# 🌍 Environment Variables

```env
PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/insightai

JWT_SECRET=<your-secret-key>

CLIENT_URL=http://localhost:5173
```

---

# 🧪 Connection Testing

### Terminal Output

```text
✅ MongoDB Connected
📦 Database: insightai
🌐 Host: cluster.mongodb.net

🚀 Server running on port 5000
```

---

### Health Check Endpoint

```http
GET /
```

### Response

```json
{
  "success": true,
  "message": "InsightAI Backend Running 🚀"
}
```

---

# 🔒 Security Considerations

Current Security

- MongoDB credentials stored in `.env`
- Environment variables excluded from Git
- Database connection isolated in `config/db.js`

Upcoming Security

- JWT Authentication
- Password Encryption
- Protected Routes
- Input Validation
- Role-Based Authorization

---

# 📊 Database Initialization Strategy

The application follows a **fail-fast** startup strategy.

```text
Application Start
        │
        ▼
Database Connection
        │
        ├──────────────┐
        │              │
Connected      Connection Failed
        │              │
        ▼              ▼
Server Starts    Process Exit
```

### Benefits

- Prevents running APIs without database access
- Avoids inconsistent application state
- Simplifies debugging during deployment

---

# 📈 Pack Summary

| Item | Status |
|------|--------|
| MongoDB Atlas Configured | ✅ |
| Mongoose Installed | ✅ |
| Database Connected | ✅ |
| Environment Variables Configured | ✅ |
| Reusable Database Configuration | ✅ |
| Server Starts After DB Connection | ✅ |

---

# 🚀 Next Pack

## Pack 03 – Authentication Foundation

The next pack introduces:

- User Schema
- Password Hashing (bcrypt)
- JWT Token Generation
- Authentication Middleware
- User Model Design

---

# 📝 Developer Notes

- Database name used: **insightai**
- Mongoose is used as the Object Document Mapper (ODM).
- Database connection logic is isolated from the Express application.
- The server starts only after a successful MongoDB connection.
- This architecture improves maintainability and production readiness.

---

# 📌 Best Practices Followed

- Separation of Concerns
- Environment-Based Configuration
- Fail-Fast Startup
- Modular Database Configuration
- Cloud Database (MongoDB Atlas)
- Scalable Project Structure

---

**End of Pack 02 Documentation**