/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import GithubActivity from "./components/githubActivity/GithubActivity";

const App = () => {
  const [username, setUsername] = useState("satish-kumar75");

  const handleSearch = (username) => {
    setUsername(username);
  };

  return (
    <div>
      <Toaster />
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>

      <Header onSearch={handleSearch} />
      <Home username={username} setUsername={setUsername} />
      <h2 className="githubActivity">
        Days I <b className="blue">Code</b>
      </h2>
      <GithubActivity username={username} />
      <Footer />
    </div>
  );
};

export default App;
