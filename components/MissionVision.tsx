// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="https://cdn.tailwindcss.com"></script>
//     <title>Project-tbs</title>
// </head>
// <body className="bg-black">
//     <h1 className="text-6xl text-green-500 font-mono ml-20">MISSION & VISION</h1>
//     <div className="flex justify-around">
//         <div className="py-16 px-24 w-2/5  bg-white shadow-sm  bg-neutral-800 text-gray-500 font-normal my-16">
//             <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12">Our Mission</h1>
//             <p className="text-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien.</p>
//         </div>
          
//         <div className="py-16 px-24 w-2/5  bg-white shadow-sm  bg-neutral-800 text-gray-500  font-normal my-16">
//             <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12">Our Vision</h1>
//             <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien.</p>
//         </div>
          
//     </div>
    
// </body>
// </html>

import React from 'react'
import '../index.css';

const MissionVision = () => {
  return (
    <>
        <h1 className="text-6xl text-green-500 font-mono ml-20 text-center lg:text-left">MISSION & VISION</h1>
        <div className=" w-full lg:flex lg:flex-row">
            <div className="mx-auto w-10/12 py-16 px-24 lg:w-2/5  bg-white shadow-sm  bg-neutral-800 text-gray-500 font-normal my-16">
                <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12">Our Mission</h1>
                <p className="text-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien.</p>
            </div>
            
            <div className="mx-auto w-10/12 py-16 px-24 lg:w-2/5  bg-white shadow-sm  bg-neutral-800 text-gray-500  font-normal my-16">
                <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12">Our Vision</h1>
                <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien.</p>
            </div>
            
        </div>
        
    </>
  )
}

export default MissionVision