import React from "react";

function PopularPicks() {
    return (
        <div className="flex w-full flex-col p-4 ">
            <span className="font-bold text-2xl">Popular Picks</span>
            <div className="flex flex-col py-4 w-full h-[100%]  ">
                {/*popular post div*/}
                <div className="flex flex-col w-full h-[8rem] justify-center">
                    <span className="font-bold text-lg">Lorem Ipsum</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla hendrerit
                            erat </span>
                    <div className="flex flex-row items-center gap-3">
                        <hr className="flex flex-1"/>
                        <span>Read More</span>
                    </div>
                </div>
                <div className="flex flex-col w-full h-[8rem] justify-center">
                    <span className="font-bold text-lg">Lorem Ipsum</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla hendrerit
                            erat </span>
                    <div className="flex flex-row items-center gap-3">
                        <hr className="flex flex-1"/>
                        <span>Read More</span>
                    </div>
                </div>
                <div className="flex flex-col w-full h-[8rem] justify-center">
                    <span className="font-bold text-lg">Lorem Ipsum</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla hendrerit
                            erat </span>
                    <div className="flex flex-row items-center gap-3">
                        <hr className="flex flex-1"/>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPicks;