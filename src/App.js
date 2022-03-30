import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Navbar, Sidebar } from "./Components/index";
import { Archive, Trash, Profile, Homepage, Labels } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/labels" element={<Labels />} />
      </Routes>
    </div>
  );
}

export default App;
