# 🚀 InsightAI Backend

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

Production-ready backend for **InsightAI**, built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

</div>

---

# 📖 Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Architecture
- Installation
- Environment Variables
- Running the Project
- Authentication
- API Endpoints
- Documentation
- Postman Collection
- Roadmap
- Author
- License

---

# 📌 Overview

InsightAI Backend is the server-side application powering the InsightAI dashboard.

It provides secure authentication, data management, file uploads, reporting, AI integration, notifications, and search capabilities through a scalable REST API.

The backend is designed to integrate seamlessly with the existing React frontend without requiring frontend architecture changes.

---

# ✨ Current Features

## ✅ Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing
- Protected Routes
- Profile API
- Update Profile

---

## 🚧 Upcoming Features

- CSV Upload
- Excel Upload
- Dashboard Analytics
- Reports
- AI Assistant
- Notifications
- Global Search
- Forecast API
- Settings Module

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Authentication | JWT |
| Password Hashing | bcrypt |
| Validation | express-validator |
| Uploads | multer |
| Excel | xlsx |
| CSV | csv-parser |

---

# 📁 Project Structure

```text
backend
│
├── config
├── controllers
├── docs
├── middleware
├── models
├── postman
├── routes
├── services
├── uploads
├── utils
├── validators
│
├── app.js
├── server.js
├── package.json
├── .env
├── README.md
└── CHANGELOG.md
```

---

# 🏗 Architecture

```text
React Frontend
        │
        ▼
Express Routes
        │
        ▼
Validation
        │
        ▼
Controllers
        │
        ▼
MongoDB
```

> **Note:** Starting with **Version 1.1.0**, the project will introduce a dedicated Service Layer and centralized error handling for improved scalability.

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

---

# 🌍 Environment Variables

Create a `.env` file in the backend root.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Running the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 🔐 Authentication

Authentication uses **Bearer JWT**.

Example Header

```http
Authorization: Bearer JWT_TOKEN
```

JWT expires after **7 days**.

---

# 🌐 API Endpoints

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/profile | Private |
| PUT | /api/auth/profile | Private |

---

# 📚 Documentation

Project documentation is available inside

```text
backend/docs
```

Current documentation

- PACK_01_Project_Setup.md
- PACK_02_MongoDB_Configuration.md
- PACK_03_Authentication_Foundation.md
- PACK_04_Authentication_APIs.md

---

# 📬 Postman Collection

Import the collection from

```text
backend/postman
```

Current collection

```text
InsightAI_Backend_Postman_v1.0.0.postman_collection.json
```

---

# 🛣 Roadmap

### ✅ Version 1.0.0

- Project Setup
- MongoDB Integration
- Authentication Foundation
- Authentication APIs

---

### 🚧 Version 1.1.0

- Core Backend Refactor
- Service Layer
- Async Handler
- Centralized Error Handling
- Response Utility

---

### 🚧 Future Releases

- Upload Module
- Dashboard APIs
- Reports
- Notifications
- Search
- AI Assistant
- Swagger Documentation
- Deployment

---

# 👨‍💻 Author

**Vikas Chenna**

MCA Student

Backend Developer

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

⭐ If you like this project, consider giving it a star on GitHub.

</div>