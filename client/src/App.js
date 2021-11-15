import "./App.css";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { Context } from "./context/Contex";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
        <Route path="/about" element={<Home />}>
          {" "}
        </Route>{" "}
        <Route path="/post/:postId" element={<Single />}>
          {" "}
        </Route>{" "}
        <Route path="/login" element={user ? <Home /> : <Login />}>
          {" "}
        </Route>{" "}
        <Route path="/write" element={user ? <Write /> : <Login />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
