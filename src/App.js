import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Navbar, Sidebar } from "./Components/index";
import { Archive, Trash, Profile, Homepage, Labels, SigninPage, SignupPage } from "./pages/index";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
