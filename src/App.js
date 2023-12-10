import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MainPage from "./pages/MainPage";
import BookingPage from "./pages/BookingPage";
import MyJimventory from "./pages/MyJimventory";
import StartPage from "./pages/StartPage";

import Layout from "./Layout";

import { AuthContext } from "./context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route
            path="/landing"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/main"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />

          <Route
            path="/my-jimventory"
            element={
              <Layout>
                <MyJimventory />
              </Layout>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <Layout>
                <BookingPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
