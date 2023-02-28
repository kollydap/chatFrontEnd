import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import RequestList from "./components/RequestList";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register";
import SinglePost from "./components/SinglePost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friend-request-list" element={<RequestList />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
