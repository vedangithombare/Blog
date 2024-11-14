import React from 'react';
function RecentBlogs({jsondata}) {

const jsonData = jsondata;
 const trunkateData = (sentence)=>{
         const splitSentence = sentence.split(" ");
         return splitSentence.length>10?splitSentence.slice(0,10).join("  "): sentence;
     }
    return (
        <div className="flex flex-1 w-full  flex-col gap-4">
            <span className="font-bold text-4xl ">Recent Posts</span>
            <div className="flex flex-wrap justify-between gap-4">

                {jsonData.map((item)=>{
                    console.log("map item",item.cover_Img);
                    return (
                        <div className="flex flex-1 flex-col min-w-60 md:min-w-72 "  id ={item.id}>
                            {/*img*/}
                            <div className="flex h-44 rounded-md">
                                <img
                                    className="object-cover max-h-full w-full rounded-2xl aspect-square"
                                    src={item.cover_Img}
                                    alt="temp img"
                                />
                            </div>
                            {/* text */}
                            <div className="flex flex-col py-2 justify-center gap-1 ">
                        <span className=" font-normal text-xl">
                            {item.title}
                        </span>
                                <span className="text-sm text-gray-400">
                           {trunkateData(item.content)}
                        </span>
                                <div className="flex flex-row ">
                                    <span className="font-bold text-[0.8rem]">XYZ | {item.published_date}</span>
                                </div>
                            </div>
                        </div>

                    )
                })}
                {/*post div*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*        <div className="flex flex-row ">*/}
                {/*            <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*----------------*/}
                {/*   /!*post div*!/*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*            <div className="flex flex-row ">*/}
                {/*                <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*   /!*post div*!/*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*            <div className="flex flex-row ">*/}
                {/*                <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*   /!*post div*!/*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*            <div className="flex flex-row ">*/}
                {/*                <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*   /!*post div*!/*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*            <div className="flex flex-row ">*/}
                {/*                <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*   /!*post div*!/*/}
                {/*<div className="flex flex-1 flex-col min-w-60 md:min-w-72">*/}
                {/*    /!*img*!/*/}
                {/*    <div className="flex h-44 rounded-md">*/}
                {/*        <img*/}
                {/*            className="object-cover max-h-full w-full rounded-2xl aspect-square"*/}
                {/*            src="https://images.pexels.com/photos/9672817/pexels-photo-9672817.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"*/}
                {/*            alt="temp img"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    /!* text *!/*/}
                {/*    <div className="flex flex-col py-2 justify-center gap-1 ">*/}
                {/*        <span className=" font-normal text-xl">*/}
                {/*            exercitationem obcaecati*/}
                {/*        </span>*/}
                {/*        <span className="text-sm text-gray-400">*/}
                {/*            Dolores ducimus ipsa iusto, quam quas quos velit voluptas! A ad, animi eius*/}
                {/*        </span>*/}
                {/*            <div className="flex flex-row ">*/}
                {/*                <span className="font-bold text-[0.8rem]">XYZ | 24 OCT 2024</span>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <div className="flex justify-center">
                <button className="bg-black text-white p-3 px-6 rounded-[14px]">Load more</button>
            </div>
        </div>
    );
}

export default RecentBlogs;
