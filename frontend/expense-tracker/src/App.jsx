import React from "react";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import { useUserAuth } from "./hooks/useUserAuth";
import ProtectedRoutes from "./components/ProtectedRoutes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const AppContent = () => {
  useUserAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/income" element={<Income />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/expense" element={<Expense />} />
      </Route>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <AppContent />
        </Router>
      </div>

      <Toaster
        toastTopOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
};

export default App;

// const Root = () => {
//   // check if token exists in localstorage
//   const isAuthenticated = !!localStorage.getItem("token");

//   // redireected to dashboard if authenticated otherwise to login
//   return isAuthenticated ? (
//     <Navigate to="/dashboard" />
//   ) : (
//     <Navigate to="/login" />
//   );
// };
