import React from 'react';
import '../../statics/styles.css'
import Highlight from "./Highlight.jsx";
import PopularPicks from "./PopularPicks";
import RecentBlogs from "./RecentBlogs.jsx";
import NavBar from "./NavBar.jsx";

//main file maybe home file
function Main() {
    return (
        <>
            <div className="flex w-[99%] ">
                <NavBar/>
            </div>

            <div className="flex w-[99%] flex-1 h-full p-2 gap-8 flex-col md:p-8 lg:flex-row">

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