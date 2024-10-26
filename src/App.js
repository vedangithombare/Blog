import Main from "./components/Main";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    // maybe keep this for routing different pages
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Main/>}/>

          </Routes>


      </BrowserRouter>

  );
}

export default App;
