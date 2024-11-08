import React from "react";
import NavBar from "../HomePage/NavBar";
import Sidebar from "../UserDashboard/Sidebar";

function Profile() {
    return (
        <div className="flex flex-col flex-1 h-screen">
            <NavBar/>
            <div className="flex  flex-1 w-full ">
                <Sidebar/>
                <div className="flex flex-col w-full p-4 gap-4">
                    <h2 className="flex text-5xl font-bold">welcome  Vedangi T.</h2>
                    <div className="flex flex-1 w-full ">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile;