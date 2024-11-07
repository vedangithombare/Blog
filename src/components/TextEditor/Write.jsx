import React from 'react';
import "../../statics/styles.css"
import EditorNavBar from "./EditorNavBar";
import TextEditor from "./TextEditor";
function Write() {
    return (
        <div className="flex flex-col p-2 w-full h-screen gap-4">
            <EditorNavBar/>
            <TextEditor/>
        </div>
    )
}

export default Write;