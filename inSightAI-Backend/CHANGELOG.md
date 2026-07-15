# 📜 Changelog

All notable changes to the **InsightAI Backend** project will be documented in this file.

The format is inspired by **Keep a Changelog** and follows **Semantic Versioning (SemVer)**.

---

# [1.0.0] - 2026-07-15

## 🎉 Initial Release

This is the first official release of the InsightAI Backend.

Version **1.0.0** establishes the backend foundation with database connectivity, authentication, API documentation, and development tooling.

---

## ✨ Added

### 📦 Pack 01 — Project Setup

- Initialized Node.js project
- Configured Express.js
- Enabled ES Modules
- Configured dotenv
- Configured CORS
- Configured Cookie Parser
- Created scalable folder structure
- Added Health Check API
- Configured development scripts

---

### 🗄️ Pack 02 — MongoDB Integration

- Connected MongoDB Atlas
- Configured Mongoose
- Created reusable database connection
- Added environment-based configuration
- Implemented fail-fast server startup

---

### 🔐 Pack 03 — Authentication Foundation

- Created User model
- Added password hashing using bcrypt
- Added JWT generation utility
- Added JWT authentication middleware
- Added role-ready user schema
- Implemented hidden password field

---

### 🔑 Pack 04 — Authentication APIs

Implemented Authentication Module

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Profile API
- Update Profile API
- Authentication Validation
- Authorization Middleware
- Admin Middleware (Foundation)

---

## 📖 Documentation

Added

- Project Documentation
- MongoDB Documentation
- Authentication Documentation
- API Documentation
- Professional README
- Postman Collection

---

## 📬 Postman

Created

InsightAI_Backend_Postman_v1.0.0.postman_collection.json

Includes

- Register
- Login
- Get Profile
- Update Profile

Automatic JWT Storage

Collection Variables

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- express-validator
- multer
- xlsx
- csv-parser

---

## 📁 Architecture

Current Architecture

```text
Frontend

↓

Routes

↓

Validation

↓

Controllers

↓

MongoDB
```

---

## 🔒 Security

Implemented

- Password Hashing
- JWT Authentication
- Protected APIs
- Request Validation
- Hidden Password Field

---

## 📊 API Summary

| Method | Endpoint | Access |
|----------|------------------------|-----------|
| GET | / | Public |
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/profile | Private |
| PUT | /api/auth/profile | Private |

---

## 📈 Statistics

Current Modules

✔ Authentication

Database Collections

✔ Users

API Endpoints

5

Documentation Files

4

Postman Collection

1

README

1

---

## 🚀 Upcoming (Version 1.1.0)

Planned Improvements

- Service Layer
- Async Handler
- API Response Utility
- Centralized Error Handling
- Validator Refactor
- Production Backend Architecture

---

## 👨‍💻 Author

**Vikas Chenna**

InsightAI Backend

Version 1.0.0

Released on **15 July 2026**

---
