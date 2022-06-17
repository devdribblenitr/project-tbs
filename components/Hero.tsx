import React from "react";
const Hero = () => {
    return (
        
        <div className="flex px-6 flex-col md:flex-row lg:px-24 bg-black py-8">
            <div className="w-full md:h-96 flex flex-col my-auto">
                <div className="h-fit my-auto">
                    <b><h1 className="text-lime-500 text-5xl py-4 md:text-6xl">Lorem ipsum.</h1></b>
                    <p className="text-gray-400" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident quasi
                        pariatur non adipisci rem
                        doloribus sit error modi debitis.</p>
                </div>
            </div>
            <div className="w-full flex">
                <img src={"/images/hero_image.jpg"} alt="" className="my-auto opacity-75" />
            </div>
        </div>
        
    )
}
export default Hero;
