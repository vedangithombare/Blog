import React from 'react';
import '../statics/styles.css'
import NavBar from "./NavBar.jsx";
import Highlight from "./Highlight.jsx";
import PopularPicks from "./PopularPicks";
import RecentBlogs from "./RecentBlogs.jsx";

//main file maybe home file
function Main() {
    return (
        <>
            <div className="flex w-full flex-1 h-full p-2 gap-8 flex-col  md:p-8 lg:flex-row">
                <div className="flex flex-col flex-[3] gap-8">
                    <Highlight/>
                    <RecentBlogs/>
                </div>
                <div className="flex flex-1 ">
                    <PopularPicks/>
                </div>
            </div>
        </>
    )
}

export default Main;