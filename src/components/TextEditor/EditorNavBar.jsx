import React from 'react';
import "../../statics/styles.css"
import {Link, useNavigate} from "react-router-dom";

function EditorNavBar() {
    const navigate = useNavigate();
    return (
        // bg-red-300
        <div className="flex px-6  pb-4 md:px-12 items-center  ">
            <Link to='/'>

                <div className=" flex flex-row  items-center md:gap-1">
                    <span className="material-symbols-outlined" id="logo">keyboard_command_key</span>
                    <span className=" hidden  md:contents md:text-2xl md:font-extrabold">BLGO</span>

                </div>
            </Link>

            <div className="flex w-full p-2 justify-center gap-5 items-center lg:px-10 lg:justify-end ">
                <button className=" border border-solid border-black p-2 px-6 rounded-[14px]">Edit</button>
                <button className=" border border-solid border-black p-2 px-6 rounded-[14px]">Preview</button>
                <button className=" border border-solid border-black p-2 px-6 rounded-[14px]">Publish</button>
                <button className=" border border-solid border-black p-2 px-6 rounded-[14px]"
                        onClick={() => navigate('/profile')}>Profile
                </button>
            </div>
        </div>

    )
}

export default EditorNavBar;