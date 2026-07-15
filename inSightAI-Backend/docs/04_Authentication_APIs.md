# 🚀 InsightAI Backend

> **Pack 04 – Authentication APIs**
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
- Authentication Flow
- Folder Structure
- API Endpoints
- Register API
- Login API
- Get Profile API
- Update Profile API
- Authentication Middleware
- JWT Workflow
- Request Flow
- HTTP Status Codes
- Security Considerations
- Common Errors
- Testing Checklist
- Pack Summary
- Next Pack

---

# 📖 Overview

Pack 04 completes the authentication module of the InsightAI backend.

This pack introduces the complete authentication workflow using JSON Web Tokens (JWT). Users can register, log in, retrieve their profile, and update profile information through protected APIs.

Authentication is implemented using Bearer Tokens passed through the Authorization header.

---

# 🎯 Objectives

Completed objectives

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Profile Retrieval
- Profile Update
- Request Validation
- Authentication Middleware
- Role-ready Authorization

---

# 🏗️ Authentication Architecture

```text
                 React Frontend
                        │
                        ▼
                 Login / Register
                        │
                        ▼
                 Express Routes
                        │
                        ▼
                 Validation Layer
                        │
                        ▼
                 Authentication Controller
                        │
                        ▼
                    MongoDB User
                        │
                        ▼
                  JWT Generation
                        │
                        ▼
              Authorization Header
                        │
                        ▼
                Protected Endpoints
```

---

# 📁 Folder Structure

```text
backend
│
├── controllers
│     └── authController.js
│
├── middleware
│     ├── authMiddleware.js
│     └── validate.js
│
├── models
│     └── User.js
│
├── routes
│     └── authRoutes.js
│
├── validators
│     └── authValidator.js
│
├── utils
│     └── generateToken.js
```

---

# 🌐 API Endpoints

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/profile | Private |
| PUT | /api/auth/profile | Private |

---

# 📝 Register API

## Endpoint

```http
POST /api/auth/register
```

### Authentication

Not Required

### Request Headers

```http
Content-Type: application/json
```

### Request Body

```json
{
  "name": "Vikas Chenna",
  "email": "vikas@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "token": "JWT_TOKEN",
    "user": {
      "id": "...",
      "name": "Vikas Chenna",
      "email": "vikas@gmail.com",
      "role": "user",
      "theme": "light",
      "createdAt": "..."
    }
  }
}
```

### Status Code

```text
201 Created
```

---

# 🔐 Login API

## Endpoint

```http
POST /api/auth/login
```

### Authentication

Not Required

### Request Body

```json
{
  "email": "vikas@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "token": "JWT_TOKEN",
    "user": {
      "id": "...",
      "name": "Vikas Chenna",
      "email": "vikas@gmail.com",
      "role": "user",
      "theme": "light"
    }
  }
}
```

### Status Code

```text
200 OK
```

---

# 👤 Get Profile API

## Endpoint

```http
GET /api/auth/profile
```

### Authentication

Bearer Token Required

### Request Header

```http
Authorization: Bearer JWT_TOKEN
```

### Success Response

```json
{
  "success": true,
  "message": "Profile fetched successfully.",
  "data": {
    "id": "...",
    "name": "Vikas Chenna",
    "email": "vikas@gmail.com",
    "role": "user",
    "theme": "light",
    "createdAt": "..."
  }
}
```

### Status Code

```text
200 OK
```

---

# ✏️ Update Profile API

## Endpoint

```http
PUT /api/auth/profile
```

### Authentication

Bearer Token Required

### Request Header

```http
Authorization: Bearer JWT_TOKEN
```

### Request Body

```json
{
  "name": "Vikas Chenna",
  "theme": "dark"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Profile updated successfully.",
  "data": {
    "id": "...",
    "name": "Vikas Chenna",
    "email": "vikas@gmail.com",
    "role": "user",
    "theme": "dark"
  }
}
```

### Status Code

```text
200 OK
```

---

# 🔑 JWT Workflow

```text
User Login
     │
     ▼
Verify Credentials
     │
     ▼
Generate JWT
     │
     ▼
Frontend Stores Token
     │
     ▼
Authorization Header
     │
     ▼
Protected APIs
```

---

# 🛡️ Authentication Middleware Flow

```text
Incoming Request
        │
        ▼
Authorization Header
        │
        ▼
Extract JWT
        │
        ▼
Verify JWT
        │
        ▼
Find User
        │
        ├───────────────┐
        │               │
     Success        Failure
        │               │
        ▼               ▼
    req.user      HTTP 401
        │
        ▼
   Controller
```

---

# 📊 Request Flow

```text
Frontend
    │
    ▼
Routes
    │
    ▼
Validation
    │
    ▼
Controller
    │
    ▼
MongoDB
    │
    ▼
JWT
    │
    ▼
JSON Response
```

---

# 📌 HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Validation Error |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User Not Found |
| 500 | Internal Server Error |

---

# 🔒 Security Considerations

Implemented

- Password Hashing
- JWT Authentication
- Protected Routes
- Password Hidden from Queries
- Request Validation
- Role-ready Middleware

Future Enhancements

- Refresh Tokens
- Email Verification
- Password Reset
- Google OAuth
- Two-Factor Authentication

---

# ⚠️ Common Errors

## Invalid Email or Password

Cause

Incorrect login credentials.

Response

```json
{
  "success": false,
  "message": "Invalid email or password."
}
```

---

## User Already Exists

```json
{
  "success": false,
  "message": "User already exists."
}
```

---

## Invalid Token

```json
{
  "success": false,
  "message": "Invalid or expired token."
}
```

---

## No Token

```json
{
  "success": false,
  "message": "Access denied. No token provided."
}
```

---

# 🧪 Testing Checklist

| Test | Status |
|------|--------|
| Register User | ✅ |
| Login User | ✅ |
| JWT Generated | ✅ |
| Protected Route | ✅ |
| Get Profile | ✅ |
| Update Profile | ✅ |
| Password Hashing | ✅ |
| Authorization Middleware | ✅ |

---

# 📊 Pack Summary

| Feature | Status |
|----------|--------|
| Registration | ✅ |
| Login | ✅ |
| JWT Authentication | ✅ |
| Protected Routes | ✅ |
| Profile API | ✅ |
| Update Profile | ✅ |
| Validation | ✅ |
| Authorization | ✅ |

---

# 🚀 Next Pack

## Pack 05 – Backend Core Architecture Refactor

Upcoming Improvements

- Centralized Error Handling
- Async Handler
- Response Utility
- API Constants
- Validators Refactor
- Production-ready Express Architecture

---

# 📝 Developer Notes

- JWT expires after 7 days.
- Authentication uses Bearer Token strategy.
- Passwords are hashed using bcrypt before storage.
- User passwords are excluded from normal database queries.
- Protected APIs require a valid JWT.
- Admin middleware is prepared for future role-based authorization.

---

# 📌 Best Practices Followed

- RESTful API Design
- JWT Authentication
- Password Hashing
- Input Validation
- Separation of Concerns
- Modular Route Design
- Scalable Authentication Architecture

---

**End of Pack 04 Documentation**