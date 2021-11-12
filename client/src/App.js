import "./App.css";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
 import {
    BrowserRouter as Router,    
    Routes,
    Route
  } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
          <Route path="/" element={<Home/>}>

          </Route>
      </Routes>

    </Router>
  );
}

export default App;
