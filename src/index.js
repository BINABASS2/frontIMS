import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "layouts/Admin/Admin.js";
import Login from "login/Login";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e, login, password) => {
    // Here you can add login logic and authentication checks
    setIsAuthenticated(true);  // Set to true after successful login
  };

  const handleRegister = (e, fullName, login, password) => {
    // Here you can add registration logic
    setIsAuthenticated(true);  // Set to true after successful registration
  };

  return (
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Routes>
            {/* If user is not authenticated, redirect to login */}
            {!isAuthenticated ? (
              <>
                <Route path="/" element={<Login onLogin={handleLogin} onRegister={handleRegister} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path="/admin/*" element={<AdminLayout />} />
                {/* Redirect after login to the dashboard */}
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);