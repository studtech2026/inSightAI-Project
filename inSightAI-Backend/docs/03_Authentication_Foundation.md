# 🚀 InsightAI Backend

> **Pack 03 – Authentication Foundation**
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
- Authentication Architecture
- Folder Structure
- Components
- Request Flow
- File Responsibility Matrix
- JWT Authentication
- Password Security
- Middleware Flow
- Security Considerations
- Common Errors
- Testing Checklist
- Completed Features
- Next Pack

---

# 📖 Overview

Pack 03 establishes the authentication foundation for the InsightAI backend.

Instead of immediately implementing login and registration APIs, this pack focuses on building the reusable authentication infrastructure that future modules depend upon.

This includes:

- User database schema
- Password hashing
- JWT generation
- Authentication middleware

This modular approach keeps the backend scalable and avoids mixing authentication logic with business logic.

---

# 🎯 Objectives

Completed objectives

- Create User model
- Configure password hashing
- Configure JWT generation
- Create authentication middleware
- Design user schema
- Prepare protected route infrastructure

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| ODM | Mongoose |
| Authentication | JWT |
| Encryption | bcrypt |
| Runtime | Node.js |
| Framework | Express.js |

---

# 🏗️ Authentication Architecture

```text
               React Frontend
                      │
                      ▼
                Authentication API
                      │
                      ▼
                 JWT Generation
                      │
                      ▼
              Authentication Middleware
                      │
                      ▼
                 Protected Routes
                      │
                      ▼
                  MongoDB User
```

---

# 📁 Folder Structure

```text
backend
│
├── middleware
│     └── authMiddleware.js
│
├── models
│     └── User.js
│
├── utils
│     └── generateToken.js
```

---

# 📂 File Responsibility Matrix

| File | Responsibility |
|------|----------------|
| models/User.js | User schema and password hashing |
| middleware/authMiddleware.js | JWT verification |
| utils/generateToken.js | Generate JWT tokens |

---

# 👤 User Schema

The User model contains the following fields.

| Field | Type | Description |
|--------|------|-------------|
| name | String | User's full name |
| email | String | Unique email address |
| password | String | Hashed password |
| role | String | User or Admin |
| theme | String | Light/Dark preference |
| createdAt | Date | Account creation date |
| updatedAt | Date | Last update timestamp |

---

# 🔒 Password Security

Passwords are never stored in plain text.

Before saving a user:

```text
User Password
      │
      ▼
bcrypt Hash
      │
      ▼
MongoDB
```

Only the hashed value is stored.

Example

```text
123456

↓

$2b$10$3LsdV...
```

---

# 🔑 JWT Authentication

After successful login, the backend generates a JWT.

The token contains

- User ID
- Issued Time
- Expiration Time

The frontend stores this token and sends it with protected requests.

Example Header

```http
Authorization: Bearer JWT_TOKEN
```

---

# 🔄 Authentication Flow

```text
User Login
      │
      ▼
Verify Email
      │
      ▼
Compare Password
      │
      ▼
Generate JWT
      │
      ▼
Frontend Stores Token
      │
      ▼
Protected Request
      │
      ▼
JWT Verification
      │
      ▼
Access Granted
```

---

# 🛡️ Middleware Flow

```text
Incoming Request
        │
        ▼
Authorization Header
        │
        ▼
JWT Verification
        │
        ├──────────────┐
        │              │
Valid Token     Invalid Token
        │              │
        ▼              ▼
req.user      401 Unauthorized
        │
        ▼
Controller
```

---

# 🔒 Security Considerations

Implemented

- Password hashing
- JWT generation
- Protected route middleware
- Password hidden from queries using `select: false`

Upcoming

- Refresh Tokens
- Password Reset
- Email Verification
- Account Lockout
- Multi-Factor Authentication (Future)

---

# ⚠️ Common Errors & Solutions

## Error

```text
TypeError: next is not a function
```

### Cause

Using the Mongoose 7 middleware style with Mongoose 8.

### Solution

Use async middleware without calling `next()`.

---

## Error

```text
Invalid or expired token
```

### Cause

JWT has expired or is invalid.

### Solution

Authenticate again and obtain a new token.

---

## Error

```text
User not found
```

### Cause

The JWT contains an ID that no longer exists in the database.

### Solution

Return HTTP 401 Unauthorized.

---

# 🧪 Testing Checklist

| Test | Status |
|------|--------|
| User schema created | ✅ |
| Password hashing | ✅ |
| JWT generation | ✅ |
| Authentication middleware | ✅ |
| Password hidden from queries | ✅ |

---

# 📊 Pack Summary

| Item | Status |
|------|--------|
| User Model | ✅ |
| Password Hashing | ✅ |
| JWT Utility | ✅ |
| Auth Middleware | ✅ |
| Authentication Foundation | ✅ |

---

# 🚀 Next Pack

## Pack 04 – Authentication APIs

The next pack introduces

- User Registration
- User Login
- JWT Authentication
- Profile API
- Update Profile
- Input Validation

---

# 📈 Future Enhancements

- Email Verification
- Password Reset
- Refresh Tokens
- Google OAuth
- GitHub OAuth
- Two-Factor Authentication

---

# 📝 Developer Notes

- Passwords are hashed using bcrypt.
- JWT tokens expire after seven days.
- Authentication middleware is reusable across all protected APIs.
- The User model is designed to support future RBAC (Role-Based Access Control).

---

# 📌 Best Practices Followed

- Separation of Concerns
- Password Hashing
- JWT-Based Authentication
- Reusable Middleware
- Hidden Password Field
- Scalable User Schema
- Modular Utility Functions

---

**End of Pack 03 Documentation**