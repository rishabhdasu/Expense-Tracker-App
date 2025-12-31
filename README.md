# 💰 Personal Expense Tracker

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

A full-stack financial management application designed to help users track their income and expenses efficiently. Built with the **MERN Stack**, it features visual analytics, secure authentication, and profile management with cloud image storage.

---

### 🚀 Live Demo
**[Click here to view the Live App](YOUR_VERCEL_LINK_HERE)**

*(Note: The backend is hosted on a free Render instance. Please allow up to 60 seconds for the server to wake up on the initial login.)*

---

## 📸 Screenshots

| Dashboard | Income Management |
|:---:|:---:|
| <img width="947" height="417" alt="Image" src="https://github.com/user-attachments/assets/a9f27a45-d33d-4e61-847f-71cbc8e0b5e7" /> | <img width="947" height="417" alt="Image" src="https://github.com/user-attachments/assets/3c66c1eb-abb5-4cf0-bec3-14a56b5c568c" /> |

| Dashboard | Expense Management |
|:---:|:---:|
| <img width="947" height="417" alt="Image" src="https://github.com/user-attachments/assets/5bafd79c-3636-40c3-ac40-6841adfde78b" /> | <img width="947" height="417" alt="Image" src="https://github.com/user-attachments/assets/8de9deb1-e7c8-44f5-86cc-7a22d67f6b98" /> |

---

## ✨ Key Features

- **🔐 Secure Authentication:** User registration and login using JWT (JSON Web Tokens).
- **📊 Interactive Dashboard:** Visual charts (Pie & Bar charts) using `Recharts` to analyze financial health.
- **💸 Transaction Management:** Add, view, and delete Income and Expense records.
- **👤 Profile Management:** Users can update their name and upload profile pictures (stored on **Cloudinary**).
- **📱 Responsive Design:** Fully responsive UI built with **Tailwind CSS**.
- **🔎 Smart Filters:** Sort transactions by date and view recent activity.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite):** Fast client-side rendering.
- **Tailwind CSS:** Modern utility-first styling.
- **Recharts:** Data visualization.
- **Axios:** API requests.
- **React Hot Toast:** User notifications.

### Backend
- **Node.js & Express.js:** RESTful API architecture.
- **MongoDB & Mongoose:** NoSQL Database for storing users and transactions.
- **JWT:** Secure authentication middleware.
- **Multer & Cloudinary:** Handling file uploads and cloud storage.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker

### 2. Backend Setup

Navigate to the **backend** folder and install dependencies:

```
bash

cd backend
npm install
```

Create a .env file in the backend folder and add your credentials:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the Server:

npm start
Server should run on http://localhost:8000

### 3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and install dependencies:
code
```
Bash
cd frontend
npm install
```

Configure Base URL:
Go to frontend/src/utils/axiosInstance.js and ensure it points to localhost:
code

JavaScript

```
const BASE_URL = 'http://localhost:8000/api/v1';
```

Start the React App:

code
```
Bash
npm run dev
```
## 🌐 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/v1/auth/register` | Register a new user |
| **POST** | `/api/v1/auth/login` | Login user & get Token |
| **PUT** | `/api/v1/auth/profile` | Update Name & Profile Image |
| **GET** | `/api/v1/dashboard` | Get summary stats & charts |
| **POST** | `/api/v1/income/add-income` | Add new income source |
| **POST** | `/api/v1/expense/add-expense` | Add new expense |

🧠 What I Learned
Building this project helped me understand:
Full Stack Integration: Connecting React frontend with an Express backend.
Authentication: Implementing secure Route Protection (ProtectedRoute wrapper).
State Management: Using useContext to manage global User state.
Cloud Services: Handling file uploads using Multer and Cloudinary.
Deployment: Solving CORS issues and deploying to Vercel and Render.

## 📬 Contact

Created by **Rishabh Dasgupta**  
[LinkedIn Profile](https://www.linkedin.com/in/rishabh-dasgupta-92b6a1b2/) | [GitHub Profile](https://github.com/rishabhdasu)




