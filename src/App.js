import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import "./App.css";
import Widgets from "./components/Widgets";
import axiosInstance from "./axios";
import Header from "./components/Header";
import AboveHeader from "./components/AboveHeader";
import { useNavigate, Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("key"));
    axiosInstance.get(`user`).then((res) => {
      setLoggedUser(res.data);
    });
  }, []);
  return (
    <div className="app">
      {!token ? (
        navigate("/login")
      ) : (
        <>
          <AboveHeader />
          <Header
            username={loggedUser.username}
            display_photo={loggedUser.display_photo}
          />
          <div className="app__body">
            <Sidebar
              username={loggedUser.username}
              display_photo={loggedUser.display_photo}
            />
            <Feed display_photo={loggedUser.display_photo} />

            <Widgets className="widgets" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
