import React from 'react';
import '../../statics/styles.css'

function Highlight({jsondata}) {

    const jsonData = [jsondata[5]];
    console.log("jsondata", jsonData);
     const trunkateData = (sentence)=>{
         const splitSentence = sentence.split(" ");
         return splitSentence.length>20?splitSentence.slice(0,20).join("  "): sentence;
     }
    return (
        <div>
            {jsonData.map((item) => {
                console.log("map item TAGS", item.tags);
                return (
                    <div
                        className="flex w-full flex-[1] h-full bg-black rounded-[1.5rem] flex-col overflow-hidden md:flex-row md:h-[560px]"
                        id={item.id}>
                        {/*Img*/}
                        <div className="flex  flex-[1] w-full">
                            <img
                                className="object-cover w-full"
                                src={item.cover_Img}
                                alt={item.title}/>
                        </div>
                        {/*content*/}
                        <div className="flex flex-col flex-1 justify-evenly p-6 gap-6 text-white rounded-r-[1.5rem]">
                            {/*Tags*/}
                            <div className="flex gap-4 flex-wrap ">
                                {item.tags.map((tag) => {
                                    return (
                                        <span
                                            className=" flex text-white border-white w-fit text-xs border-[1px] px-3 py-[0.3rem] rounded-[20px]">{tag}
                                        </span>
                                    )
                                })}
                            < /div>

                            <div className="flex flex-col gap-8">
                                {/*Heading*/}
                                <h2 className="font-[600] text-5xl leading-[55px]">{item.title} </h2>

                                {/*Main Text*/}
                                <span className="text-base items-center"> {trunkateData(item.content)}
                                    <span className="font-bold text-lg shadow-xl shadow-white-500/50 px-2">Read More</span>
                       </span>
                            </div>
                            <div>
                                <span className="text-sm font-[800] ">{item.published_date}</span>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Highlight;