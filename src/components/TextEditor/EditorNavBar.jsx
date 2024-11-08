import React from 'react';
import "../../statics/styles.css"
import {useNavigate} from "react-router-dom";

function EditorNavBar() {
    const navigate = useNavigate();
    return (
        // bg-red-300
        <div className="flex w-full p-2 justify-center gap-5 items-center lg:px-10 lg:justify-end ">
            <button className= " border border-solid border-black p-2 px-6 rounded-[14px]">Edit</button>
            <button className= " border border-solid border-black p-2 px-6 rounded-[14px]">Preview</button>
            <button className= " border border-solid border-black p-2 px-6 rounded-[14px]">Publish</button>
            <button className= " border border-solid border-black p-2 px-6 rounded-[14px]"
                    onClick={()=>navigate('/profile')}>Profile</button>
        </div>
    )
}

export default EditorNavBar;