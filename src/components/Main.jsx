import React from 'react';
import '../statics/styles.css'
import NavBar from "./NavBar.jsx";
import Highlight from "./Highlight.jsx";
import PopularPicks from "./PopularPicks";

//main file maybe home file
function Main() {
    return (
        <div>
            <div className="gap-3">
                <NavBar/>
                <div className="flex flex-row">
                    <Highlight/>
                    <PopularPicks/>
                </div>
            </div>
        </div>

    )
}

export default Main;