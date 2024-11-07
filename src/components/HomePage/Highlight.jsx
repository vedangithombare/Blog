import React from 'react';
import '../../statics/styles.css'

function Highlight() {
    return (
        <div className="flex w-full flex-[1] max-h-[75%] bg-black rounded-[1.5rem] flex-col overflow-hidden md:flex-row">
            <div
                className="flex  flex-[1] w-full">
                <img
                    className="object-cover w-full"
                    src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"/>
            </div>
            <div
                className="flex flex-col flex-1 h-full p-6 justify-center gap-6 text-white rounded-r-[1.5rem]">

                <span
                    className="text-white border-white w-fit flex border-[1px] px-3 py-[0.3rem] rounded-[20px]">quam quas quos
                </span>

                <h2 className="font-[600] text-[2.5rem] leading-[55px]">Lorem ipsum dolor sit amet </h2>
                 <span className="text-[1rem]"> consectetur adipisicing elit.
                     Dolores ducimus ipsa iusto, quam quas quos velit voluptas!
                        A ad, animi eius error exercitationem obcaecati pariatur porro,
                       rem veritatis vero vitae?
                       </span>
                <span className="text-[1rem] font-[800] ">OCT 2024</span>
            </div>
        </div>
    )
}

export default Highlight;