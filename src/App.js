import Main from "./components/HomePage/Main";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/SignUp";
import Write from "./components/TextEditor/Write";
import Tempauthpage from "./components/Authentication/Tempauthpage";
import Profile from "./components/UserDashboard/Profile";
import MyStories from "./components/UserDashboard/MyStories";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LikedPosts from "./components/UserDashboard/LikedPosts";

function App() {
    // maybe keep this for routing different pages
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/write" element={<Write/>}/>
                <Route path="/tempauth" element={<Tempauthpage/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route path="my-stories" element={<MyStories/>}></Route>
                    <Route path="liked-posts" element={<LikedPosts/>}></Route>
                </Route>

            </Routes>


        </BrowserRouter>

    );
}

export default App;
