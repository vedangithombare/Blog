import React from 'react';
import "../../statics/styles.css"
import App from './App.jsx';


function TextEditor() {
    return (
        // bg-blue-400
        <div className="flex flex-col min-h-[80%] px-10 ">
            {/*bg-gray-400*/}
            <div className=" flex flex-1 flex-col h-80   lg:px-20 ">
                <div className="flex min-h-20 gap-4  lg:px-2">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">add_photo_alternate</span>
                        <button>Add cover</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">tag</span>
                        <button>Add Tags</button>
                    </div>
                </div>
                {/*bg-fuchsia-400*/}
                <div className="flex flex-1 ">
                    <App/>
                </div>
            </div>
        </div>
    )
}

export default TextEditor;