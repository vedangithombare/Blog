import React from "react";
import NavBar from "../HomePage/NavBar";
import Sidebar from "../UserDashboard/Sidebar";
import {Outlet} from "react-router-dom";

function Profile() {
    return (
        <div className="flex flex-col flex-1 h-screen">
            <NavBar/>
            <div className="flex  flex-1 w-full ">
                <Sidebar/>
                <div className="flex flex-col w-full p-4 gap-10">
                    <h2 className="flex text-3xl font-bold gap-2">Welcome Vedangi T.</h2>
                    <div className="flex flex-1 w-full ">
                        <Outlet/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile;