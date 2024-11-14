import React from 'react';
import '../../statics/styles.css'
import {Link, useNavigate} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center">
            <div
                className="flex flex-1 h-20  justify-center gap-10 items-center shadow shadow-black-500/70  md:justify-between md:p-6 pb-4 md:px-12 ">
                <Link to='/'>
                    <div className=" flex  items-center md:gap-1">
                        <span className="material-symbols-outlined" id="logo">keyboard_command_key</span>
                        <span className=" hidden  md:contents md:text-2xl md:font-extrabold">BLGO</span>
                    </div>
                </Link>

                <div className="flex flex-row gap-1 md:justify-between md:items-center md:gap-4">

                    {/*border border-solid border-black*/}
                    <button className=" flex items-center rounded-xl px-2 hover:bg-[#ebecef] md:px-4 md:py-2 md:gap-1"
                            onClick={() => {
                                navigate('/')
                            }}>
                        <span className="material-symbols-outlined">home</span>
                        Home
                    </button>

                    <button className=" flex items-center rounded-xl px-2 hover:bg-[#ebecef] md:px-4 md:py-2 md:gap-1"
                            onClick={() => {
                                navigate('/write')
                            }}>
                        <span className="material-symbols-outlined">edit</span>
                        Write
                    </button>

                    <button
                        className=" flex items-center px-3 py-2  bg-emerald-400 rounded-3xl hover:bg-white md:px-5 md:py-2 md:gap-2 "
                        onClick={() => navigate('/profile')}>
                        Vedangi T.
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default NavBar;