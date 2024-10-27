import Main from "./components/Main";
import  Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    // maybe keep this for routing different pages
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>


      </BrowserRouter>

  );
}

export default App;
