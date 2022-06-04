import React from "react";

const Hero = ()=>{
    return(
        <div className="flex px-6 flex-col md:flex-row lg:px-24" style="background-color:black;">
        <div className="w-full h-96 flex flex-col">
            <div className="h-fit my-auto">
                <h1 className="text-lime-500 text-5xl py-4 md:text-6xl">Lorem ipsum.</h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident quasi
                    pariatur non adipisci rem
                    doloribus sit error modi debitis.</p>
            </div>
        </div>
        <div className="w-full flex">
            <img src="../public/hero_image.jpg" alt="" className="my-auto" />
        </div>
    </div>
    )
}
export default Hero;
