import React from 'react';
import '../../statics/styles.css'
import {useNavigate} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            <div
                className="flex flex-1 px-4 justify-between shadow shadow-black-500/70  mb-6 items-center h-24 p-8 ">
                <div className="flex gap-1 items-center">
                    <span className="material-symbols-outlined" id="logo">keyboard_command_key</span>
                    <span className="text-3xl font-extrabold">BLGO</span>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 ">
                    {/*border border-solid border-black*/}
                    <button className=" flex items-center px-4 py-2 gap-1  rounded-xl hover:bg-[#ebecef] ">
                        <span className="material-symbols-outlined">home</span>
                        Home
                    </button>
                    <button className=" flex items-center px-4 py-2 gap-1  rounded-xl hover:bg-[#ebecef]"
                            onClick={() => {
                                navigate('/write')
                            }}
                    >
                        <span className="material-symbols-outlined">edit</span>
                        Write
                    </button>
                    <button className=" flex items-center px-5 py-2 gap-2 bg-emerald-400 rounded-3xl hover:bg-white">
                        VedangiT
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;