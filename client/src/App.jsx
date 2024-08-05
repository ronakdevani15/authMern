import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserContextProvider } from "./components/UserContext";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const userObj = useContext(UserContextProvider);

  axios.defaults.withCredentials = true

  console.log(userObj);

  return (
    <>
      <Router>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
