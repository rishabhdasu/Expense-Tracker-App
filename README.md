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
| <img src="https://github.com/user-attachments/assets/ff72700a-1604-485b-a620-dbeaec4e13c8" width="100%" /> | <img src = "https://github.com/user-attachments/assets/e76b68e0-d360-4422-a9ff-443a498ca2f3" width="100%" /> |

| Expense Charts |
|:---:|:---:|
| <img src= "https://github.com/user-attachments/assets/86a4cde6-c7cc-4fd1-af3c-b0fd0a63601c" width="100%" /> |

*(Replace the links above with actual screenshots of your app for a better portfolio look!)*

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

```PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the Server:

npm start
# Server should run on http://localhost:8000

3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and install dependencies:
code
Bash
cd frontend
npm install

Configure Base URL:
Go to frontend/src/utils/axiosInstance.js and ensure it points to localhost:
code
JavaScript
const BASE_URL = 'http://localhost:8000/api/v1';

Start the React App:
code
Bash
npm run dev






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




