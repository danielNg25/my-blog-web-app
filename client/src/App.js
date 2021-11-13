import "./App.css";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="/it" element={<Category />}></Route>{" "}
      </Routes>
    </Router>
  );
}

export default App;
