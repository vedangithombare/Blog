import React from 'react';
import '../statics/styles.css'
import NavBar from "./NavBar.jsx";
import Highlight from "./Highlight.jsx";
import PopularPicks from "./PopularPicks";
import RecentBlogs from "./RecentBlogs.jsx";

//main file maybe home file
function Main() {
    return (
        // #edf0f5
        <div className="bg-[#edf0f5]">
            <div>
                <NavBar/>
                <div className="flex flex-row ">
                    <div className="flex flex-col gap-10">
                    <Highlight/>
                    <RecentBlogs/>
                        </div>
                    <PopularPicks/>
                </div>
            </div>
        </div>

    )
}

export default Main;