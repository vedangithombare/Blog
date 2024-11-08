import React from 'react';

function Sidebar() {
    return (
        <div className="flex flex-col min-w-60 p-8 px-4">
            <ul className="flex flex-col h-full items-left p-4 gap-8 border-r-2">
                <li className="flex flex-row items-center gap-2 p-2 px-4 rounded-xl hover:bg-[#f3f5f7]">
                    <span className="material-symbols-outlined">library_books</span>
                    <button
                        className="flex items-center justify-center">
                        My Stories
                    </button>
                </li>
                <li className="flex flex-row items-center gap-2 p-2 px-4 rounded-xl hover:bg-[#f3f5f7]">
                    <span className="material-symbols-outlined">favorite</span>
                    <button
                        className="flex items-center justify-center ">
                        Liked Posts
                    </button>
                </li>
                <li className="flex flex-row items-center gap-2 p-2 px-4 rounded-xl hover:bg-[#f3f5f7]">
                    <span className="material-symbols-outlined">settings</span>
                    <button
                        className=" flex items-center justify-center">
                        Settings
                    </button>
                </li>
                <li className="flex flex-row items-center gap-2 p-2 px-4 rounded-xl hover:bg-[#f3f5f7] ">
                    <span className="material-symbols-outlined">logout</span>
                    <button
                        className="flex items-center justify-center ">
                        Logout
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar;