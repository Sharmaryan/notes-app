import "./App.css";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Archive from "./pages/Archive/Archive";
import Trash from "./pages/Trash/Trash";
import Profile from "./pages/Profile/Profile";
import Labels from "./pages/Labels/Labels";

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
