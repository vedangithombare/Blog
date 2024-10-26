import React from 'react';
import '../statics/styles.css'

function Highlight() {
    return (
        <div>
            <div className="flex flex-row bg-gray-400 w-[70rem] h-[35rem] rounded-[1.5rem] mx-7">
                <div className="bg-blue-600 w-3/5 h-full rounded-tl-[1.5rem] rounded-bl-[1.5rem]">
                    <img
                        className="object-cover max-h-full w-full rounded-tl-[1.5rem] rounded-bl-[1.5rem] aspect-square"
                        src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="img"/>
                </div>
                <div
                    className=" flex justify-evenly flex-col bg-black w-1/2 h-full rounded-tr-[1.5rem] rounded-br-[1.5rem] text-white p-10">
                    <div>
                    <span
                        className="text-white border-white border-[1px] px-3 py-[0.3rem] rounded-[20px]">quam quas quos
                    </span>
                    </div>
                    <h2 className="font-[500] text-[3rem] leading-[55px]">Lorem ipsum dolor sit amet </h2>
                    <div className=" ">
                        <span> consectetur adipisicing elit.
                        Dolores ducimus ipsa iusto, quam quas quos velit voluptas!
                        A ad, animi eius error exercitationem obcaecati pariatur porro,
                        rem veritatis vero vitae?
                        </span>
                    </div>
                    <div className="flex relative top-12">
                        <span>OCT 2024</span>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Highlight;