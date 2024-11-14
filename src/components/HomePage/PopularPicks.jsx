import React from "react";

function PopularPicks({jsondata}) {
     const jsonData = [jsondata[5], jsondata[6],jsondata[7]];

     const trunkateData = (sentence)=>{
         const splitSentence = sentence.split(" ");
         return splitSentence.length>10 ?splitSentence.slice(0,10).join("  ") + "..." : sentence;
     }

    return (
        <div className="flex w-full flex-col p-4 ">
            <span className="font-bold text-2xl">Popular Picks</span>

            <div className="flex flex-col py-4 w-full h-[100%]">
                {jsonData.map((item) => {
                    return (
                        <div className="flex flex-col w-full h-[8rem] justify-center " id={item.id}>
                            <div className=" flex flex-col gap-1">
                            <span className="font-semibold text-[15px]">{item.title}</span>
                            <span className="text-[12px]">{trunkateData(item.content)} </span>
                                </div>
                            <div className="flex flex-row items-center gap-3">
                                <hr className="flex flex-1"/>
                                <span>Read More</span>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default PopularPicks;